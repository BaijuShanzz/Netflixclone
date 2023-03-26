// import {api_key} from constants
import { api_Key } from "./Constants/Constants"

//calling different movies category wise with the help of Api
export const originals = `discover/tv?api_key=${api_Key}&with_networks=213`;
export const actionMovies = `discover/movie?api_key=${api_Key}&with_genres=28`;
export const trendingMovies = `trending/all/week?api_key=${api_Key}&language=en-US`;
export const comedyMovies = `discover/movie?api_key=${api_Key}&with_genres=35`;
export const horrorMovies = `discover/movie?api_key=${api_Key}&with_genres=27`;
export const romanceMovies = `discover/movie?api_key=${api_Key}&with_genres=10749`;
export const documentarieMovies = `discover/movie?api_key=${api_Key}&with_genres=99`;