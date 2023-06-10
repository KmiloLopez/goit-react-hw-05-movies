
import {Routes, Route} from "react-router-dom"
import { useState, lazy} from "react";
import SharedLayout from "./SharedLayout";


const Home = lazy(()=>import("pages/Home/Home"))
const Movies = lazy(()=>import("pages/Movies/Movies"))
const Review = lazy(()=>import("pages/Review/Review"))
const MovieDetails = lazy(()=>import("pages/MovieDetails/MovieDetails"))
const Cast = lazy(()=>import("pages/Cast/Cast"))

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
    
    </div>
  );
};
