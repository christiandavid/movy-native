export const getUser = state => {
  return state.user.username ? state.user : null;
};

export const getList = state => state.user.list;

export const isMovieInList = (state, movieId) =>
  !!state.user.list.find(movie => movie.id === movieId);
