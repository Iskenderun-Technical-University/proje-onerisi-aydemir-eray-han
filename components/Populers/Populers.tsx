import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Layout, Text, ViewPager } from "@ui-kitten/components";
import MovieCard from "../MovieCard/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { MovieResponse } from "moviedb-promise/dist/request-types";
import { getPopularMovies } from "../../src/services/MovieService";

export default function Populers() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [movies, setMovies] = useState<MovieResponse[]>();
  const shouldLoadComponent = (index: number) => index === selectedIndex;

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const data = await getPopularMovies();
    setMovies(data.results);
  }
  return (
    <View>
      <Text category={"p1"}>Popüler Olanlar</Text>
      <ViewPager
        shouldLoadComponent={shouldLoadComponent}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {movies &&
          movies.map((movie) => (
            <MovieCard
              key={`movie-${movie.id}`}
              id={1}
              posterUrl={`https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`}
              title={movie.title}
              date={movie.release_date}
              onPress={() => navigation.navigate("Detail", { id: movie.id })}
            />
          ))}
      </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({});
