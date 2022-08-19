import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator;

export default function Search(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.bg}>
      <View style={styles.titleBar}>
        <TextInput
          placeholder="Search name"
          placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
          fontSize={18}
          style={{
            flex: 1,
            width: "100%",
            height: 55,
            paddingLeft: 15,
            paddingRight: 45,
            padding: 5,
            borderWidth: 0.5,
            borderRadius: 30,
          }}
        />
        <TouchableOpacity style={{ flex: 0, margin: 10, marginLeft: -40 }}>
          <Icon name="search" size={30} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
      </View>
      <View style={styles.searches}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.searches}>
            <View>
              <Text style={styles.subText}>Trending</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  marginBottom: 15,
                  backgroundColor: "rgba(247, 245, 243)",
                }}
              >
                <TouchableOpacity style={styles.mediaImageContainer}>
                  <Image
                    source={require("../assets/summer.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mediaImageContainer}>
                  <Image
                    source={require("../assets/trend-church.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mediaImageContainer}>
                  <Image
                    source={require("../assets/black.png")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mediaImageContainer}>
                  <Image
                    source={require("../assets/birth.jpeg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mediaImageContainer}>
                  <Image
                    source={require("../assets/wed.jpeg")}
                    style={styles.image}
                    resizeMode="cover"
                  ></Image>
                </TouchableOpacity>
              </ScrollView>
              <View>
                <Text style={styles.subText}>Recent events</Text>
                <View
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={styles.recentsContainer}>
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
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          marginBottom: -10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 18, flex: 1 }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          Sweet Sixteen with Debby
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
                      <View style={{ flex: 1 }}>
                        <Text numberOfLines={2} ellipsizeMode="tail">
                          💃💃💃I'm inviting you to the party of the decade on
                          my dear sister's birthday. Hope to see you there
                          💃💃💃
                        </Text>
                      </View>
                      <View style={styles.actions}>
                        <TouchableOpacity
                          style={{
                            flex: 0,
                            marginRight: 5,
                            alignSelf: "flex-end",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
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
                  <View style={styles.recentsContainer}>
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
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          marginBottom: -10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 18, flex: 1 }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          Sunday Church Service
                        </Text>
                        <Text
                          style={{
                            flex: 0,
                            color: "rgba(32, 21, 9, 0.465)",
                            paddingLeft: 10,
                            fontSize: 18,
                          }}
                        >
                          3days ago
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text numberOfLines={2} ellipsizeMode="tail">
                          Special Sunday, Speacial blessing... Chale make we go
                          church!👼
                        </Text>
                      </View>
                      <View style={styles.actions}>
                        <TouchableOpacity
                          style={{
                            flex: 0,
                            marginRight: 5,
                            alignSelf: "flex-end",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
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
                  <View style={styles.recentsContainer}>
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
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          marginBottom: -10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 18, flex: 1 }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          Girls night out
                        </Text>
                        <Text
                          style={{
                            flex: 0,
                            color: "rgba(32, 21, 9, 0.465)",
                            paddingLeft: 10,
                            fontSize: 18,
                          }}
                        >
                          5days ago
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text numberOfLines={2} ellipsizeMode="tail">
                          Let's party at the mall this Friday🎉🎉🎉
                        </Text>
                      </View>
                      <View style={styles.actions}>
                        <TouchableOpacity
                          style={{
                            flex: 0,
                            marginRight: 5,
                            alignSelf: "flex-end",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
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
                  <View style={styles.recentsContainer}>
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
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1,
                          marginBottom: -10,
                        }}
                      >
                        <Text
                          style={{ fontSize: 18, flex: 1 }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          Learn with WROK
                        </Text>
                        <Text
                          style={{
                            flex: 0,
                            color: "rgba(32, 21, 9, 0.465)",
                            paddingLeft: 10,
                            fontSize: 18,
                          }}
                        >
                          1week ago
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text numberOfLines={2} ellipsizeMode="tail">
                          Special Communication Skills Tutorial for all first
                          years. #YouGatThis🤝😉
                        </Text>
                      </View>
                      <View style={styles.actions}>
                        <TouchableOpacity
                          style={{
                            flex: 0,
                            marginRight: 5,
                            alignSelf: "flex-end",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
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
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("home")}
        >
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
            onPress={() => navigation.navigate("chat")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  titleBar: {
    flex: 0,
    flexDirection: "row",
    // alignContent: "center",
    // justifyContent: "center",
    top: 20,
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 7,
    padding: 5,
    width: "100%",
    height: "10%",
  },
  searches: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    // alignItems: "center",
    width: "99%",
    padding: 1,
    margin: 5,
    marginTop: 10,
  },
  mediaImageContainer: {
    backgroundColor: "rgba(247, 245, 243)",
    width: 400,
    height: 180,
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  subText: {
    fontSize: 12,
    color: "rgba(32, 21, 9, 0.665)",
    textTransform: "uppercase",
    fontWeight: "500",
    margin: 5,
    marginTop: 0,
  },
  recentsContainer: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(238, 214, 194, 0.201)",
    borderRadius: 10,
    width: "98%",
    height: 95,
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
