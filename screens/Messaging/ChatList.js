import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function ChatList() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.bg}>
      {/* <Text style={{ flex: 1, fontSize: 25, top: 50 }}>Chat</Text>
      <TouchableOpacity
        onPress={props.back}
        style={{ width: "60%", borderWidth: 1, marginBottom: 30 }}
      >
        <Text
          style={{ alignSelf: "center", fontSize: 25 }}
          onPress={() => navigation.navigate("chat")}
        >
          Back
        </Text>
      </TouchableOpacity> */}
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
            Chats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0,
            margin: 5,
            alignContent: "center",
            justifyContent: "center",
          }}
          // onPress={() => setVNavModalOpen(true)}
        >
          <Icon name="search" size={32} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
      </View>
      <View style={styles.msgScreen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginBottom: 15,
            backgroundColor: "rgba(247, 245, 243)",
            width: "100%",
            alignContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.chatBar}
            onPress={() => navigation.navigate("chatScreen")}
          >
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  John
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
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Elsie
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
                  We need to talk
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Kofi Johnson
                </Text>
                <Text
                  style={{
                    flex: 0,
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  3mins ago
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  Hello... How are you doing?😀
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Mom
                </Text>
                <Text
                  style={{
                    flex: 0,
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  3mins ago
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  Where are you?
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Emma
                </Text>
                <Text
                  style={{
                    flex: 0,
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  5mins ago
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  Hey👀 Call me ASAP!
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Lucy
                </Text>
                <Text
                  style={{
                    flex: 0,
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  15mins ago
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  I'm home alone😪
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  John
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
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Elsie
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
                  We need to talk
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Kofi Johnson
                </Text>
                <Text
                  style={{
                    flex: 0,
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  3mins ago
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  Hello... How are you doing?😀
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Mom
                </Text>
                <Text
                  style={{
                    flex: 0,
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  3mins ago
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  Where are you?
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Emma
                </Text>
                <Text
                  style={{
                    flex: 0,
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  5mins ago
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  Hey👀 Call me ASAP!
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBar}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../../assets/prof.jpg")}
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
                    fontSize: 28,
                    fontWeight: "600",
                    flex: 1,
                    color: "rgba(0, 0, 0, 0.85)",
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Lucy
                </Text>
                <Text
                  style={{
                    flex: 0,
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  15mins ago
                </Text>
              </View>
              <View style={{ flex: 1, marginLeft: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  I'm home alone😪
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
    // justifyContent: "center",
    backgroundColor: "rgb(238, 218, 202)",
    width: "100%",
    height: "10%",
    paddingTop: 15,
    paddingLeft: 8,
    paddingRight: 8,
    // paddingBottom: 5,
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
