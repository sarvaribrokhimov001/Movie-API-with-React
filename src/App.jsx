import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import '../src/App.css';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

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

  const elSearch = (e) => {
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`)
      .then((response) => {
          if (response.data.Response === "False") {
            setData([]);
            Toastify({
              text: "Movie is not found ❌",
              duration: 3500,
              gravity: "top",
              position: "center",
              close: true,
              style: {
                background: "linear-gradient(to right, black, black)",
                color: "red",
                border: "3px solid red",
                boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)",
                fontWeight: "700"
              }
            }).showToast();

          } else {
              setData(response.data.Search);
              Toastify({
                text: "Search muvaffaqiyatli amalga oshirildi 🥳",
                duration: 3500,
                gravity: "top",
                position: "center",
                close: true,
                style: {
                  background: "linear-gradient(to right, black, black)",
                  color: "green",
                  border: "3px solid green",
                  boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)",
                  fontWeight: "700"
                }
              }).showToast();
            }
        })
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