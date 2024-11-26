import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import { Pagination } from "@mui/material"; 

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
  const [currentPage, setCurrentPage] = useState(1);


  const moviesPerPage = 6;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMoviesForPage = movies.slice(indexOfFirstMovie, indexOfLastMovie);


  return (
    <>
        { movies ? (
            <>
                <Grid container>
                    <Grid size={12}>
                    <Header title={title} />
                </Grid>
                <Grid container sx={{flex: "1 1 1000px"}}>
                    <MovieList action={action} movies={currentMoviesForPage}></MovieList>
                </Grid>
                </Grid>
                <Pagination
        count={Math.ceil(movies.length / moviesPerPage)} 
        page={currentPage} 
        onChange={(e, value) => setCurrentPage(value)} 
      />

            
                
            </>
          ) : (<p>Waiting for movie recommendations</p>)
        }
    </>
    );
}

export default MovieRecommendations;