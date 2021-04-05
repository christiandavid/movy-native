import { SearchController } from '@/controllers';

export const TYPES = {
  SEARCH: 'SEARCH',
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_ERROR: 'SEARCH_ERROR',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  CLEAR_SEARCH: 'CLEAR_SEARCH',
};

const searchRequest = () => ({
  type: TYPES.SEARCH_REQUEST,
  payload: null,
});

const searchError = error => ({
  type: TYPES.SEARCH_ERROR,
  payload: { error },
});

const searchSuccess = ({ results, page, totalPages }) => ({
  type: TYPES.SEARCH_SUCCESS,
  payload: { results, page, totalPages },
});

const clearStore = () => ({
  type: TYPES.CLEAR_SEARCH,
  payload: null,
});

export const cleanResults = () => dispatch => dispatch(clearStore());

export const search = ({ query, page }) => async dispatch => {
  dispatch(searchRequest());
  try {
    const response = await SearchController.search({ query, page });
    if (response.page === 1) {
      dispatch(cleanResults());
    }
    return dispatch(searchSuccess(response));
  } catch (error) {
    return dispatch(searchError(error.message));
  }
};
