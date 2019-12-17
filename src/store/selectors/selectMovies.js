import {sortMovies} from "../../services/sortMovies";
import {filterMovies} from "../../services/filterMovies";
import {selectValue} from "./selectValue";
import {selectSortBy} from "./selectSortBy";
import {selectSearchBy} from "./selectSearchBy";

export const selectAllMovies = state => state.data || [];

export const selectMovies = state => {
    const value = selectValue(state);
    const sortBy = selectSortBy(state);
    const searchBy = selectSearchBy(state);
    return sortMovies(filterMovies(selectAllMovies(state), searchBy, value), sortBy)
};
