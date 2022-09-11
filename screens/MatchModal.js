import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function MatchModal(props) {
  const navigation = useNavigation();
  useEffect(() => {
    props.close;
  }, []);
  return (
    <View style={styles.modalBg}>
      <View style={styles.match}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "400",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          Pair Generated!
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "300",
          }}
        >
          You and {props.name} share similar interests.
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "300",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Get to know them by texting them now 🥂
        </Text>
        <TouchableOpacity
          style={styles.chatBtn}
          onPress={() => [navigation.navigate("chat"), props.close]}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(247, 219, 191, 0.664)",
            width: 200,
            height: 45,
            borderWidth: 1.2,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 15,
          }}
          onPress={props.cancel}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBg: {
    backgroundColor: "rgba(168, 148, 132, 0.45)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  match: {
    backgroundColor: "rgba(238, 218, 202, 0.95)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    // left: 25,
    // top: 180,
    height: "40%",
    width: "85%",
    borderRadius: 30,
  },
  chatBtn: {
    backgroundColor: "rgb(92, 49, 13)",
    width: 200,
    height: 45,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 25,
  },
});
