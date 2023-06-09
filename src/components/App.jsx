import Cast from "pages/Cast/Cast";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import Review from "pages/Review/Review";
import {Routes, Route} from "react-router-dom"
import SharedLayout from "./SharedLayout/SharedLayout";
import { useState } from "react";
import Homy from "pages/Homy";

export const App = () => {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homy/>}/> 
          <Route path="/trending/get-trending" element={<Home TrendingMovies={TrendingMovies} setTrendingMovies={setTrendingMovies}/>} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails TrendingMovies={TrendingMovies}/>}>

              <Route path="/movies/:movieId/cast" element={<Cast />}/>
              <Route path="/movies/:movieId/reviews" element={<Review />}/>

          </Route>
          <Route path="*" element={<Home/>} />
        </Route>    
      </Routes>
    
    </div>
  );
};
