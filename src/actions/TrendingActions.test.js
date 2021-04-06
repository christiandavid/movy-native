import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchTrendingNow, TYPES } from '@/actions/TrendingActions';

const fetchTrendingActions = [
  {
    type: TYPES.TRENDING_REQUEST,
    payload: null,
  },
];

describe('fetchTrendingActions', () => {
  let store;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({});
  });

  it('should create an action for fetch trending', () => {
    store.dispatch(fetchTrendingNow());
    const actions = store.getActions();
    expect(actions).toEqual(fetchTrendingActions);
  });
});
