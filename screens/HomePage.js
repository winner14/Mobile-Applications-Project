import {
  FlatList,
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
import { posts } from "../Data";

const HomePage = (props) => {
  const [vNavModalOpen, setVNavModalOpen] = useState(false);
  const thisPosts = posts;

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace("login");
    });
  };

  var [like, setLike] = useState(0);
  var [dislike, setDislike] = useState(0);
  var [going, setGoing] = useState(0);

  const onePost = ({ item }) => (
    <View>
      <View style={styles.postContainer}>
        <View style={styles.imgName}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={item.userProfile}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <View style={{ paddingLeft: 5, paddingTop: 6 }}>
              <Text style={{ fontSize: 20 }}>{item.username}</Text>
              <Text style={{ color: "rgba(32, 21, 9, 0.465)" }}>
                {item.postType} || {item.time}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 0, marginRight: 18 }}>
            <Icon name="ellipsis-v" size={25} color="rgb(160, 90, 9)" />
          </TouchableOpacity>
        </View>
        <View style={styles.caption}>
          <Text>{item.caption}</Text>
        </View>
        <TouchableOpacity style={styles.postImg}>
          <Image
            source={item.img}
            style={styles.imagePost}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => setLike(like++)}
          >
            <Icon name="arrow-up" size={20} color="rgb(160, 90, 9)" />
            <Text
              style={{
                margin: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Like {like}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => setDislike(dislike++)}
          >
            <Icon name="arrow-down" size={20} color="rgb(160, 90, 9)" />
            <Text
              style={{
                margin: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Dislike {dislike}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 0, flexDirection: "row", marginRight: 10 }}
          >
            <Icon
              name="heart"
              size={20}
              color="rgb(160, 90, 9)"
              onPress={() => setGoing(going++)}
            />
            <Text
              style={{
                margin: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Going {going}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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
          <FlatList data={thisPosts} renderItem={onePost} />
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
            onPress={() => navigation.navigate("match")}
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
    backgroundColor: "rgba(243, 237, 232, 0.4)",
    width: "100%",
    height: "100%",
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "rgb(238, 218, 202)",
    width: "100%",
    height: 70,
    paddingTop: 20,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 1,
  },
  feed: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignContent: "center",
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
  },
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
    marginLeft: 5,
    marginRight: 5,
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
});
