import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  id: number;
  posterUrl: string;
  title: string;
  date: string;
  onPress: () => void;
};

export default function MovieCard({
  id,
  title,
  posterUrl,
  date,
  onPress,
}: Props) {
  const { height } = useWindowDimensions();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.tab, { height: height * 0.6 }]}>
      <ImageBackground
        source={{ uri: posterUrl }}
        style={[styles.posterBackground, { height: height * 0.6 }]}
        imageStyle={styles.posterImageStyle}
        resizeMode="cover"
        blurRadius={10}
      >
        <Image source={{ uri: posterUrl }} style={styles.innerPoster} />
        <View style={styles.innerTexts}>
          <Text category="h5">{title}</Text>
          <Text category="c1">{date}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tab: {
    marginVertical: 10,
    borderRadius: 12,
    marginRight: 10,
  },
  posterBackground: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  posterImageStyle: {
    borderRadius: 10,
  },
  posterInlineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginLeft: 10,
  },
  innerPoster: { height: "90%", width: "90%", borderRadius: 10 },
  innerTexts: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "#36353342",
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 5,
  },
});
