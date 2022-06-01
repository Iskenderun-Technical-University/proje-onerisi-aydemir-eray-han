import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Icon,
  List,
  ListItem,
  Avatar,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MovieResult,
  MovieResultsResponse,
} from "moviedb-promise/dist/request-types";
import { searchMovie } from "../services/MovieService";

type Movie = {
  item: MovieResult;
  index: number;
};
export default function Search({ navigation }: any) {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState<MovieResultsResponse>();

  useEffect(() => {
    searchMoviesByName();
  }, [value]);

  async function searchMoviesByName() {
    if (value == null || value == "") return;
    const response = await searchMovie(value);
    setMovies(response);
  }

  const RenderItemAccessory = (id: any) => (
    <Button
      status={"success"}
      onPress={() => navigation.navigate("Detail", id)}
      size="tiny"
    >
      Detaylar
    </Button>
  );

  const RenderItemIcon = ({ image }: any) => (
    <Avatar
      style={{ marginRight: 5 }}
      size="giant"
      source={{
        uri: `https://www.themoviedb.org/t/p/w1280/${image}`,
      }}
    />
  );

  const renderItem = ({ item, index }: Movie) => (
    <ListItem
      title={item.title}
      description={item.overview}
      accessoryLeft={() => <RenderItemIcon image={item.poster_path} />}
      accessoryRight={() => <RenderItemAccessory id={item.id} />}
    />
  );

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Input
        placeholder="Arama"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <List data={movies?.results} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
