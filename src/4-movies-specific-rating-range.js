export function moviesWithSpeceficRatingRange(movies) {
  if (!movies) {
    return {};
  }

  const INTERVAL = 0.1;

  return movies.reduce((acc, { Rating }) => {
    const lowerBound = Math.floor(Rating / INTERVAL) * INTERVAL;
    const upperBound = lowerBound + INTERVAL;
    const key = `${lowerBound}-${upperBound}`;

    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}
