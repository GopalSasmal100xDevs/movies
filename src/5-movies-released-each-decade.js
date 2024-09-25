export function releasedMoviesEachDecade(movies) {
  if (!movies) {
    return {};
  }

  return movies.reduce((acc, { Year }) => {
    acc[Year] = (acc[Year] || 0) + 1;
    return acc;
  }, {});
}
