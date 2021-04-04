import { TrendingController } from '@/controllers';

export const TYPES = {
  TRENDING: 'TRENDING',
  TRENDING_REQUEST: 'TRENDING_REQUEST',
  TRENDING_SUCCESS: 'TRENDING_SUCCESS',
  TRENDING_ERROR: 'TRENDING_ERROR',
};

const trendingRequest = () => ({
  type: TYPES.TRENDING_REQUEST,
  payload: null,
});

const trendingError = error => ({
  type: TYPES.TRENDING_ERROR,
  payload: { error },
});

const trendingSuccess = trending => ({
  type: TYPES.TRENDING_SUCCESS,
  payload: { trending },
});

export const fetchTrendingNow = () => async dispatch => {
  dispatch(trendingRequest());
  try {
    const trending = await TrendingController.getTrendingNow();
    dispatch(trendingSuccess(trending));
  } catch (error) {
    dispatch(trendingError(error.message));
  }
};
