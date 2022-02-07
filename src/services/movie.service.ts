import {axiosService} from "./axio.service";
import {IMovie, IMovieList} from "../interfaces";
import {apiKey, urls} from "../constants/urls";

export const movieService = {
    getAll: () => axiosService.get<IMovieList>(urls.allMovies),
    getById: (id:string) => axiosService.get<IMovie>(`${urls.singleMovie}/${id}${apiKey}`),
    getByPage: (page:number) => axiosService.get<IMovieList>(`${urls.allMovies}&page=${page}`)
}
