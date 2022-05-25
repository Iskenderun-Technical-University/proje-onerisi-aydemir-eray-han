import { MovieDb } from "moviedb-promise";
import {
  CreditsResponse,
  MovieImagesResponse,
  MovieResponse,
  PopularMoviesResponse,
} from "moviedb-promise/dist/request-types";
const moviedb = new MovieDb("e455973c1745c318d066dc1054a3f479");

async function getPopularMovies(): Promise<PopularMoviesResponse> {
  return await moviedb.moviePopular();
}

async function getMovieData(id: number): Promise<MovieResponse> {
  return await moviedb.movieInfo({ id });
}

async function getMovieImages(id: number): Promise<MovieImagesResponse> {
  return await moviedb.movieImages({ id });
}

async function getMoviePersons(id: number): Promise<CreditsResponse> {
  return await moviedb.movieCredits({ id });
}

export { getPopularMovies, getMovieData, getMovieImages, getMoviePersons };
