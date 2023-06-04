import { Link } from "react-router-dom";

const Cast = () =>{
    return (<>
    <h2>Cast</h2>
    <Link to="/movies/:movieId/cast">CAST</Link>
    </>)
}
export default Cast;