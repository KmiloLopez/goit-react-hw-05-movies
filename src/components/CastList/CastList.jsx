import Loader from "components/Loader/Loader";
import { ContainerC, ContainerCast } from "pages/Cast/Cast.styled";


const CastList=({loading, data})=>{
    return(

        <ContainerC>
          
    
          {loading === true ? (
            <Loader/>
          ) : (
          data.cast.length>0?(data.cast.map(actor => {
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
          })):(<h2>We don´t have any Cast information about this movie.</h2>)
            
          )}
        </ContainerC>
    )
    
}
export default CastList;