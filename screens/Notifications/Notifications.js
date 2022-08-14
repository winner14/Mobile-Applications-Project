import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

export default function Profile(props) {
  return (
    <View style={styles.bg}>
      <View style={styles.titlebBar}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            flex: 1,
            color: "rgb(160, 90, 9)",
          }}
        >
          Notifications
        </Text>
        <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
          <Icon
            name="ellipsis-v"
            size={25}
            color="rgb(160, 90, 9)"
            // onPress={() => setProfileModalOpen(true)}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.notify}>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.profileImage}>
              <Image
                source={require("../assets/prof.jpg")}
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
              <View style={{ flexDirection: "row", flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Ama</Text>
                <Text
                  style={{
                    color: "rgba(32, 21, 9, 0.465)",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  2mins ago
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  Winner, Ama would like to go on a date with you. View Ama's
                  profile and know her interests
                </Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Add Friend
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0, marginRight: 5 }}>
                  <Text
                    style={{
                      color: "rgb(160, 90, 9)",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    Dismiss
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={{ flex: 1 }} onPress={props.back}>
          <Icon name="home" size={40} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Icon name="search" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Icon
            name="user-circle"
            size={35}
            color="rgb(160, 90, 9)"
            // onPress={() => setProfileModalOpen(true)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Icon
            name="bell-o"
            size={35}
            color="rgb(160, 90, 9)"
            onPress={props.back}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 0 }}>
          <Icon name="envelope-o" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: "100%",
    width: "100%",
    margin: 4,
  },
  titlebBar: {
    flex: 0,
    flexDirection: "row",
    // alignContent: "center",
    // justifyContent: "center",
    top: 20,
    margin: -2,
    padding: 10,
    width: "100%",
    height: "10%",
  },
  profileImage: {
    backgroundColor: "rgb(226, 214, 204)",
    flex: 1,
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
  actions: {
    backgroundColor: "rgba(238, 214, 194, 0.0)",
    flex: 0,
    width: "99%",
    padding: 5,
    flexDirection: "row",
  },
  notificationContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(238, 214, 194, 0.201)",
    borderRadius: 10,
    width: "98%",
    height: 40,
    // alignSelf: "center",
    height: 98,
    padding: 4,
    paddingBottom: 5,
    marginBottom: 2,
  },
  notify: {
    justifyContent: "center",
    alignSelf: "center",
    width: "99%",
    padding: 2,
    margin: 5,
  },
  footer: {
    flex: 0,
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
