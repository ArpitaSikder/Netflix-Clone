import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import UserBar from "./UserBar";
import Poster from "./Poster";

function App() {
  return (
    <div className="App">
      <UserBar />
      <Poster />
      <MovieRow genre_id="original" genre_name="NETFLIX ORIGINALS" has />
      <MovieRow genre_id="trending" genre_name="Trending Now" />
      <MovieRow genre_id="top" genre_name="Top Rated" />
      <MovieRow genre_id="10749" genre_name="Romantic" />
      <MovieRow genre_id="27" genre_name="Horror" />
      <MovieRow genre_id="35" genre_name="Comedy" />
      <MovieRow genre_id="28" genre_name="Action" />
      <MovieRow genre_id="99" genre_name="Documentry" />
    </div>
  );
}

export default App;
