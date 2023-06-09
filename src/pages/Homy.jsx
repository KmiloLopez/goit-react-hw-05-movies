import { Link } from "react-router-dom";

const Homy = () =>{
    return (<>
    <h2>HOMY</h2>
    <Link to="/movies/:movieId/cast">CAST</Link>
    </>)
}
export default Homy;