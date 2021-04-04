import { combineReducers } from 'redux';

import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import { featuredMovieReducer } from '@/reducers/FeaturedMovieReducer';
import { trendingReducer } from '@/reducers/TrendingReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  featuredMovie: featuredMovieReducer,
  trending: trendingReducer,
});
