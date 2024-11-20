import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieRecommendations = ({ recommendations, title, action }) => {  // Don't miss this!

  const movies = recommendations.results;
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  return (
    <>
        { movies ? (
            <>
                <Grid container>
                    <Grid size={10}>
                    <Header title={title} />
                </Grid>
                <Grid container sx={{flex: "1 1 1000px"}}>
                    <MovieList action={action} movies={movies}></MovieList>
                </Grid>
                </Grid>
            </>
          ) : (<p>Waiting for movie recommendations</p>)
        }
    </>
    );
}

export default MovieRecommendations;