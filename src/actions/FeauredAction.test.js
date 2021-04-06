import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchFeatured, TYPES } from '@/actions/FeaturedActions';

const featuredActions = [
  {
    type: TYPES.FEATURED_REQUEST,
    payload: null,
  },
];

describe('featuredActions', () => {
  let store;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({ featured: { lastUpdate: 100000000 } });
  });

  it('should create an action for the fetch featured', () => {
    store.dispatch(fetchFeatured());
    const actions = store.getActions();
    expect(actions).toEqual(featuredActions);
  });
});
