import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebase-config";
import { initializeApp } from "firebase/app";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import DrawerBar from "./DrawerBar";

const HomePage = (props) => {
  const [vNavModalOpen, setVNavModalOpen] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace("login");
    });
  };

  const added = 0;
  const going = 0;

  return (
    <View style={styles.home_bg}>
      <Modal visible={vNavModalOpen} animationType="" transparent>
        <DrawerBar back={setVNavModalOpen} />
      </Modal>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: "800",
              fontFamily: "Inter_900Black",
              color: "rgb(160, 90, 9)",
              shadowOpacity: 0.3,
              shadowRadius: 10,
              textShadowColor: "#000",
            }}
          >
            MiJO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // style={{ flex: 0, margin: 5 }}
          onPress={() => setVNavModalOpen(true)}
        >
          <Icon name="navicon" size={45} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.feed}>
          <View style={styles.postContainer}>
            <View style={styles.imgName}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity style={styles.profileImage}>
                  <Image
                    source={require("../assets/prof.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
                <View style={{ paddingLeft: 5, paddingTop: 6 }}>
                  <Text style={{ fontSize: 20 }}>Winner</Text>
                  <Text style={{ color: "rgba(32, 21, 9, 0.465)" }}>
                    Public || 30mins ago
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={{ flex: 0, marginRight: 18 }}>
                <Icon
                  name="ellipsis-v"
                  size={25}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.caption}>
              <Text>
                Come with me to the Grace crusade this Sunday and be blessed 😇
              </Text>
            </View>
            <TouchableOpacity style={styles.postImg}>
              <Image
                source={require("../assets/church.jpg")}
                style={styles.imagePost}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Icon
                  name="plus"
                  size={20}
                  color="rgb(160, 90, 9)"
                  onPress={() => added++}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Add Event ({added})
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Icon
                  name="smile-o"
                  size={20}
                  color="rgb(160, 90, 9)"
                  onPress={() => going++}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Going ({going})
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 0, flexDirection: "row" }}>
                <Icon
                  name="clock-o"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Remind Me
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postContainer}>
            <View style={styles.imgName}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity style={styles.profileImage}>
                  <Image
                    source={require("../assets/prof.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
                <View style={{ paddingLeft: 5, paddingTop: 6 }}>
                  <Text style={{ fontSize: 20 }}>Winner</Text>
                  <Text style={{ color: "rgba(32, 21, 9, 0.465)" }}>
                    Public || 2hours ago
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={{ flex: 0, marginRight: 18 }}>
                <Icon
                  name="ellipsis-v"
                  size={25}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.caption}>
              <Text>
                Exams is just around the corner. Please come with me to the
                tutorial at the library tomorrow
              </Text>
            </View>
            <TouchableOpacity style={styles.postImg}>
              <Image
                source={require("../assets/library.jpg")}
                style={styles.imagePost}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Icon
                  name="plus"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Add Event
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Icon
                  name="smile-o"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Going
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 0, flexDirection: "row" }}>
                <Icon
                  name="clock-o"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Remind Me
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postContainer}>
            <View style={styles.imgName}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity style={styles.profileImage}>
                  <Image
                    source={require("../assets/prof.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
                <View style={{ paddingLeft: 5, paddingTop: 6 }}>
                  <Text style={{ fontSize: 20 }}>Winner</Text>
                  <Text style={{ color: "rgba(32, 21, 9, 0.465)" }}>
                    Public || 3days ago
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={{ flex: 0, marginRight: 18 }}>
                <Icon
                  name="ellipsis-v"
                  size={25}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.caption}>
              <Text>
                Hey boys and girls, forget exams. Party dey town this Friday.
                Come let's chill. #YOLO😜
              </Text>
            </View>
            <TouchableOpacity style={styles.postImg}>
              <Image
                source={require("../assets/club.jpg")}
                style={styles.imagePost}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Icon
                  name="plus"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Add Event
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Icon
                  name="smile-o"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Going
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 0, flexDirection: "row" }}>
                <Icon
                  name="clock-o"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Remind Me
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postContainer}>
            <View style={styles.imgName}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity style={styles.profileImage}>
                  <Image
                    source={require("../assets/prof.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
                <View style={{ paddingLeft: 5, paddingTop: 6 }}>
                  <Text style={{ fontSize: 20 }}>Winner</Text>
                  <Text style={{ color: "rgba(32, 21, 9, 0.465)" }}>
                    Public || 4days ago
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={{ flex: 0, marginRight: 18 }}>
                <Icon
                  name="ellipsis-v"
                  size={25}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.caption}>
              <Text>
                My birthday is this Saturday. Who would like to go on a date
                with me 👉👈😩
              </Text>
            </View>
            <TouchableOpacity style={styles.postImg}>
              <Image
                source={require("../assets/date.jpg")}
                style={styles.imagePost}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Icon
                  name="plus"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Add Event
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Icon
                  name="smile-o"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Going
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 0, flexDirection: "row" }}>
                <Icon
                  name="clock-o"
                  size={20}
                  color="rgb(160, 90, 9)"
                  // onPress={() => setProfileModalOpen(true)}
                />
                <Text
                  style={{
                    margin: 2,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Remind Me
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={{ flex: 1 }}>
          <Icon name="home" size={40} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Icon
            name="search"
            size={35}
            color="rgb(160, 90, 9)"
            onPress={() => navigation.navigate("search")}
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
            onPress={() => navigation.navigate("chatList")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  home_bg: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "rgba(243, 237, 232, 0.4)",
    width: "100%",
    height: "100%",
  },
  navbar: {
    // flex: 1,
    flexDirection: "row",
    // alignContent: "center",
    // justifyContent: "center",
    backgroundColor: "rgb(238, 218, 202)",
    width: "100%",
    height: "10%",
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    paddingTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    // paddingBottom: 5,
    marginBottom: 1,
  },
  feed: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  postContainer: {
    flex: 1,
    backgroundColor: "rgba(238, 214, 194, 0.201)",
    borderRadius: 10,
    width: "99%",
    alignSelf: "center",
    height: 350,
    padding: 4,
    marginBottom: 3,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // zIndex: 99,
    // elevation: 16,
  },
  // postContainerAndroid: {
  //   backgroundColor: "rgba(247, 245, 243",
  //   borderRadius: 20,
  //   height: 3000,
  //   padding: 4,
  // },
  imgName: {
    flexDirection: "row",
  },
  profileImage: {
    backgroundColor: "rgb(226, 214, 204)",
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  imagePost: {
    // flex: 1,
    height: 210,
    width: "100%",
    borderRadius: 8,
  },
  caption: {
    width: "99%",
    marginTop: 2,
    marginBottom: 3,
    paddingRight: 5,
    paddingLeft: 5,
  },
  postImg: {
    backgroundColor: "rgb(226, 214, 204)",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    margin: 5,
    height: 200,
    width: "95%",
  },
  actions: {
    width: "99%",
    padding: 5,
    flexDirection: "row",
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
