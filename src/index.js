import { movies } from "../data/movies.js";
import { avarageRatingOfAllMovies } from "./2-avarage-rating-all-movies.js";

function main(movies) {
  const ans = avarageRatingOfAllMovies(movies);
  console.log(ans);
}
main(movies);
