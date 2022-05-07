import { StyleSheet } from "react-native";
import React from "react";
import { Layout, Text } from "@ui-kitten/components";

export default function Header() {
  return (
    <Layout>
      <Text category={"p1"} status={"control"}>
        Hosgeldin film sever
      </Text>
      <Text category={"h3"} status={"success"}>
        Fragmania
      </Text>
    </Layout>
  );
}

const styles = StyleSheet.create({});
