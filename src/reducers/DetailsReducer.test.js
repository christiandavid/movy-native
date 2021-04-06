import { detailsReducer, initialState } from '@/reducers/DetailsReducer';
import { TYPES } from '@/actions/DetailsActions';

describe('details reducer', () => {
  it('Should return the initial state', () => {
    expect(detailsReducer(initialState, {})).toEqual(initialState);
  });

  it('Should update the state when fetch request', () => {
    expect(
      detailsReducer(initialState, {
        type: TYPES.DETAILS_REQUEST,
      })
    ).toEqual({
      id: null,
      title: null,
      genres: [],
      overview: null,
      posterPath: null,
      releaseDate: null,
      video: {},
      voteAverage: null,
    });
  });

  it('Should update the state when request is success', () => {
    expect(
      detailsReducer(initialState, {
        type: TYPES.DETAILS_SUCCESS,
        payload: {
          details: {
            id: 0,
            title: 'Mock title',
          },
        },
      })
    ).toEqual({
      id: 0,
      title: 'Mock title',
    });
  });

  it('Should update the state when request is failed', () => {
    expect(
      detailsReducer(initialState, {
        type: TYPES.DETAILS_ERROR,
        payload: 'Error: Request failed with status code 404',
      })
    ).toEqual({
      id: null,
      title: null,
      genres: [],
      overview: null,
      posterPath: null,
      releaseDate: null,
      video: {},
      voteAverage: null,
    });
  });

  it('Should clear the state with CLEAR_STORE', () => {
    expect(
      detailsReducer(initialState, {
        type: TYPES.CLEAR_STORE,
      })
    ).toEqual({
      id: null,
      title: null,
      genres: [],
      overview: null,
      posterPath: null,
      releaseDate: null,
      video: {},
      voteAverage: null,
    });
  });
});
