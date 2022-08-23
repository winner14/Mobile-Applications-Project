import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { firebaseConfig } from "../firebase-config";
import Search from "./Search";
import Chat from "./Chat";
import Profile from "./Profile";

export default function DrawerBar(props) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace("login");
    });
  };

  const [profileModalOpen, setProfileModalOpen] = useState(false);
  //   const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [vNavModalOpen, setVNavModalOpen] = useState(false);

  return (
    <View style={styles.bg}>
      <TouchableOpacity style={styles.drawBackdrop} onPress={props.back} />
      <View style={styles.drawMenu}>
        <View>
          <View style={styles.profileName}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                Winner
              </Text>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 18 }]}>
                Computer Science
              </Text>
            </View>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 21 }]}>50</Text>
              <Text style={[styles.text, styles.subText]}>Events</Text>
            </View>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: "rgba(206, 99, 11, 0.63)",
                  borderLeftWidth: 1.2,
                  borderRightWidth: 1.2,
                },
              ]}
            >
              <Text style={[styles.text, { fontSize: 21 }]}>8563</Text>
              <Text style={[styles.text, styles.subText]}>Followers</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 21 }]}>240</Text>
              <Text style={[styles.text, styles.subText]}>Friends</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.drawActions}>
            <TouchableOpacity
              style={styles.drawAction}
              onPress={() => {
                props.back;
                navigation.navigate("profile");
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                View Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawAction}
              // onPress={() => [props.back, setSearchModalOpen(true)]}
            >
              <Text style={{ fontSize: 18, fontWeight: "400" }}>
                Find Matches
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawAction}
              onPress={() => navigation.navigate("chat")}
            >
              <Text style={{ fontSize: 18, fontWeight: "400" }}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawAction}>
              <Text style={{ fontSize: 18, fontWeight: "400" }}>
                My Friends
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.drawAction,
                {
                  backgroundColor: "rgba(245, 80, 30, 0.801)",
                  flex: 0,
                },
              ]}
              onPress={handleSignOut}
            >
              <Text style={{ fontSize: 18, fontWeight: "400" }}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    // backgroundColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    height: "100%",
  },
  drawBackdrop: {
    backgroundColor: "rgba(168, 148, 132, 0.6)",
    flex: 0.25,
    height: "100%",
  },
  drawMenu: {
    backgroundColor: "rgb(238, 218, 202)",
    flex: 0.75,
    height: "100%",
    // borderTopLeftRadius: 20,
    // borderBottomLeftRadius: 40,
    marginTop: 60,
  },
  profileName: {
    margin: 10,
    flexDirection: "row",
  },
  profileImage: {
    flex: 0,
    backgroundColor: "rgb(226, 214, 204)",
    width: 90,
    height: 90,
    borderRadius: 100,
    // marginTop: 25,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    // alignItems: "center",
    marginLeft: 5,
    // marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  drawActions: {
    margin: 3,
    marginTop: 20,
    height: "100%",
    // backgroundColor: 'rgba(241, 209, 182, 0.801)',
  },
  drawAction: {
    marginTop: 5,
    padding: 10,
    height: 60,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "rgba(189, 118, 59, 0.327)",
    alignContent: "center",
    borderRadius: 5,
  },
});
