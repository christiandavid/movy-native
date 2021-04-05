import { TYPES } from '@/actions/TrendingActions';
import { IMAGE_PATH } from '@/constants';

export const initialState = [];

export const trendingReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.TRENDING_SUCCESS: {
      return payload.trending.map(({ id, title, poster_path: image }) => ({
        id,
        title,
        image: image ? `${IMAGE_PATH}/${image}` : null,
      }));
    }
    case TYPES.CLEAR_STORE:
      return [...initialState];
    default:
      return state;
  }
};
