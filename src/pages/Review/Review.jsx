import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servicesAPI/APImovies';
import { useState, useEffect } from 'react';
import { ContainerReviews, Containerli } from './Review.styled';

const Review = () => {
  const [data, setData] = useState('');
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  console.log('movieID en REVIEWS', movieId);
useEffect(()=>{

    const getReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setData(reviews);
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
},[movieId])

  return (
    
    <>
    
    {loading?(<h3>Loading Reviews</h3>): 
    (
      <ContainerReviews>
{
        data.results.length>0?(data.results.map((review)=>{
          return(
              <Containerli key={review.id}>
                <h4>Autor: {review.author}</h4>
              <p>{review.content}</p>
              </Containerli>
             
          )
      })):(<h2>We don´t have any reviews for this movie.</h2>)
        
}
      </ContainerReviews>
    )
            
           
    }
     
    </>
  );
};
export default Review;
