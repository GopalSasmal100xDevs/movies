export function avarageRatingOfAllMovies(movies) {
  if (!movies) {
    return 0;
  }

  const totalRating = movies.reduce((acc, { Rating }) => {
    acc += Rating;
    return acc;
  }, 0);

  return (totalRating / movies.length).toFixed(2);
}
