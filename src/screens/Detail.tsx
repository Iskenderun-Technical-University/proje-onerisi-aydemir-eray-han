import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Trailers from "../../components/Trailers/Trailers";
import { Avatar } from "@ui-kitten/components";

export default function Detail({ navigation, route }: any) {
  console.log(route.params);
  const { height, width } = useWindowDimensions();
  const maxWidth = { width: width * 0.9 };

  return (
    <ImageBackground
      style={[styles.posterBackground, { height }]}
      source={{
        uri: "https://image.tmdb.org/t/p/w710_and_h400_multi_faces/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
      }}
      resizeMode="cover"
      blurRadius={20}
    >
      <ScrollView style={styles.inlineContainer}>
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w710_and_h400_multi_faces/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
          }}
          style={[styles.innerPoster, maxWidth, { height: height * 0.2 }]}
        />
        <Text style={styles.text}>Stranger Things</Text>
        <Text style={styles.categoriesText}>
          Dram, Gizem, Bilim Kurgu & Fantazi 50m
        </Text>

        <Text style={[styles.content, maxWidth]}>
          <Text>Ozet</Text>
          Ufak bir kasabada küçük bir çocuk kaybolunca, gizli deneyler,
          korkutucu doğaüstü güçler ve tuhaf bir küçük kızın da parçası olduğu
          bir gizem ortaya çıkar.
        </Text>

        <ScrollView horizontal>
          <Avatar
            key={`trailer-1`}
            size="giant"
            source={{
              uri: "https://www.themoviedb.org/t/p/w276_and_h350_face/5yteOSY2lgGOgSWmRTlxqfY59MS.jpg",
            }}
          />
          <Avatar
            key={`trailer-2`}
            size="giant"
            source={{
              uri: "https://www.themoviedb.org/t/p/w276_and_h350_face/5yteOSY2lgGOgSWmRTlxqfY59MS.jpg",
            }}
          />
        </ScrollView>

        <ScrollView style={[maxWidth, styles.imageSlider]} horizontal>
          <Image
            source={{
              uri: "https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
            }}
            style={[styles.innerPoster, maxWidth, { height: height * 0.2 }]}
          />
          <Image
            source={{
              uri: "https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
            }}
            style={[styles.innerPoster, maxWidth, { height: height * 0.2 }]}
          />
          <Image
            source={{
              uri: "https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
            }}
            style={[styles.innerPoster, maxWidth, { height: height * 0.2 }]}
          />
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
