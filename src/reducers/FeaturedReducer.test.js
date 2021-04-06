import { featuredReducer, initialState } from '@/reducers/FeaturedReducer';
import { TYPES } from '@/actions/FeaturedActions';

describe('featured reducer', () => {
  it('Should return the initial state', () => {
    expect(featuredReducer(initialState, {})).toEqual(initialState);
  });

  it('Should update the state when fetch request', () => {
    expect(
      featuredReducer(initialState, {
        type: TYPES.FEATURED_REQUEST,
      })
    ).toEqual({
      id: null,
      posterPath: null,
      genres: [],
      lastUpdate: null,
    });
  });

  // it('Should update the state when request is success', () => {
  //   expect(
  //     featuredReducer(initialState, {
  //       type: TYPES.FEATURED_SUCCESS,
  //       payload: {
  //         featured: {
  //           genres: ['comedy'],
  //           id: 0,
  //           posterPath: undefined,
  //         },
  //       },
  //     })
  //   ).toEqual({
  //     lastUpdate: Date.now(),
  //     genres: ['comedy'],
  //     id: 0,
  //     posterPath: undefined,
  //   });
  // });

  it('Should update the state when request is failed', () => {
    expect(
      featuredReducer(initialState, {
        type: TYPES.FEATURED_ERROR,
        payload: 'Error: Request failed with status code 404',
      })
    ).toEqual({
      id: null,
      posterPath: null,
      genres: [],
      lastUpdate: null,
    });
  });

  it('Should clear the state with CLEAR_STORE', () => {
    expect(
      featuredReducer(initialState, {
        type: TYPES.CLEAR_STORE,
      })
    ).toEqual({
      id: null,
      posterPath: null,
      genres: [],
      lastUpdate: null,
    });
  });
});
