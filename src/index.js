import { movies } from "../data/movies.js";
import { getAvarageDurationMovies } from "./8-avarage-duration-movies.js";

function main(movies) {
  const ans = getAvarageDurationMovies(movies);
  console.log(ans);
}
main(movies);
