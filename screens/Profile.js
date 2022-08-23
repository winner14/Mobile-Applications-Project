import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import HomePage from "./HomePage";
import Notifications from "./Notifications";
import Search from "./Search";
import Chat from "./Messaging/Chat";
import { useNavigation } from "@react-navigation/native";
import DrawerBar from "./DrawerBar";

export default function Profile(props) {
  const [vNavModalOpen, setVNavModalOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Modal visible={vNavModalOpen} animationType="" transparent>
        <DrawerBar back={setVNavModalOpen} />
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
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
          <View style={styles.titleBar}>
            <TouchableOpacity style={{ flex: 0, margin: 5 }}>
              <Icon
                name="ellipsis-v"
                size={30}
                color="rgb(160, 90, 9)"
                // onPress={() => setModalOpen(true)}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>50</Text>
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
            <Text style={[styles.text, { fontSize: 24 }]}>8563</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>240</Text>
            <Text style={[styles.text, styles.subText]}>Friends</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <Text style={styles.subText}>Public memories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ flex: 1 }}>
          <Icon
            name="home"
            size={40}
            color="rgb(160, 90, 9)"
            onPress={() => navigation.navigate("home")}
          />
        </View>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("search")}
        >
          <Icon name="search" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
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
          onPress={() => navigation.navigate("chat")}
        >
          <Icon name="envelope-o" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
    margin: 10,
    marginTop: 0,
  },
  profileImage: {
    flex: 0,
    backgroundColor: "rgb(226, 214, 204)",
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 25,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    // alignItems: "center",
    marginLeft: 15,
    // marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    backgroundColor: "rgba(247, 245, 243)",
    width: 280,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 3,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  footer: {
    // flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "flex-end",
    // alignContent: "center",
    // justifyContent: "center",
    backgroundColor: "rgb(238, 218, 202)",
    width: "100%",
    height: "8%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 7,
    paddingLeft: 8,
    paddingRight: 8,
    // paddingBottom: 5,
  },
});
