import { movies } from "../data/movies.js";
import { top5HighestRatedMovies } from "./3-top-5-highest-rated-movies.js";

function main(movies) {
  const ans = top5HighestRatedMovies(movies);
  console.log(ans);
}
main(movies);
