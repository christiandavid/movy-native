export const getFeaturedMovie = state => {
  return Object.keys(state.featuredMovie).length > 0
    ? state.featuredMovie
    : null;
};
