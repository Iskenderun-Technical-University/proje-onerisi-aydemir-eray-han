import { StyleSheet, View } from "react-native";
import React from "react";
import { Layout, Text, ViewPager } from "@ui-kitten/components";

export default function Populers() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View>
      <Text category={"p1"}>Popüler Olanlar</Text>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Layout style={styles.tab} level="2">
          <Text category="h5">Movie1</Text>
        </Layout>
        <Layout style={styles.tab} level="2">
          <Text category="h5">Movie2</Text>
        </Layout>
        <Layout style={styles.tab} level="2">
          <Text category="h5">Movie3</Text>
        </Layout>
      </ViewPager>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    marginVertical: 10,
    height: 192,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginRight: 10,
  },
});
