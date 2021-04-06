import { searchReducer, initialState } from '@/reducers/SearchReducer';
import { TYPES } from '@/actions/SearchActions';

describe('search reducer', () => {
  it('Should return the initial state', () => {
    expect(searchReducer(initialState, {})).toEqual(initialState);
  });

  it('Should update the state when fetch request', () => {
    expect(
      searchReducer(initialState, {
        type: TYPES.SEARCH_REQUEST,
      })
    ).toEqual({
      results: [],
      page: 1,
      totalPages: 0,
    });
  });

  it('Should update the state when request is success', () => {
    expect(
      searchReducer(initialState, {
        type: TYPES.SEARCH_SUCCESS,
        payload: {
          results: [{ title: 'mock1' }, { title: 'mock2' }],
          page: 1,
          totalPages: 10,
        },
      })
    ).toEqual({
      results: [{ title: 'mock1' }, { title: 'mock2' }],
      page: 1,
      totalPages: 10,
    });
  });

  it('Should update the state when request is failed', () => {
    expect(
      searchReducer(initialState, {
        type: TYPES.SEARCH_ERROR,
        payload: 'Error: Request failed with status code 404',
      })
    ).toEqual({
      results: [],
      page: 1,
      totalPages: 0,
    });
  });

  it('Should clear the state with CLEAR_STORE', () => {
    expect(
      searchReducer(initialState, {
        type: TYPES.CLEAR_STORE,
      })
    ).toEqual({
      results: [],
      page: 1,
      totalPages: 0,
    });
  });
});
