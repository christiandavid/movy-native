import { trendingReducer, initialState } from '@/reducers/TrendingReducer';
import { TYPES } from '@/actions/TrendingActions';

describe('trending reducer', () => {
  it('Should return the initial state', () => {
    expect(trendingReducer(initialState, {})).toEqual(initialState);
  });

  it('Should update the state when fetch request', () => {
    expect(
      trendingReducer(initialState, {
        type: TYPES.TRENDING_REQUEST,
      })
    ).toEqual([]);
  });

  it('Should update the state when request is success', () => {
    expect(
      trendingReducer(initialState, {
        type: TYPES.TRENDING_SUCCESS,
        payload: {
          trending: [{ id: 0, title: 'mock', poster_path: 'mockpath' }],
        },
      })
    ).toEqual([
      {
        id: 0,
        image: 'https://image.tmdb.org/t/p/w500/mockpath',
        title: 'mock',
      },
    ]);
  });

  it('Should update the state when request is failed', () => {
    expect(
      trendingReducer(initialState, {
        type: TYPES.TRENDING_ERROR,
        payload: 'Error: Request failed with status code 404',
      })
    ).toEqual([]);
  });

  it('Should clear the state with CLEAR_STORE', () => {
    expect(
      trendingReducer(initialState, {
        type: TYPES.CLEAR_STORE,
      })
    ).toEqual([]);
  });
});
