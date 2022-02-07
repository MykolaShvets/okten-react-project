import {axiosService} from "./axio.service";
import {IMovie, IMovieList} from "../interfaces";
import {apiKey, urls} from "../constants/urls";

export const movieService = {
    getAll: (page:number) => axiosService.get<IMovieList>(`${urls.allMovies}&page=${page}`),
    getById: (id:string) => axiosService.get<IMovie>(`${urls.singleMovie}/${id}${apiKey}`)
}
