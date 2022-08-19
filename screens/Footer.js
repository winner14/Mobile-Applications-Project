import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
// import Search from "../Search/Search";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Footer(props) {
  // const [searchModalOpen, setSearchModalOpen] = useState(false);
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={{ flex: 1 }}>
        <Icon name="home" size={40} color="rgb(160, 90, 9)" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1 }}>
        <Icon
          name="search"
          size={35}
          color="rgb(160, 90, 9)"
          // onPress={() => setSearchModalOpen(true)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1 }}>
        <Icon
          name="user-circle"
          size={35}
          color="rgb(160, 90, 9)"
          onPress={() => navigation.navigate("profile")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1 }}>
        <Icon
          name="bell-o"
          size={35}
          color="rgb(160, 90, 9)"
          onPress={() => navigation.navigate("notifications")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 0 }}>
        <Icon
          name="envelope-o"
          size={35}
          color="rgb(160, 90, 9)"
          // onPress={() => setFooterModalOpen(true)}
        />
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
