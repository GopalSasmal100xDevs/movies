import { movies } from "../data/movies.js";
import { getAvarageDurationMovies } from "./8-avarage-duration-movies.js";

function main(movies) {
  const ans = getAvarageDurationMovies(movies);
  console.log(ans);

  console.log("This is for Testing purpose");
}
main(movies);



