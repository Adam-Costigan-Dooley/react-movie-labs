Name: Adam Costigan Dooley

Overview:
This repository has my Movies App project, a React application that allows users to access the Movie Database (TMDB) API. Users can discover upcoming and popular movies, favourite and right reviews, while making use of detailed information on the movies.


------------------------------------------------------------------------------------------------------------------
Static Content
------------------------------------------------------------------------------------------------------------------

Upcoming Movies (/upcoming):
Fetches a list of movies that will be released soon and may have early releases in theaters.
Provides users with details about the latest films.

Popular Movies (/popular):
Retrieves a curated list of the most popular movies based on audience engagement and views.

Top-Rated Movies (/top-rated):
Displays a list of highly rated films, sorted by viewer ratings on the API.


------------------------------------------------------------------------------------------------------------------
Parameterized Content
------------------------------------------------------------------------------------------------------------------

Recommended Movies (/movie/:id/recommendations):
Suggests movies similar to the one currently being viewed.
Recommendations are tailored based on the preferences of users who enjoyed the same movie.

Movie Detailed Credits:
Movies have their actors credited below the film in the detail menu.

Primary Endpoints Utilized:
/movie/now_playing: Fetches currently playing movies.
/movie/popular: Retrieves popular movie titles.
/movie/top_rated: Returns a list of top-rated movies.
/movie/:id/recommendations: Provides recommended movies based on a specific movie.
/movies/must-watch: The list of must watch movies from the recommendations or upcoming lists.

------------------------------------------------------------------------------------------------------------------
Additional Contest
------------------------------------------------------------------------------------------------------------------
Watchlist Functionality:
Users can add movies they want to watch to their personal "Must-Watch" list. This was added to the "recommended movies" to allow users to very quickly put together a suitable "Must-Watch" list.
Includes a dedicated Watchlist Page to easily manage and view saved titles.