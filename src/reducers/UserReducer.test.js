import { userReducer, initialState } from '@/reducers/UserReducer';
import { TYPES } from '@/actions/UserActions';

describe('user reducer', () => {
  it('Should return the initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it('Should update the state when fetch request', () => {
    expect(
      userReducer(initialState, {
        type: TYPES.LOGIN_REQUEST,
      })
    ).toEqual({ user: null, list: [] });
  });

  it('Should update the state when request is success', () => {
    expect(
      userReducer(initialState, {
        type: TYPES.LOGIN_SUCCESS,
        payload: {
          user: { user: 'john', list: [] },
        },
      })
    ).toEqual({ user: 'john', list: [] });
  });

  it('Should update the state when request is failed', () => {
    expect(
      userReducer(initialState, {
        type: TYPES.LOGIN_ERROR,
        payload: 'Error: Request failed with status code 404',
      })
    ).toEqual({ user: null, list: [] });
  });

  it('Should clear the state with CLEAR_STORE', () => {
    expect(
      userReducer(initialState, {
        type: TYPES.CLEAR_STORE,
      })
    ).toEqual({ user: null, list: [] });
  });

  it('Should add a movie to the list', () => {
    expect(
      userReducer(initialState, {
        type: TYPES.LIST_ADD,
        payload: {
          movie: { id: 0, posterPath: 'mock' },
        },
      })
    ).toEqual({
      list: [{ id: 0, image: 'https://image.tmdb.org/t/p/w500/mock' }],
      user: null,
    });
  });

  it('Should remove a movie from the list', () => {
    expect(
      userReducer(
        {
          list: [{ id: 0, image: 'https://image.tmdb.org/t/p/w500/mock' }],
          user: null,
        },
        {
          type: TYPES.LIST_REMOVE,
          payload: {
            movie: { id: 0 },
          },
        }
      )
    ).toEqual({ list: [], user: null });
  });
});
