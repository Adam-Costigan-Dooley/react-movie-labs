Static Content

Upcoming Movies (/upcoming):
Fetches a list of movies that will be released soon and may have early releases in theaters.
Provides users with details about the latest films.

Popular Movies (/popular):
Retrieves a curated list of the most popular movies based on audience engagement and views.

Top-Rated Movies (/top-rated):
Displays a list of highly rated films, sorted by viewer ratings on the API.

Parameterized Content

Recommended Movies (/movie/:id/recommendations):
Suggests movies similar to the one currently being viewed.
Recommendations are tailored based on the preferences of users who enjoyed the same movie.

Watchlist Functionality:
Users can add movies they want to watch to their personal "Must-Watch" list. This was added to the "recommended movies" to allow users to very quickly put together a suitable "Must-Watch" list.
Includes a dedicated Watchlist Page to easily manage and view saved titles.

Endpoints Utilized:
/movie/now_playing: Fetches currently playing movies.
/movie/popular: Retrieves popular movie titles.
/movie/top_rated: Returns a list of top-rated movies.
/movie/:id/recommendations: Provides recommended movies based on a specific movie.
