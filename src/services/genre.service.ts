import {axiosService} from ".";
import {urls} from "../constants/urls";
import {IGenre} from "../interfaces";


export const genreService = {
    getAll: () => axiosService.get<{ genres: IGenre[] }>(urls.allGenres)
}
