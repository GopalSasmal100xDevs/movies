export function getMoviesSpecificRating(movies) {
  if (!movies) {
    return {};
  }

  return movies.reduce((acc, { Rating }) => {
    acc[Rating] = (acc[Rating] || 0) + 1;
    return acc;
  }, {});
}
