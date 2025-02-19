import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";

const searchMovie = () => {
  const [moviename, setMoviename] = useState([]);
const [moviedetails, setMoviedetails] = useState("")
  const getMovieData = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=34b6c491&s=${moviedetails}`
    );
    setMoviename(res.data.Search);
    console.log(res.data.Search);
    // console.log(details.Title);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>search movie</h1>
      <input type="text" onChange={(e) => {setMoviedetails(e.target.value)}} />
      <button className="btn btn-info" onClick={() => getMovieData()}>
        search
      </button>

      <div class="container mt-4">
        <div class="row">
          {moviename?.map((movie) => {
            return (
              <div class="col-md-2">
                <div class="card">
                    <Link to={`/moviedetails/${movie.imdbID}`}>
                    <img src={movie.Poster} class="card-img-top" alt="" />
                    </Link>
                  <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default searchMovie;
