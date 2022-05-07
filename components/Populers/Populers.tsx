import { StyleSheet, View } from "react-native";
import React from "react";
import { Layout, Text, ViewPager } from "@ui-kitten/components";
import MovieCard from "../MovieCard/MovieCard";

export default function Populers() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <View>
      <Text category={"p1"}>Popüler Olanlar</Text>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <MovieCard
          id={1}
          posterUrl={
            "https://www.themoviedb.org/t/p/w440_and_h660_face/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"
          }
          title={"Peaky Blinders"}
          date={"12-09-2013"}
        />
        <MovieCard
          id={1}
          posterUrl={
            "https://www.themoviedb.org/t/p/w440_and_h660_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
          }
          title={"Game of Thrones"}
          date={"12-09-2014"}
        />
      </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({});