import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Chat(props) {
  return (
    <View style={styles.bg}>
      <Text style={{ flex: 1, fontSize: 25, top: 50 }}>Chat</Text>
      <TouchableOpacity
        onPress={props.back}
        style={{ width: "60%", borderWidth: 1, marginBottom: 30 }}
      >
        <Text style={{ alignSelf: "center", fontSize: 25 }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
