import { StyleSheet } from "react-native";
import React from "react";
import { Avatar, Layout } from "@ui-kitten/components";

export default function Trailers() {
  const [trailers, setTrailers] = React.useState([
    "https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
    "https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
    "https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
    "https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
    "https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
  ]);
  return (
    <Layout style={styles.container}>
      {trailers.map((image, index) => (
        <Avatar
          key={`trailer-${index}`}
          size="giant"
          source={{
            uri: image,
          }}
        />
      ))}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
