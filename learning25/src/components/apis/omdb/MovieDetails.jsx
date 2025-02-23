import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MovieDetails = () => {
  const [details, setDetails] = useState({});

  const GetMovieDetails = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=34b6c491&i=${id}`
    );
    console.log(res.data);

    setDetails(res.data);
  };
  const id = useParams().id;

  useEffect(() => {GetMovieDetails()},[])
  return (
    <div style={{ textAlign: "center" }}>
      {/* <h1>imdbID = {id}</h1> */}
      {/* <button onClick={() => GetMovieDetails()}>Get</button> */}
      {details.Title ? 
      <div style={{ padding: "2rem", margin: "2rem 5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            backgroundColor: "grey",
          }}
        >
          <div>
            <h2>{details.Title}</h2>
            <p>{details.Runtime}</p>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <div>
              <h3>Imdb Rating</h3>
              <h4>{details.imdbRating}</h4>
            </div>
            <div>
              <h3>Imdb Votes</h3>
              <h4>{details.imdbVotes}</h4>
            </div>
          </div>
        </div>
        <div className="poster" style={{display:"flex",justifyContent:"space-between",marginTop:"1rem",gap:"2rem"}}>
          <img src={details.Poster} style={{height:"500px",width:"350px", objectFit:"cover"}} alt="" />
          <div style={{backgroundColor:""}}>
            <h2>{details.Plot}</h2>
            <h3>Actors: {details.Actors}</h3>
            <h3>Awards: {details.Awards}</h3>
            <h3>Genre: {details.Genre}</h3>
            <h3>Writer: {details.Writer}</h3>
            <h3>Year: {details.Year}</h3>
          </div>
        </div>
      </div>
      :
      ""
      } 
    </div>
  );
};

export default MovieDetails;
