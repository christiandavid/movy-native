import { TYPES } from '@/actions/FeaturedActions';

export const initialState = {
  id: null,
  posterPath: null,
  genres: [],
  lastUpdate: null,
};

export const featuredReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.FEATURED_SUCCESS:
      return {
        ...state,
        id: payload.featured.id,
        posterPath: payload.featured.poster_path,
        genres: payload.featured.genres,
        lastUpdate: Date.now(),
      };
    case TYPES.CLEAR_STORE:
      return { ...initialState };
    default:
      return state;
  }
};
