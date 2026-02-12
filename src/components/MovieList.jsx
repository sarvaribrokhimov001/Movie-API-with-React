import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
  const {Movies} = props;

  return (
    <div>
        {Movies?.length > 0 ? 
            Movies.map((item) => <MovieItem {...item}  key={item?.Title} />)
            
            // Poster = {item?.Poster} 
            // Title = {item?.Title} 
            // Year = {item?.Year} 
            
             : "Loading...."}
    </div>
  );
};
export default MovieList;