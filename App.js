import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import HomePage from "./screens/Login/HomePage";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Landing from "./screens/Landing/Landing";
import React from "react";
import AppLoading from "expo-app-loading";
import Chat from "./screens/Chat/Chat";
import Profile from "./screens/Profile/Profile";
import Notifications from "./screens/Notifications/Notifications";
import Search from "./screens/Search/Search";

// import * as firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyA7GFgrxytC1JklPSBUgFBr-lCwJXCK6MI",
//   authDomain: "my-app-2edfc.firebaseapp.com",
//   projectId: "my-app-2edfc",
//   storageBucket: "my-app-2edfc.appspot.com",
//   messagingSenderId: "932735538963",
//   appId: "1:932735538963:web:5259d9f9738b34dbc56ce6",
//   measurementId: "G-G3G7RX90JD",
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        // await Font.loadAsync({
        //   ...Ionicons.font,
        //   "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
        // });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        backgroundColor="rgb(238, 218, 202)"
        barStyle="light-content"
        hidden={false}
      /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false, gestureEnabled: false }}
            name="home"
            component={HomePage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="chat"
            component={Chat}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="profile"
            component={Profile}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="notifications"
            component={Notifications}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="search"
            component={Search}
          />
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="matches"
            component={}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
