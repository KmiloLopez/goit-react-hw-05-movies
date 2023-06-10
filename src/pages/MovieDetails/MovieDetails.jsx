import { Outlet } from 'react-router-dom';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../servicesAPI/APImovies';
import { Container, ContainerBottom, Containerright, Containertop, GoBackButton } from './MovieDetails.styled';

import Loader from 'components/Loader/Loader';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        /* setLoading(true); */
        const data = await fetchMovieDetails(movieId);
        setData(data);
        //se puede remover?
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const getYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };
  const getGenres = arrGenres => {
    return arrGenres.map(genre => genre.name).join(', ');
  };
  const location = useLocation();
  const cameBack = location.state?.from ?? '/trending/get-trending';
  return (
    <Container>
      <GoBackButton>
        <Link to={cameBack} className="go-back-link">
          ↶ Go Back
        </Link>
      </GoBackButton>
      <Containertop>
        {loading ? (
           <Loader/> 
          
        ) : (
          <div>
            {data.poster_path ? (
              <img
                alt={data.original_title}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              />
            ) : (
              <p> Sorry </p>
            )}
          </div>
        )}
        <Containerright>
          {loading ? (
            <Loader/>
          ) : (
            <div>
              <div>
                <h1>
                  {data.original_title} ({getYear(data.release_date)})
                </h1>
                <p>User Score: {~~(data.vote_average * 10)}%</p>
                <h3>Overview</h3>
                <p>{data.overview}</p>
                <h3>Genres</h3>
                <p>{getGenres(data.genres)}</p>
              </div>

             
            </div>
          )}
        </Containerright>
      </Containertop>
      <ContainerBottom>
                
                  <li>
                    <Link style={{fontSize:20}} to="cast" state={{ from: cameBack }}>
                      Cast
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:20}} to="reviews" state={{ from: cameBack }}>
                      Reviews
                    </Link>
                  </li>
                
              </ContainerBottom>
      <Outlet />
    </Container>
  );
};
export default MovieDetails;
