import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@ui-kitten/components";

export default function Information() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={{ uri: "http://iste.edu.tr/files/dikey_logo.png" }}
        />
        <Text style={styles.content}>
          Merhaba ben Aydemir Eray Han, bu projeyi yazilim muhendisligine giris
          dersi icin hazirliyorum
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  logo: {
    height: "50%",
    width: "50%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
