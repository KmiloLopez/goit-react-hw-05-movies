import { Outlet } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ TrendingMovies }) => {
  const { movieId } = useParams();


  const movieSelected = TrendingMovies.find(movie=>movieId===movie.id)

  movieSelected && console.log('movieSelected', movieSelected);

  setTimeout(function(){
    console.log("Hola Mundo",movieSelected);
}, 2000);


  return (
    <>
       <h2>Movie Title {movieId}</h2> 
      {console.log('TrendingMovies', TrendingMovies)}
      {console.log('TrendingMovies[0].id', TrendingMovies[0].id)}

      <p>
        Informcion y descripcion de esta pelicula Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Distinctio totam, officiis explicabo eaque
        ipsum exercitationem iste corrupti. Fuga nulla molestias reprehenderit
        totam provident, delectus, error pariatur odio, sint autem voluptatem.
      </p>
      <Link to="/movies/:movieId/cast">Cast</Link>
      <Link to="/movies/:movieId/reviews">Review</Link>
      <Outlet />
    </>
  );
};
export default MovieDetails;
