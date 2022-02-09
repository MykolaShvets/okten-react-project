import {axiosService} from "./axio.service";
import {IMovie, IMovieList} from "../interfaces";
import {apiKey, urls} from "../constants/urls";

export const movieService = {
    getAll: (page: number) => axiosService.get<IMovieList>(`${urls.allMovies}&page=${page}`),
    getById: (id: string) => axiosService.get<IMovie>(`${urls.singleMovie}/${id}${apiKey}`),
    getUpcoming: () => axiosService.get<IMovieList>(`${urls.singleMovie}/upcoming${apiKey}`),
    getTopRated: () => axiosService.get<IMovieList>(`${urls.singleMovie}/top_rated${apiKey}`),
    getPopular: () => axiosService.get<IMovieList>(`${urls.singleMovie}/popular${apiKey}`),
    getByGenre: (genreId: string, page: number) => axiosService.get<IMovieList>(`${urls.allMovies}&page=${page}&with_genres=${genreId}`)
}
