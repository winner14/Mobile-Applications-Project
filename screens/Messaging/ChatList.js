import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { userData } from "../../Data";

var x = 0;

export default function ChatList() {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  let dataArray = userData.filter((e) => e.Id != auth.currentUser.uid);

  const users = ({ item }, props) => (
    <View>
      <TouchableOpacity
        style={styles.chatBar}
        onPress={() => {
          navigation.navigate("chat");
        }}
      >
        <TouchableOpacity style={styles.profileImage}>
          <Image
            source={item.profilePhoto}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        </TouchableOpacity>
        <View
          style={{
            paddingLeft: 2,
            margin: 2,
            flexDirection: "column",
            flex: 5.5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "500",
                flex: 1,
                color: "rgba(0, 0, 0, 0.85)",
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Text
              style={{
                flex: 0,
                color: "rgba(32, 21, 9, 0.465)",
                paddingLeft: 10,
                fontSize: 18,
              }}
            >
              2mins ago
            </Text>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text numberOfLines={1} ellipsizeMode="tail">
              Hi👋
            </Text>
          </View>
        </View>
      </TouchableOpacity>
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
            Chat
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            flex: 0,
            margin: 5,
            alignContent: "center",
            justifyContent: "center",
          }}
          // onPress={() => setVNavModalOpen(true)}
        >
          <Icon name="search" size={32} color="rgb(160, 90, 9)" />
        </TouchableOpacity> */}
      </View>
      <View style={styles.msgScreen}>
        <FlatList data={dataArray} renderItem={users} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    // backgroundColor: "rgba(235, 208, 187, 0.7)",
    // flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "rgb(238, 218, 202)",
    width: "100%",
    height: "10%",
    paddingTop: 15,
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 5,
  },
  msgScreen: {
    flex: 0,
    height: "90%",
  },
  chatBar: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(238, 214, 194, 0.201)",
    borderRadius: 10,
    width: "98%",
    height: 80,
    // alignSelf: "center",
    padding: 4,
    paddingBottom: 5,
    marginBottom: 2,
  },
  profileImage: {
    backgroundColor: "rgb(226, 214, 204)",
    margin: 3,
    width: 65,
    height: 65,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});
