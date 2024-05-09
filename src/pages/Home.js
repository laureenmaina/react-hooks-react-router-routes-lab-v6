import React from 'react';
import MovieCard from '../components/MovieCard';

function Home({ movies }) {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
