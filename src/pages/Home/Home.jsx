import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { HomeContainer } from './Home.styled';

const Home = ({TrendingMovies,setTrendingMovies}) => {
  
  useEffect(() => {
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmUxNDAwMDM2NTQ5MGJhZWI0OTQ4ZDI1NTM3MGU0NyIsInN1YiI6IjY0MmUwZDc5YTZhNGMxMDBiNmQ1YmQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fhcyRsSpqxcScTx3k8UCgqBl4PFNCmjnjrGZc5gvKXU',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => setTrendingMovies(response.results))

      .catch(err => console.error(err));
  });


  
  return (
    <HomeContainer>
      <h2>Home</h2>
      <ul>
        {TrendingMovies.map(TrendMovie => {
          return (
            <li key={TrendMovie.id}>
              <Link to={`/movies/${TrendMovie.id}`}>
                {TrendMovie.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
      
    </HomeContainer>
  );
};
export default Home;
