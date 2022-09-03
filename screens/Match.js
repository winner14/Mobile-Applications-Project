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
} from "react-native";
import { and } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import { userData } from "../Data";
import { firebaseConfig } from "../firebase-config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// console.log(auth.currentUser.email);
const data = userData;

// const dataList = ({ item }) => (
//   <View style={styles.userCard}>
//     <View>
//       <Text style={{ fontSize: 30, fontWeight: "600" }}>{item.name}</Text>
//       <Text style={{ fontSize: 18 }}>{item.course}</Text>
//       {item.interests != "" ? (
//         <Text style={{ fontSize: 17 }}>{item.interests}</Text>
//       ) : null}
//     </View>
//     <View style={styles.profileImage}>
//       <Image
//         source={require("../assets/prof.jpg")}
//         style={styles.image}
//         resizeMode="cover"
//       ></Image>
//     </View>
//     <View style={styles.buttons}>
//       <TouchableOpacity
//         style={{
//           height: 50,
//           width: "100%",
//           borderRadius: 15,
//           backgroundColor: "rgba(112, 56, 10, 0.6)",
//           justifyContent: "center",
//           alignItems: "center",
//           alignSelf: "center",
//         }}
//         onPress={() => addUser}
//       >
//         <Text style={{ fontSize: 25, fontWeight: "800" }}>ADD</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// );

export default function Match() {
  // const [createMatch, setCreateMatch] = useState(false);
  // const [data1, setData1] = useState({});

  // useEffect(() => {
  //   let currentUser = data.find((e) => e.Id == auth.currentUser.uid);
  //   setData1(data);
  // }, []);

  // const addUser = () => {
  //   if (data.some(interests) == currentUser.any(interests)) {
  //     console.log("matched you with" + item.name);
  //   }
  // };

  console.log(userData.find((e) => e.Id == auth.currentUser.uid).interests);

  // const addUser = () => console.log(data.interests);
  // function commonInterests(interests) {
  //   return userData.some(function(el) {
  //     return el.username === username;
  //   });
  // }

  const dataList = ({ item }) => (
    <View style={styles.userCard}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>{item.name}</Text>
        <Text style={{ fontSize: 18 }}>{item.course}</Text>
        {item.interests != "" ? (
          <Text style={{ fontSize: 17 }}>{item.interests}</Text>
        ) : null}
      </View>
      <View style={styles.profileImage}>
        <Image
          source={require("../assets/prof.jpg")}
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
            // item.interests.entries <=

            // userData.find((e) => e.Id == auth.currentUser.uid).interests.entries
            //   ? console.log("match")
            //   : console.log("No matvh")
            for (let x = 0; x < item.interests.length; x++) {
              if (
                item.interests[x] ==
                userData.find((e) => e.Id == auth.currentUser.uid).interests[x]
              ) {
                console.log("match");
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
}

const styles = StyleSheet.create({
  bg: {
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
  matchFeed: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
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
  userCard: {
    // flex: 1,
    // flexDirection: "row",
    backgroundColor: "rgba(238, 214, 194, 0.201)",
    borderRadius: 15,
    width: "98%",
    height: 490,
    alignContent: "center",
    // alignItems: "center",
    padding: 8,
    paddingBottom: 5,
    marginBottom: 3,
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
    width: 350,
    height: 350,
    borderRadius: 15,
    overflow: "hidden",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 3,
  },
});
