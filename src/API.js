import axios from "axios";

const req_url = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

const requests = {
  url: req_url,
  key: "3a2953f0cd7e3f5fe9beda7652b4cccc", //get the API key from the TMDB>settings>API
};

export default requests;

//discover/movie?api_key=3a2953f0cd7e3f5fe9beda7652b4cccc&language=en-US&include_video=false&with_genres=28
