import { POPULAR_ENTITY } from "../constants/popular.constants";

export const initialState = {
  selectedLanguage: "All",
  loading: false,
  repos: null,
  error: null,
};

export const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_ENTITY.SET_SELECTED_LANGUAGE:
      state.selectedLanguage = action.payload;
      state.repos = null;
      return Object.assign({}, state);

    case POPULAR_ENTITY.GET_REPOS_LOADING:
      state.loading = true;
      state.error = null;
      return Object.assign({}, state);

    case POPULAR_ENTITY.GET_REPOS_SUCCESS:
      state.loading = false;
      state.repos = action.payload;
      return Object.assign({}, state);

    case POPULAR_ENTITY.GET_REPOS_FAILED:
      state.loading = false;
      state.error = action.payload;
      return Object.assign({}, state);

    default:
      return state;
  }
};
