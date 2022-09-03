import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Modal,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";

import bg2 from "../assets/bg2.jpg";
import { TextInput, Button } from "react-native-paper";
import Register from "../screens/Register";
import HomePage from "../screens/HomePage";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  const edges = useSafeAreaInsets();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);
        <HomePage />;
      })
      .catch((error) => {
        console.log("Incorrect Email or Password");
        Alert.alert("Incorrect Email or Password");
      });
  };

  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.bg}>
      <ImageBackground source={bg2} style={styles.bg_image}>
        <Modal visible={modalOpen} animationType="slide">
          <Register
            style={{ backgroundColor: "rgba(243, 237, 232, 0.1)" }}
            cancel={setModalOpen}
          />
        </Modal>
        <View style={styles.logo}>
          <Text
            style={{
              fontSize: 70,
              fontWeight: "bold",
              fontFamily: "Inter_900Black",
              color: "rgb(160, 90, 9)",
              shadowOpacity: 0.9,
              shadowRadius: 16.0,
              textShadowColor: "#000",
              elevation: 30,
            }}
          >
            MiJO
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "rgb(160, 90, 9)",
              shadowColor: "#000",
              shadowOpacity: 0.9,
              shadowRadius: 16.0,
              elevation: 30,
            }}
          >
            Search ~ Meet ~ Connect
          </Text>
        </View>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.login_register}>
            <View
              style={{ paddingHorizontal: 25, marginBottom: 10, width: "100%" }}
            >
              <TextInput
                left={
                  <TextInput.Icon
                    name={() => (
                      <Icon
                        name={"user"}
                        size={20}
                        color={"rgba(0, 0, 0, 0.729)"}
                      />
                    )}
                  />
                }
                icon="person"
                placeholder="Enter your email"
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="Next"
                onChangeText={(text) => setEmail(text)}
                style={styles.input_box}
              />
            </View>
            <View
              style={{ paddingHorizontal: 25, marginBottom: 10, width: "100%" }}
            >
              <TextInput
                icon="key"
                placeholder="Enter your password"
                secureTextEntry
                autoCompleteType="password"
                autoCapitalize="none"
                keyboardAppearance="dark"
                returnKeyType="go"
                returnKeyLabel="Go"
                onChangeText={(text) => setPassword(text)}
                style={styles.input_box}
                left={
                  <TextInput.Icon
                    name={() => (
                      <Icon
                        name={"lock"}
                        size={20}
                        color={"rgba(0, 0, 0, 0.729)"}
                      />
                    )}
                  />
                }
                right={
                  <TextInput.Icon
                    name={() => (
                      <Icon
                        name={"eye"}
                        size={20}
                        color={"rgba(0, 0, 0, 0.729)"}
                      />
                    )}
                  />
                }
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(121, 58, 7, 0.827)",
                width: 270,
                height: 45,
                marginTop: 5,
                marginBottom: 10,
                borderWidth: 0.5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                borderColor: "rgba(85, 41, 5, 0.849)",
              }}
              onPress={handleSignIn}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => setModalOpen(true)}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                New User?
              </Text>
              <View
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    color: "rgba(45, 1, -35, 1)",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Register now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "rgba(243, 237, 232, 0.4)",
  },
  bg_image: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 2,
    alignItems: "center",
    top: 70,
  },
  login_register: {
    backgroundColor: "rgba(189, 118, 59, 0.156)",
    borderRadius: 30,
    marginBottom: "iOS" ? 45 : 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 25,
    paddingTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  input_box: {
    backgroundColor: "rgb(238, 218, 202)",
    width: 270,
    height: 52,
    borderColor: "#e2f7d5",
    borderRadius: 0,
    borderWidth: 0,
  },
});
