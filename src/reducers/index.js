import { combineReducers } from 'redux';

import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import { featuredReducer } from '@/reducers/FeaturedReducer';
import { searchReducer } from '@/reducers/SearchReducer';
import { trendingReducer } from '@/reducers/TrendingReducer';
import { detailsReducer } from '@/reducers/DetailsReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  featured: featuredReducer,
  trending: trendingReducer,
  search: searchReducer,
  details: detailsReducer,
});
