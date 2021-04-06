import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchDetails, TYPES } from '@/actions/DetailsActions';

const detailsActions = [
  {
    type: TYPES.DETAILS_REQUEST,
    payload: null,
  },
];

describe('detailsActions', () => {
  let store;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({});
  });

  it('should create an action for the fetch details', () => {
    store.dispatch(fetchDetails());
    const actions = store.getActions();
    expect(actions).toEqual(detailsActions);
  });
});
