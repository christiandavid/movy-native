import { TYPES } from '@/actions/FeaturedMovieActions';

export const initialState = {
  id: null,
  posterPath: null,
  genres: [],
  lastUpdate: null,
};

export const featuredMovieReducer = (
  state = initialState,
  { payload, type }
) => {
  switch (type) {
    case TYPES.FEATURED_MOVIE_SUCCESS:
      return {
        ...state,
        id: payload.featuredMovie.id,
        posterPath: payload.featuredMovie.poster_path,
        genres: payload.featuredMovie.genres,
        lastUpdate: Date.now(),
      };
    default:
      return state;
  }
};
