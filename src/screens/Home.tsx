import { StyleSheet } from "react-native";
import { Avatar, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {};

export default function Home({}: Props) {
  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <Layout>
          <Text category={"p1"}>Hosgeldin film sever</Text>
          <Text category={"h3"}>Fragmania</Text>
        </Layout>
        <Layout>
          <Avatar
            size="giant"
            source={{
              uri: "https://www.themoviedb.org/t/p/w710_and_h400_multi_faces/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
            }}
          />
        </Layout>
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
