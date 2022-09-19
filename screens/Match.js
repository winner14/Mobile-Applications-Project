import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { userData } from "../Data";
import { firebaseConfig } from "../firebase-config";
import MatchModal from "./MatchModal";

export default function Match() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const data = userData.filter((e) => e.Id != auth.currentUser.uid);

  const navigation = useNavigation();
  const [matchModalOpen, setMatchModalOpen] = useState(false);

  const dataList = ({ item }) => (
    <View style={styles.userCard}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>{item.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 19, flex: 1 }}>{item.course}</Text>
          <Text style={{ fontSize: 19, flex: 0, marginRight: 10 }}>
            {item.gender}
          </Text>
        </View>
      </View>
      <View style={styles.profileImage}>
        <Image
          source={item.profilePhoto}
          style={styles.image}
          resizeMode="cover"
        ></Image>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={{
            height: 50,
            width: "100%",
            borderRadius: 15,
            backgroundColor: "rgba(112, 56, 10, 0.6)",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          onPress={() => {
            for (let x = 0; x < item.interests.length; x++) {
              if (
                item.interests[x] ==
                userData.find((e) => e.Id == auth.currentUser.uid).interests[x]
              ) {
                console.log("match");
                setMatchModalOpen(true);
                break;
              } else {
                console.log("no match");
              }
            }
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "800" }}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.bg}>
      <Modal visible={matchModalOpen} animationType="fade" transparent>
        <MatchModal cancel={setMatchModalOpen} close={setMatchModalOpen} />
      </Modal>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "rgb(160, 90, 9)",
            }}
          >
            {/* {props.name} */}
            Find Friends
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.matchFeed}>
        <FlatList
          style={{ width: "98%" }}
          data={data}
          renderItem={dataList}
          ListEmptyComponent={<Text>No users found🤥</Text>}
          keyExtractor={(data) => data.Id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("home")}
        >
          <Icon name="home" size={40} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("match")}
        >
          <Icon name="search" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("profile")}
        >
          <Icon name="user-circle" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("notifications")}
        >
          <Icon name="bell-o" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 0 }}
          onPress={() => navigation.navigate("chatList")}
        >
          <Icon name="envelope-o" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "rgba(243, 237, 232, 0.4)",
    width: "100%",
    height: "100%",
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "rgb(238, 218, 202)",
    width: "100%",
    height: "10%",
    paddingTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 1,
  },
  matchFeed: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  footer: {
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "flex-end",
    backgroundColor: "rgb(238, 218, 202)",
    width: "100%",
    height: "8%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 7,
    paddingLeft: 8,
    paddingRight: 8,
  },
  userCard: {
    backgroundColor: "rgba(238, 214, 194, 0.201)",
    borderRadius: 15,
    width: "98%",
    height: 490,
    alignContent: "center",
    padding: 8,
    paddingBottom: 5,
    marginBottom: 3,
    marginTop: 3,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  profileImage: {
    backgroundColor: "rgb(226, 214, 204)",
    alignSelf: "center",
    margin: 3,
    width: "98%",
    height: 350,
    borderRadius: 15,
    overflow: "hidden",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 3,
  },
});
