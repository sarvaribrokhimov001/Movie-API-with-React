import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';

const App = () => {
  const [name , setName] = useState("panda");
  const [data , setData] = useState([]);
  const api = `https://www.omdbapi.com/?s=panda&apikey=c65fcde9`; 


  useEffect(() => {
    axios.get(api).then(data => {
      setData(data?.data?.Search);
    });
  } , []);

  const elName = (e) => {
    setName(e?.target?.value);
  }
  console.log(data);

  const elSearch = (e) => {
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`)
      .then((response) => {
        setData(response?.data?.Search);
      });
    }

  return (
    <div>
      <h1 className='title'> Movie API with React </h1>
      <form onSubmit={elSearch}> 
        <input className='input' type="search" placeholder='Search....' value={name} onChange={elName}/>
      </form>
      <MovieList Movies={data}/>
    </div>
  );
};
export default App;