import {
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "@ui-kitten/components";
import {
  getMovieData,
  getMovieImages,
  getMoviePersons,
} from "../services/MovieService";
import {
  CreditsResponse,
  MovieImagesResponse,
  MovieResponse,
} from "moviedb-promise/dist/request-types";

export default function Detail({ navigation, route }: any) {
  const [data, setData] = useState<MovieResponse>();
  const [imageData, setImageData] = useState<MovieImagesResponse>();
  const [persons, setPersons] = useState<CreditsResponse>();
  const { height, width } = useWindowDimensions();
  const maxWidth = { width: width * 0.9 };

  useEffect(() => {
    getMovie();
  }, [route.params]);

  async function getMovie() {
    const data = await getMovieData(route.params.id);
    const imageData = await getMovieImages(route.params.id);
    const personsData = await getMoviePersons(route.params.id);
    setData(data);
    setImageData(imageData);
    setPersons(personsData);
  }

  if (!data) return <Text>Yukleniyor</Text>;

  return (
    <ImageBackground
      style={[styles.posterBackground, { height }]}
      source={{
        uri: `https://www.themoviedb.org/t/p/w1280/${data.poster_path}`,
      }}
      resizeMode="cover"
      blurRadius={100}
    >
      <ScrollView style={styles.inlineContainer}>
        <Image
          source={{
            uri: `https://www.themoviedb.org/t/p/w1280/${data.poster_path}`,
          }}
          style={[styles.innerPoster, maxWidth, { height: height * 0.2 }]}
        />
        <Text style={styles.text}>{data.title}</Text>
        <Text style={styles.categoriesText}>
          {data.genres &&
            data.genres.map((genre: any) => genre.name).join(", ")}
        </Text>

        <Text style={[styles.content, maxWidth]}>{data.overview}</Text>

        <ScrollView style={[maxWidth, styles.imageSlider]} horizontal>
          {persons?.cast &&
            persons.cast.map((cast) => (
              <Avatar
                style={{ marginRight: 5 }}
                key={`trailer-${cast.id}`}
                size="giant"
                source={{
                  uri: `https://www.themoviedb.org/t/p/w276_and_h350_face/${cast.profile_path}`,
                }}
              />
            ))}
        </ScrollView>

        <ScrollView style={[maxWidth, styles.imageSlider]} horizontal>
          {imageData &&
            imageData.backdrops?.map((image) => (
              <Image
                key={`slider-data-${image.file_path}`}
                source={{
                  uri: `https://www.themoviedb.org/t/p/w1280/${image.file_path}`,
                }}
                style={[
                  styles.innerPoster,
                  maxWidth,
                  { height: height * 0.2, marginRight: 5 },
                ]}
              />
            ))}
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 32,
    marginVertical: 5,
  },
  posterBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerPoster: { borderRadius: 10 },
  inlineContainer: { marginTop: "20%" },
  categoriesText: { color: "#cece" },
  content: {
    marginVertical: 20,
    color: "#fff",
  },
  imageSlider: {
    marginVertical: 20,
  },
});
