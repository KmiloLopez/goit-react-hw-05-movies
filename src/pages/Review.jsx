import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servicesAPI/APImovies';
import { useState, useEffect } from 'react';

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
    <h2>Review</h2>
    {loading?(<h3>Loading Reviews</h3>): 
    (
        data.results.map((review)=>{
            return(
                <li key={review.id}>
                 <p>{review.author}</p>
                <p>{review.content}</p>
                </li>
               
            )
        })
    )
            
           
    }
     
    </>
  );
};
export default Review;
