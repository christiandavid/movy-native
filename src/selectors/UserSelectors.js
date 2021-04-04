export const getUser = state => {
  return Object.keys(state.user).length > 0 ? state.user : null;
};

export const getList = state => {
  return state.user.list.length > 0 ? state.user.list : null;
};

export const isMovieInList = (state, movieId) =>
  !!state.user.list.find(movie => movie.id === movieId);
