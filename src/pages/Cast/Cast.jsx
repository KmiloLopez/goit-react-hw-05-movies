import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'servicesAPI/APImovies';
import { useParams } from 'react-router-dom';
import { ContainerC, ContainerCast } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const movieCast = await fetchMovieCast(movieId);
        setData(movieCast);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  console.log('data en CAST', data);
  return (
    <ContainerC>
      <h2>Cast</h2>

      {loading === true ? (
        <h2>Cargando</h2>
      ) : (
        data.cast.map(actor => {
          return (
            <ContainerCast key={actor.id}>
              
              {actor.profile_path ? (
                <img
                  alt={actor.original_name}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  width={200}
                />
              ) : (
                <p> Sorry, no image found</p>
              )}
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </ContainerCast>
          );
        })
      )}
    </ContainerC>
  );
};
export default Cast;
