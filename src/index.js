import { movies } from "../data/movies.js";
import { getMoviesSpecificRating } from "./6-movies-specific-rating.js";

function main(movies) {
  const ans = getMoviesSpecificRating(movies);
  console.log(ans);
}
main(movies);
