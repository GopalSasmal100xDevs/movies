export function moviesCountAboveRating(movies, rating) {
  if (!movies) {
    return "";
  }

  return movies.reduce((acc, { Rating }) => {
    if (Rating > rating) {
      acc += 1;
    }
    return acc;
  }, 0);
}
