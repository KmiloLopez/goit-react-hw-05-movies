import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'servicesAPI/APImovies';
import { useParams } from 'react-router-dom';

import CastList from 'components/CastList/CastList';

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

  
  return (
    <CastList loading={loading} data={data}/>
    
    
  );
};
export default Cast;
