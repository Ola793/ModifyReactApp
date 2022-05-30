import { POPULAR_ENTITY } from "../constants/popular.constants";

export const setSelectedLanguage = (payload) => ({
  type: POPULAR_ENTITY.SET_SELECTED_LANGUAGE,
  payload,
});

export const getReposLoading = () => ({
  type: POPULAR_ENTITY.GET_REPOS_LOADING,
});

export const getReposSuccess = (payload) => ({
  type: POPULAR_ENTITY.GET_REPOS_SUCCESS,
  payload,
});

export const getReposFailed = (payload) => ({
  type: POPULAR_ENTITY.GET_REPOS_FAILED,
  payload,
});