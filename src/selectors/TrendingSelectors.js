export const getTrending = state => {
  return state.trending.length > 0 ? state.trending : null;
};
