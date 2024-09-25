import { movies } from "../data/movies.js";
import { moviesCountAboveRating } from "./1-movies-count-corsponding-rating.js";

function main(movies) {
  const ans = moviesCountAboveRating(movies, 8.5);
  console.log(ans);
}
main(movies);
