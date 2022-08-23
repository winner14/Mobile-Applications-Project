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
import { Bubble, GiftedChat, InputToolbar } from "react-native-gifted-chat";
import Search from "../Search";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { Avatar } from "react-native-elements";
import {
  collection,
  addDoc,
  query,
  initializeFirestore,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export default function Chat(props) {
  // const [searchModalOpen, setSearchModalOpen] = useState(false);
  // return (
  //   <View style={styles.bg}>
  //     {/* <Text style={{ flex: 1, fontSize: 25, top: 50 }}>Chat</Text>
  //     <TouchableOpacity
  //       onPress={props.back}
  //       style={{ width: "60%", borderWidth: 1, marginBottom: 30 }}
  //     >
  //       <Text
  //         style={{ alignSelf: "center", fontSize: 25 }}
  //         onPress={() => navigation.navigate("chat")}
  //       >
  //         Back
  //       </Text>
  //     </TouchableOpacity> */}
  //     <View style={styles.navbar}>
  //       <TouchableOpacity
  //         style={{
  //           flex: 1,
  //         }}
  //       >
  //         <Text
  //           style={{
  //             fontSize: 35,
  //             fontWeight: "bold",
  //             color: "rgb(160, 90, 9)",
  //           }}
  //         >
  //           Chats
  //         </Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         style={{
  //           flex: 0,
  //           margin: 5,
  //           alignContent: "center",
  //           justifyContent: "center",
  //         }}
  //         // onPress={() => setVNavModalOpen(true)}
  //       >
  //         <Icon name="search" size={32} color="rgb(160, 90, 9)" />
  //       </TouchableOpacity>
  //     </View>
  //     <View style={styles.msgScreen}>
  //       <ScrollView
  //         showsVerticalScrollIndicator={false}
  //         style={{
  //           marginBottom: 15,
  //           backgroundColor: "rgba(247, 245, 243)",
  //           width: "100%",
  //           alignContent: "center",
  //         }}
  //       >
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 John
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 2mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 Hi👋
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Elsie
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 2mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 We need to talk
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Kofi Johnson
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 3mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 Hello... How are you doing?😀
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Mom
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 3mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 Where are you?
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Emma
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 5mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 Hey👀 Call me ASAP!
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Lucy
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 15mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 I'm home alone😪
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 John
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 2mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 Hi👋
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Elsie
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 2mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 We need to talk
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Kofi Johnson
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 3mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 Hello... How are you doing?😀
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Mom
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 3mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 Where are you?
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Emma
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 5mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 Hey👀 Call me ASAP!
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.chatBar}>
  //           <TouchableOpacity style={styles.profileImage}>
  //             <Image
  //               source={require("../assets/prof.jpg")}
  //               style={styles.image}
  //               resizeMode="cover"
  //             ></Image>
  //           </TouchableOpacity>
  //           <View
  //             style={{
  //               paddingLeft: 2,
  //               margin: 2,
  //               flexDirection: "column",
  //               flex: 5.5,
  //             }}
  //           >
  //             <View
  //               style={{
  //                 flexDirection: "row",
  //                 flex: 1,
  //                 marginBottom: 10,
  //               }}
  //             >
  //               <Text
  //                 style={{
  //                   fontSize: 28,
  //                   fontWeight: "600",
  //                   flex: 1,
  //                   color: "rgba(0, 0, 0, 0.85)",
  //                 }}
  //                 numberOfLines={1}
  //                 ellipsizeMode="tail"
  //               >
  //                 Lucy
  //               </Text>
  //               <Text
  //                 style={{
  //                   flex: 0,
  //                   color: "rgba(32, 21, 9, 0.465)",
  //                   paddingLeft: 10,
  //                   fontSize: 18,
  //                 }}
  //               >
  //                 15mins ago
  //               </Text>
  //             </View>
  //             <View style={{ flex: 1, marginLeft: 5 }}>
  //               <Text numberOfLines={1} ellipsizeMode="tail">
  //                 I'm home alone😪
  //               </Text>
  //             </View>
  //           </View>
  //         </TouchableOpacity>
  //       </ScrollView>
  //     </View>
  //   </View>

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const db = initializeFirestore(app, { experimentalForceLongPolling: true });

  const [messages, setMessages] = useState([]);

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "rgba(236, 201, 174, 0.7)",
          borderTopWidth: 1,
          borderRadius: 5,
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
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 5,
            backgroundColor: "rgb(241, 181, 131)",
          },
          left: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 5,
            backgroundColor: "rgb(241, 181, 131)",
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
            Winner
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
