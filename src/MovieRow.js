import React, { useState, useEffect } from "react";
import requests from "./API";
import { render } from "@testing-library/react";
import axios from "axios";
import "./MovieRow.css";
import leftarrow from "./left-arrow.png";
import rightarrow from "./right-arrow.png";
import ReactPlayer from "react-player/youtube";

let key = requests.key;
let genre_url = `discover/movie?api_key=${key}&with_genres=`;
let original_url = `/discover/tv?api_key=${key}&with_networks=213`;
let top_rated_url = `movie/top_rated?api_key=${key}&language=en-US&page=1`;
let trending_url = `trending/all/week?api_key=${key}`;
let fetchvideo = `/videos?api_key=${key}&language=en-US`;

const baseurl = "https://image.tmdb.org/t/p/original";
let x = [];
let video_available = false;
let reactplayer_available = true;
let count = 0;

function MovieRow({ genre_id, genre_name, has }) {
  const [movies, movielist] = useState([]);
  const [videos, setVideos] = useState([]);
  let geturl = ""; //making it const wont allow the geturl to change
  if (genre_id == "original") {
    geturl = original_url;
  } else if (genre_id == "trending") {
    geturl = trending_url;
  } else if (genre_id == "top") {
    geturl = top_rated_url;
  } else {
    geturl = genre_url + genre_id;
  }

  useEffect(() => {
    async function fetchData() {
      console.log("v2: " + geturl + "\n");
      const getvalue = await requests.url.get(geturl);
      movielist(getvalue.data.results);
      return getvalue;
    }
    fetchData();
  }, [geturl]);

  console.log(movies);

  const get_movie_video = (id) => {
    const video_url = `/movie/${id}${fetchvideo}`;
    console.log("d: " + video_available);

    async function fetchVideo() {
      try {
        const video_request = await requests.url.get(video_url);
        console.log(video_request);
        setVideos(video_request.data.results);
      } catch (error) {
        console.log("x: " + error);
      }
    }

    fetchVideo();

    console.log("here2");
    console.log(videos);
    console.log(videos[0]);
    x = videos;

    if (video_available) {
      video_available = false;
    } else {
      if (Array.isArray(x) && x.length > 0) {
        console.log("here3");
        console.log(x.length);
        if (typeof x[0] === "undefined") {
          video_available = false;
        } else {
          video_available = true;
          reactplayer_available = true;
        }

        console.log("booleanValue: " + video_available);
      }
    }
  };

  return (
    <div className="MovieRow">
      <h1 className="genre-name">{genre_name}</h1>

      <div className="movie_posters">
        <script src="https://code.jquery.com/jquery-3.5.0.js"></script>

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`movie_poster ${has && "movie_poster_original"}`}
            onClick={() => {
              get_movie_video(movie.id);
            }}
            src={`${baseurl}${has ? movie.poster_path : movie.backdrop_path} `}
          />
        ))}
      </div>
      {video_available && (
        <div className="embed-video">
          <ReactPlayer
            width="100%"
            url={`https://www.youtube.com/watch?v=${x[0].key}`}
            playing={true}
            controls={true}
          />
        </div>
      )}
    </div>
  );
}

export default MovieRow;
