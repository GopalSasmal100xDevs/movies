export function mostCommonGenreMovies(movies) {
  if (!movies) {
    return {};
  }

  const allGenreMovies = movies.reduce((acc, { Genre }) => {
    acc[Genre] = (acc[Genre] || 0) + 1;
    return acc;
  }, {});
  //   return allGenreMovies;

  return Object.entries(allGenreMovies).reduce(
    (acc, [genre, count]) => {
      if (acc["maxCount"] < count) {
        acc = {
          maxCount: count,
          genre,
        };
      }
      return acc;
    },
    {
      maxCount: 0,
      genre: "",
    }
  );
}
