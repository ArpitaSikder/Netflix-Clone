import React, { useState, useEffect } from "react";
import requests from "./API";
import "./Poster.css";

let key = requests.key;
const baseurl = "https://image.tmdb.org/t/p/original";
const popular_url = `movie/popular?api_key=${key}&language=en-US`;
let description = "";

function Poster() {
  const [movie, movielist] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const getvalue = await requests.url.get(popular_url);
      movielist(getvalue.data.results[Math.floor(Math.random() * 21)]);
      return getvalue;
    }
    fetchdata();
  }, []);
  console.log("HELLOO");
  console.log(movie);

  function des(s) {
    if (s?.length > 150) {
      description = s.substr(0, 149) + "...";
    } else {
      description = s;
    }
    return description;
  }

  return (
    <header
      className="latest_poster"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="poster_contents">
        <div className="poster_title">{movie?.title}</div>
        <div className="poster_description">{des(movie?.overview)}</div>
        <div className="poster_buttons">
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
      <div className="gradient"></div>
    </header>
  );
}

export default Poster;
