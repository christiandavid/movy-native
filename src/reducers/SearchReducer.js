import { TYPES } from '@/actions/SearchActions';

export const initialState = {
  results: [],
  page: 1,
  totalPages: 0,
};

export const searchReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.SEARCH_SUCCESS:
      return {
        ...state,
        results: [...state.results, ...payload.results],
        page: payload.page,
        totalPages: payload.totalPages,
      };
    case TYPES.CLEAR_STORE:
      return { ...initialState };
    default:
      return state;
  }
};
