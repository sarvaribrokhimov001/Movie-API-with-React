import React from 'react'

const MovieItem = ({Poster , Year , Title , Type}) => {
  return (
     <div className='container' key={Title}> 
        <img className='poster' src={Poster} alt={Title} />
        <h1 className='eltitle'> Title: {Title} </h1> 
        <p className='eltype'> Type: {Type} </p>
        <p className='elyear'> Year: {Year} </p>
     </div>
  )
}
export default MovieItem