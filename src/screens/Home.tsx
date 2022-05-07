import { StyleSheet } from "react-native";
import { Avatar, Divider, Drawer, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import Trailers from "../../components/Trailers/Trailers";
import Populers from "../../components/Populers/Populers";
type Props = {};

export default function Home({}: Props) {
  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <Layout>
          <Text category={"p1"}>Hosgeldin film sever</Text>
          <Text category={"h3"}>Fragmania</Text>
        </Layout>
        <Trailers />
        <Populers />
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
