import { movies } from "../data/movies.js";
import { releasedMoviesEachDecade } from "./5-movies-released-each-decade.js";

function main(movies) {
  const ans = releasedMoviesEachDecade(movies);
  console.log(ans);
}
main(movies);
