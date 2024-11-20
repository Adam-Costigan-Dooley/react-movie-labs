import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getMovieRecommendations } from "../api/tmdb-api";
// import useMovie from "../hooks/useMovie";   Redundant

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: credits, error2, isLoading2, isError2 } = useQuery(
    ["credits", { id: id }],
    getMovieCredits
  );



  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      {movie && credits ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} credits={credits}  />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
