import { FeaturedMovieController } from '@/controllers';

export const TYPES = {
  FEATURED_MOVIE: 'FEATURED_MOVIE',
  FEATURED_MOVIE_REQUEST: 'FEATURED_MOVIE_REQUEST',
  FEATURED_MOVIE_SUCCESS: 'FEATURED_MOVIE_SUCCESS',
  FEATURED_MOVIE_ERROR: 'FEATURED_MOVIE_ERROR',
};

const featuredMovieRequest = () => ({
  type: TYPES.FEATURED_MOVIE_REQUEST,
  payload: null,
});

const featuredMovieError = error => ({
  type: TYPES.FEATURED_MOVIE_ERROR,
  payload: { error },
});

const featuredMovieSuccess = featuredMovie => ({
  type: TYPES.FEATURED_MOVIE_SUCCESS,
  payload: { featuredMovie },
});

export const fetchFeaturedMovie = () => async (dispatch, getState) => {
  const {
    featuredMovie: { lastUpdate },
  } = getState();

  if (lastUpdate && Date.now() - lastUpdate < 43200) {
    return;
  }

  dispatch(featuredMovieRequest());
  try {
    const featuredMovie = await FeaturedMovieController.getFeaturedMovie();
    dispatch(featuredMovieSuccess(featuredMovie));
  } catch (error) {
    dispatch(featuredMovieError(error.message));
  }
};
