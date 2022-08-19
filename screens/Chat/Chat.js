import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Search from "../Search/Search";

export default function Chat(props) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  return (
    <View style={styles.bg}>
      <Modal visible={false} animationType="slide">
        <Search back={setSearchModalOpen} />
      </Modal>
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
