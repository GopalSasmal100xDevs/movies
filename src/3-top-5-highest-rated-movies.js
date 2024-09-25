export function top5HighestRatedMovies(movies) {
  if (!movies) {
    return [];
  }

  return movies
    .sort(({ Rating: aRating }, { Rating: bRating }) => {
      bRating - aRating;
    })
    .slice(0, 5)
    .map(({ Title }) => Title);
}
