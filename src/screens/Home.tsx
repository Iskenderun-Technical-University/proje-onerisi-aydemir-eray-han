import { StyleSheet } from "react-native";
import { Divider } from "@ui-kitten/components";
import Populers from "../../components/Populers/Populers";
import Header from "../../components/Header/Header";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Divider style={{ marginHorizontal: -20, marginVertical: 10 }} />
      <Populers />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
