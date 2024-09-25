import { movies } from "../data/movies.js";
import { moviesWithSpeceficRatingRange } from "./4-movies-specific-rating-range.js";

function main(movies) {
  const ans = moviesWithSpeceficRatingRange(movies);
  console.log(ans);
}
main(movies);
