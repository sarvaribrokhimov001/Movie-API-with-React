import React from 'react'

const MovieItem = ({Poster , Year , Title}) => {
  return (
     <div key={Title}> 
        <h1>{Title}</h1> 
        <p>{Year}</p>
        <img src={Poster} alt={Title} />
     </div>
  )
}
export default MovieItem