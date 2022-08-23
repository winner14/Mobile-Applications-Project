import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Landing = () => {
  return (
    <View style={styles.bg}>
      <Text>Landing</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
