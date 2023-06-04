import Cast from "pages/Cast";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import Review from "pages/Review";
import {Routes, Route} from "react-router-dom"
import SharedLayout from "./SharedLayout";
import { useState } from "react";


const TOKKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmUxNDAwMDM2NTQ5MGJhZWI0OTQ4ZDI1NTM3MGU0NyIsInN1YiI6IjY0MmUwZDc5YTZhNGMxMDBiNmQ1YmQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fhcyRsSpqxcScTx3k8UCgqBl4PFNCmjnjrGZc5gvKXU";

export const App = () => {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/trending/get-trending" element={<Home TrendingMovies={TrendingMovies} setTrendingMovies={setTrendingMovies}/>} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails TrendingMovies={TrendingMovies}/>}>

              <Route path="/movies/:movieId/cast" element={<Cast />}/>
              <Route path="/movies/:movieId/reviews" element={<Review />}/>

          </Route>
          <Route path="*" element={<Home/>} />
        </Route>    
      </Routes>
    <h1>Buscamos en la API</h1>
    </div>
  );
};
