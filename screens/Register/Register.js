import React, { useEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "react-native-check-box";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { useNavigation } from "@react-navigation/native";

export default function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("home");
      }
    });

    return unsubscribe;
  }, []);

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => alert.message);
  };

  return (
    <View style={styles.modal_bg}>
      <KeyboardAvoidingView style={styles.form_container}>
        <View
          style={{ alignContent: "center", flexDirection: "row", width: "90%" }}
        >
          <View style={{ flex: 4 }}>
            <Text style={styles.top_text}>Register</Text>
            <Text style={styles.top_text_small}>
              Fill the form to create an account
            </Text>
          </View>
          <Icon
            name="close"
            size={40}
            color="#000"
            style={{ marginRight: -10 }}
            onPress={props.cancel}
          />
        </View>
        <View>
          <TextInput
            left={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={"user-circle"}
                    size={20}
                    color={"rgba(0, 0, 0, 0.729)"}
                  />
                )}
              />
            }
            icon="person"
            placeholder="Full name"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            style={styles.input_box}
          />
        </View>
        <View>
          <TextInput
            left={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={"envelope-o"}
                    size={20}
                    color={"rgba(0, 0, 0, 0.729)"}
                  />
                )}
              />
            }
            icon="person"
            placeholder="Email"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            style={styles.input_box}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
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
            placeholder="Username"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            style={styles.input_box}
          />
        </View>
        <View>
          <TextInput
            left={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={"unlock-alt"}
                    size={20}
                    color={"rgba(0, 0, 0, 0.729)"}
                  />
                )}
              />
            }
            icon="person"
            placeholder="Password"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            style={styles.input_box}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon name={"eye"} size={20} color={"rgba(0, 0, 0, 0.729)"} />
                )}
              />
            }
          />
        </View>
        <View>
          <TextInput
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
            icon="person"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            style={styles.input_box}
            onChangeText={(text) => setPassword(text)}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon name={"eye"} size={20} color={"rgba(0, 0, 0, 0.729)"} />
                )}
              />
            }
          />
        </View>
        <View style={styles.agree_box}>
          <CheckBox
            style={styles.agree}
            onClick={() => {
              console.log("Clicked");
            }}
            //   isChecked={this.state.isChecked}
            rightText={
              "I have read and agreed to the Terms of Use and Privacy Policy."
            }
          />
        </View>
        <View style={{ width: "90%" }}>
          <Button
            mode="contained"
            style={{
              backgroundColor: "rgba(121, 58, 7, 0.827)",
              borderRadius: 5,
              marginTop: 15,
              width: "40%",
              height: 45,
              fontSize: 50,
              fontWeight: "bold",
              alignSelf: "flex-end",
            }}
            onPress={handleRegister}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Done</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  modal_bg: {
    flex: 1,
    backgroundColor: "rgba(243, 237, 232, 0.4)",
    width: "100%",
    top: 20,
  },
  form_container: {
    top: 20,
  },
  input_box: {
    backgroundColor: "rgb(238, 218, 202)",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 0,
    marginBottom: 2,
    marginTop: 2,
  },
  top_text: {
    width: "90%",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 35,
  },
  top_text_small: {
    width: "90%",
    alignSelf: "center",
    fontWeight: "normal",
    marginBottom: 10,
  },
  agree_box: {
    width: "90%",
    alignSelf: "center",
    marginTop: 5,
  },
});
