import { movies } from "../data/movies.js";
import { mostCommonGenreMovies } from "./7-most-common-genre-movies.js";

function main(movies) {
  const ans = mostCommonGenreMovies(movies);
  console.log(ans);
}
main(movies);
