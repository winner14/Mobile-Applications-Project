import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  Actions,
  Bubble,
  GiftedChat,
  InputToolbar,
} from "react-native-gifted-chat";
import Search from "../Search";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { Avatar } from "react-native-elements";
import DocumentPicker, { types } from "react-native-document-picker";
import {
  collection,
  addDoc,
  query,
  initializeFirestore,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export default function Chat(props) {
  const [messages, setMessages] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [DocumentPicker.types.pdf],
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const renderActions = (props) => {
    return (
      <Actions
        {...props}
        options={{
          ["Document"]: async (props) => {
            try {
              handleDocumentSelection;
            } catch (e) {
              if (DocumentPicker.isCancel(e)) {
                console.log("User cancelled!");
              } else {
                throw e;
              }
            }
          },
          Cancel: (props) => {
            console.log("Cancel");
          },
        }}
        onSend={(args) => console.log(args)}
      />
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              source: require("../../assets/prof.jpg"),
            }}
          />
        </View>
      ),
      // headerRight: () => (
      //   <TouchableOpacity
      //     style={{
      //       marginRight: 10,
      //     }}
      //     onPress={signOutNow}
      //   >
      //     <Text>logout</Text>
      //   </TouchableOpacity>
      // ),
    });
  });

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const db = initializeFirestore(app, { experimentalForceLongPolling: true });

  // const [messages, setMessages] = useState([]);

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "rgba(236, 201, 174, 0.7)",
          borderTopWidth: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          // borderBottomLeftRadius: 10,
          // borderBottomRightRadius: 10,
          padding: 3,
        }}
      />
    );
  };

  const customSystemMessage = (props) => {
    return (
      <View style={styles.ChatMessageSytemMessageContainer}>
        <Icon name="lock" color="#9d9d9d" size={16} />
        <Text style={styles.ChatMessageSystemMessageText}>
          Your chat is secured. Remember to be cautious about what you share
          with others.
        </Text>
      </View>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 20,
            padding: 3,
            backgroundColor: "rgb(241, 181, 131)",
          },
          left: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 5,
            padding: 2,
            borderWidth: 1.2,
            borderColor: "rgb(241, 181, 131)",
            backgroundColor: "rgb(241, 211, 187)",
          },
        }}
        containerToPreviousStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
        containerToNextStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
        containerStyle={{
          right: { borderTopRightRadius: 15 },
          left: { borderTopLeftRadius: 15 },
        }}
      />
    );
  };

  useLayoutEffect(() => {
    const q = query(collection(db, "chats"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(db, "chats"), { _id, createdAt, text, user });
  }, []);
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
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0,
            margin: 2,
            // alignContent: "center",
            // justifyContent: "center",
          }}
          onPress={() => navigation.navigate("home")}
        >
          <Icon name="close" size={40} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={(messages) => onSend(messages)}
          renderActions={(props) => renderActions(props)}
          user={{
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            avatar: auth?.currentUser?.photoURL,
          }}
          renderInputToolbar={(props) => customtInputToolbar(props)}
          renderSystemMessage={(props) => customSystemMessage(props)}
          renderBubble={renderBubble}
          alwaysShowSend={true}
        />
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
    marginBottom: 1,
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
