import { Link } from 'react-router-dom';
import { useState } from 'react';

const URL = 'https://api.themoviedb.org/3/movie/11?api_key=';
const KEY = 'efe14000365490baeb4948d255370e47';
const Movies = () => {
  const [SearchInput, setSearchInput] = useState('');
  

  const handleChange = e => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const submited = () => {
    console.log('bucando', SearchInput);

    
  };
  return (
    <>
      <h2>Movies</h2>
      <form onSubmit={submited}>
        <input
          name="search"
          value={SearchInput}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>

      <ul>
        <li>
          <Link to="/movies/1">movie 1</Link>
          <Link to="/movies/2">movie 2</Link>
          <Link to="/movies/3">movie 3</Link>
          <Link to="/movies/4">movie 4</Link>
          <Link to="/movies/5">movie 5</Link>
        </li>
      </ul>
    </>
  );
};
export default Movies;
