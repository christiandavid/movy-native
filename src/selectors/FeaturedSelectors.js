export const getFeatured = state => {
  return Object.keys(state.featured).length > 0 ? state.featured : null;
};
