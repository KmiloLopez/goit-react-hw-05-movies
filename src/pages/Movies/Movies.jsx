import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Outlet } from "react-router-dom";
import { fetchSearchMovie } from 'servicesAPI/APImovies';
import { MoviesContainer } from './Movies.styled';

const Movies = () => {
 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams]= useSearchParams();
  const search = useMemo(() => searchParams.get("search"), [searchParams]);
  const location = useLocation();

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const {elements} = e.target
    console.log("elements", elements.search.value)
    const getData = async () => {
      try {
       
        const data = await fetchSearchMovie(elements.search.value);
        setData(data.results);
       
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData(); 
  };
  
  return (
    <MoviesContainer>
      {console.log('data from Movies page', data)}
      <h2>Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
          name="search"
          value={search}
          onChange={(e)=> setSearchParams({ search: e.target.value })} 
        ></input>
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <ul>
          {data.map(movieFound => {
            return(

            <li key={movieFound.id}>
              <Link to={`/movies/${movieFound.id}`} state={{from:location}} >{movieFound.title}</Link>
            </li>
            )
          })}
        </ul>
      )}
      <Outlet />
    </MoviesContainer>
  );
};
export default Movies;