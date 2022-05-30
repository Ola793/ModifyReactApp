import { fetchPopularRepos } from "../../utils/api";
import {
  getReposFailed,
  getReposLoading,
  getReposSuccess,
} from "../actions/popular.actions";

export const fetchPopularReposThunk = (language) => (dispatch) => {
  dispatch(getReposLoading());
  return fetchPopularRepos(language)
    .then((data) => dispatch(getReposSuccess(data)))
    .catch((error) => dispatch(getReposFailed(error.message)));
};