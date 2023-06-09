const BASE_URL ="https://api.themoviedb.org/3"
const API_KEY = "efe14000365490baeb4948d255370e47"
/* 'https://api.themoviedb.org/3/movie/11?api_key=' */
export async function fetchMovieDetails(id) {
    const query = `/movie/${id}`;
    try {
      const data = await fetch(
        `${BASE_URL}${query}?language=en-US&api_key=${API_KEY}`
      );
      const datas = await data.json()
      return datas
    } catch (error) {
      throw error;
    }
  }

  export async function fetchSearchMovie(SearchInput) {
    const query = `/search/movie?query=${SearchInput}`;
    console.log("searchInput",SearchInput)
    try {
      const data = await fetch(
        `
        ${BASE_URL}${query}&include_adult=true&language=en-US&page=1&api_key=efe14000365490baeb4948d255370e47`
      );
      const datas = await data.json()
      return datas
    } catch (error) {
      throw error;
    }
  }
  export async function fetchMovieCast(id) {
    const query = `/movie/${id}`;
    try {
      const data = await fetch(
        
        `${BASE_URL}${query}/credits?language=en-US&api_key=${API_KEY}`
      );
      const datas = await data.json()
      return datas
    } catch (error) {
      throw error;
    }
    
  }

  export async function fetchMovieReviews(id) {
    const query = `/movie/${id}`;
    try {
      const data = await fetch(
        `${BASE_URL}${query}/reviews?language=en-US&api_key=${API_KEY}`
      )
      const datas = await data.json();
      return datas
    } catch (error) { throw error;
      
    }
  }