import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { search, TYPES } from '@/actions/SearchActions';

const searchActions = [
  {
    type: TYPES.SEARCH_REQUEST,
    payload: null,
  },
];

describe('searchActions', () => {
  let store;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({});
  });

  it('should create an action for search', () => {
    store.dispatch(search({ query: 'query', page: 1 }));
    const actions = store.getActions();
    expect(actions).toEqual(searchActions);
  });
});
