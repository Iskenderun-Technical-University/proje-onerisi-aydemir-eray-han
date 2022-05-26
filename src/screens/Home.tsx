import { StyleSheet } from "react-native";
import { Divider, Layout } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import Trailers from "../../components/Trailers/Trailers";
import Populers from "../../components/Populers/Populers";
import Header from "../../components/Header/Header";
import { ScrollView } from "react-native-gesture-handler";
type Props = {};

export default function Home({}: Props) {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Trailers />
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
