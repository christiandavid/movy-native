import { TYPES } from '@/actions/UserActions';

export const initialState = { user: null, list: [] };

export const userReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, ...payload.user };
    case TYPES.LIST_ADD: {
      if (state.list.some(movie => movie.id === payload.movie.id)) {
        return state;
      }
      return {
        ...state,
        list: [
          ...state.list,
          { id: payload.movie.id, posterPath: payload.movie.posterPath },
        ],
      };
    }
    case TYPES.LIST_REMOVE:
      return {
        ...state,
        list: state.list.filter(movie => movie.id !== payload.movie.id),
      };
    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};
