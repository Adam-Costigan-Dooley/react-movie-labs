import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [releaseDateFilter, setReleaseDateFilter] = useState("");
  const [releaseDateOrder, setReleaseDateOrder] = useState("Older");


  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => { 
      return releaseDateFilter ? m.release_date.startsWith(releaseDateFilter) : true; 
    })
    .sort((a, b) => {
      if (releaseDateOrder === "Newer") {
        return new Date(b.release_date) - new Date(a.release_date); 
      } else {
        return new Date(a.release_date) - new Date(b.release_date); 
      }
    });


    

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "releaseDate") setReleaseDateFilter(value);
    else if (type === "releaseDateOrder") setReleaseDateOrder(value);
    else setGenreFilter(value);
  };
  

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            releaseDateFilter={releaseDateFilter}
            releaseDateOrder={releaseDateOrder}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;