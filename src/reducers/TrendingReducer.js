import { TYPES } from '@/actions/TrendingActions';
import { IMAGE_PATH } from '@/constants';

export const initialState = [];

export const trendingReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.TRENDING_SUCCESS: {
      return payload.trending.map(({ id, title, poster_path: image }) => ({
        id,
        title,
        image: `${IMAGE_PATH}${image}`,
      }));
    }
    case TYPES.CLEAR_STORE:
      return [...initialState];
    default:
      return state;
  }
};
