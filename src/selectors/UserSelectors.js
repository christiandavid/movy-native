export const getUser = state => {
  return Object.keys(state.user).length > 0 ? state.user : null;
};

export const getList = state => state.user.list;

export const isMovieInList = (state, movieId) =>
  !!state.user.list.find(movie => movie.id === movieId);
