import { FeaturedController } from '@/controllers';

export const TYPES = {
  FEATURED: 'FEATURED',
  FEATURED_REQUEST: 'FEATURED_REQUEST',
  FEATURED_SUCCESS: 'FEATURED_SUCCESS',
  FEATURED_ERROR: 'FEATURED_ERROR',
  CLEAR_STORE: 'CLEAR_STORE',
};

const featuredRequest = () => ({
  type: TYPES.FEATURED_REQUEST,
  payload: null,
});

const featuredError = error => ({
  type: TYPES.FEATURED_ERROR,
  payload: { error },
});

const featuredSuccess = featured => ({
  type: TYPES.FEATURED_SUCCESS,
  payload: { featured },
});

export const fetchFeatured = () => async (dispatch, getState) => {
  const {
    featured: { lastUpdate },
  } = getState();

  if (lastUpdate && Date.now() - lastUpdate < 43200) {
    return;
  }

  dispatch(featuredRequest());
  try {
    const featured = await FeaturedController.getFeaturedMovie();
    dispatch(featuredSuccess(featured));
  } catch (error) {
    dispatch(featuredError(error.message));
  }
};
