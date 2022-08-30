import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { getAuth } from "firebase/auth";

var x = 0;
export var chatName;

const Chats = (props) => {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [data, setData] = useState({});

  const userId = auth.currentUser.uid;
  let dataArray = [
    {
      Id: "CX57HWBexMQhtXgrMEOPAHLX4pb2",
      name: "Kpodo Winner",
      username: "meet.winner",
      course: "Computer Science",
      profilePhoto: "",
      bio: "Here for fun and to make friends. Feel free to add me",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "2",
      name: "Nana Agyemang",
      username: "nana10",
      course: "Computer Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "m5OqpcsZpTfXJFi6JPUe96KojT72",
      name: "Worla",
      username: "nworla_xx",
      course: "Chemical Enginnering",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "FtghNEDM4tMVhhi2rKcLM0y1IWr1",
      name: "MR. Baah",
      username: "_baah",
      course: "Environmental Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "sEP2v3q29GdQV5Ftu0j8vEdNvrt1",
      name: "Mabel",
      username: "mabelll",
      course: "Computer Engineering",
      profilePhoto: "",
      bio: "",
      events: 10,
      followers: 3000,
      friends: 30,
    },
    {
      Id: "5",
      name: "Obaapa Serwaa",
      username: "serwaaxx",
      course: "Fashion and Design",
      profilePhoto: "",
      bio: "",
      events: 40,
      followers: 2980,
      friends: 45,
    },
    {
      Id: "6",
      name: "Abraham",
      username: "father_AB",
      course: "Chinese",
      profilePhoto: "",
      bio: "",
      events: 300,
      followers: 1087,
      friends: 90,
    },
    {
      Id: "Jrm1Yww89UMFl4BpVjCWiRv1Eg93",
      name: "Aaron",
      username: "aaron",
      course: "Literature",
      profilePhoto: "",
      bio: "",
      events: 20,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "8",
      name: "MR. Agyapong",
      username: "agyapong",
      course: "Environmental Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "9",
      name: "Elorm Ella",
      username: "elorm.e",
      course: "Petroleum Engineering",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 4000,
      friends: 178,
    },
    {
      Id: "ORq4Crm54sSXQ8Z729qPo4hjpFv2",
      name: "Godfriend",
      username: "goddey",
      course: "Mathematics",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 3205,
      friends: 168,
    },
    {
      Id: "iy58nSPjX1SjcAbtnLAhQymSYyv2",
      name: "Azu Joshua",
      username: "_subway",
      course: "Pharmacy",
      profilePhoto: "",
      bio: "",
      events: 15,
      followers: 5205,
      friends: 18,
    },
    {
      Id: "zqGaB4ahauhUfwbs6LlMI7iIwji2",
      name: "Kelvin",
      username: "savage",
      course: "Business Administraton",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "0uZRvgU6nANqpQOs7ollhJW2syf2",
      name: "Tiana",
      username: "tiana_xx",
      course: "Marine Engineering",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "UjPX0Qg6OJZm0Z0HJD77d0LiWPz1",
      name: "Nadine",
      username: "ms_nadine",
      course: "Arts",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "15",
      name: "Francis",
      username: "franc_",
      course: "Environmental Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "16",
      name: "Nicholas",
      username: "fanta",
      course: "Electrical Engieering",
      profilePhoto: "",
      bio: "",
      events: 45,
      followers: 6005,
      friends: 18,
    },
    {
      Id: "17",
      name: "Bless",
      username: "_blessed",
      course: "Physics",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "18",
      name: "Eddy",
      username: "_ed",
      course: "Environmental Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "19",
      name: "Kwame Young",
      username: "kwame_y",
      course: "Political Science",
      profilePhoto: "",
      bio: "",
      events: 5,
      followers: 55,
      friends: 78,
    },
    {
      Id: "20",
      name: "Allan Jackson",
      username: "AJ",
      course: "Graphic Design",
      profilePhoto: "",
      bio: "",
      events: 59,
      followers: 5235,
      friends: 78,
    },
    {
      Id: "21",
      name: "Nana Ama",
      username: "dr.ama",
      course: "Doctor of Optometry",
      profilePhoto: "",
      bio: "",
      events: 5,
      followers: 3455,
      friends: 378,
    },
    {
      Id: "22",
      name: "David Baah",
      username: "coder",
      course: "Computer Science",
      profilePhoto: "",
      bio: "",
      events: 5,
      followers: 55,
      friends: 78,
    },
    {
      Id: "23",
      name: "Jack Jackson",
      username: "jack_jack",
      course: "Biological Science",
      profilePhoto: "",
      bio: "",
      events: 65,
      followers: 285,
      friends: 378,
    },
  ];
  useEffect(() => {
    // let data = dataArray.find((e) => e.Id != userId);
    // setData(data);
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.chatBar}
        onPress={() => {
          navigation.navigate("chat", { chat: props.name });
          chatName = props.name;
        }}
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
                fontSize: 24,
                fontWeight: "500",
                flex: 1,
                color: "rgba(0, 0, 0, 0.85)",
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {props.name}
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
};

export default function ChatList() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [data, setData] = useState({});

  const userId = auth.currentUser.uid;

  let dataArray = [
    {
      Id: "CX57HWBexMQhtXgrMEOPAHLX4pb2",
      name: "Kpodo Winner",
      username: "meet.winner",
      course: "Computer Science",
      profilePhoto: "",
      bio: "Here for fun and to make friends. Feel free to add me",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "2",
      name: "Nana Agyemang",
      username: "nana10",
      course: "Computer Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "m5OqpcsZpTfXJFi6JPUe96KojT72",
      name: "Worla",
      username: "nworla_xx",
      course: "Chemical Enginnering",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "FtghNEDM4tMVhhi2rKcLM0y1IWr1",
      name: "MR. Baah",
      username: "_baah",
      course: "Environmental Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "sEP2v3q29GdQV5Ftu0j8vEdNvrt1",
      name: "Mabel",
      username: "mabelll",
      course: "Computer Engineering",
      profilePhoto: "",
      bio: "",
      events: 10,
      followers: 3000,
      friends: 30,
    },
    {
      Id: "5",
      name: "Obaapa Serwaa",
      username: "serwaaxx",
      course: "Fashion and Design",
      profilePhoto: "",
      bio: "",
      events: 40,
      followers: 2980,
      friends: 45,
    },
    {
      Id: "6",
      name: "Abraham",
      username: "father_AB",
      course: "Chinese",
      profilePhoto: "",
      bio: "",
      events: 300,
      followers: 1087,
      friends: 90,
    },
    {
      Id: "Jrm1Yww89UMFl4BpVjCWiRv1Eg93",
      name: "Aaron",
      username: "aaron",
      course: "Literature",
      profilePhoto: "",
      bio: "",
      events: 20,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "8",
      name: "MR. Agyapong",
      username: "agyapong",
      course: "Environmental Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "9",
      name: "Elorm Ella",
      username: "elorm.e",
      course: "Petroleum Engineering",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 4000,
      friends: 178,
    },
    {
      Id: "ORq4Crm54sSXQ8Z729qPo4hjpFv2",
      name: "Godfriend",
      username: "goddey",
      course: "Mathematics",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 3205,
      friends: 168,
    },
    {
      Id: "iy58nSPjX1SjcAbtnLAhQymSYyv2",
      name: "Azu Joshua",
      username: "_subway",
      course: "Pharmacy",
      profilePhoto: "",
      bio: "",
      events: 15,
      followers: 5205,
      friends: 18,
    },
    {
      Id: "zqGaB4ahauhUfwbs6LlMI7iIwji2",
      name: "Kelvin",
      username: "savage",
      course: "Business Administraton",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "0uZRvgU6nANqpQOs7ollhJW2syf2",
      name: "Tiana",
      username: "tiana_xx",
      course: "Marine Engineering",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "UjPX0Qg6OJZm0Z0HJD77d0LiWPz1",
      name: "Nadine",
      username: "ms_nadine",
      course: "Arts",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "15",
      name: "Francis",
      username: "franc_",
      course: "Environmental Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "16",
      name: "Nicholas",
      username: "fanta",
      course: "Electrical Engieering",
      profilePhoto: "",
      bio: "",
      events: 45,
      followers: 6005,
      friends: 18,
    },
    {
      Id: "17",
      name: "Bless",
      username: "_blessed",
      course: "Physics",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "18",
      name: "Eddy",
      username: "_ed",
      course: "Environmental Science",
      profilePhoto: "",
      bio: "",
      events: 25,
      followers: 1205,
      friends: 178,
    },
    {
      Id: "19",
      name: "Kwame Young",
      username: "kwame_y",
      course: "Political Science",
      profilePhoto: "",
      bio: "",
      events: 5,
      followers: 55,
      friends: 78,
    },
    {
      Id: "20",
      name: "Allan Jackson",
      username: "AJ",
      course: "Graphic Design",
      profilePhoto: "",
      bio: "",
      events: 59,
      followers: 5235,
      friends: 78,
    },
    {
      Id: "21",
      name: "Nana Ama",
      username: "dr.ama",
      course: "Doctor of Optometry",
      profilePhoto: "",
      bio: "",
      events: 5,
      followers: 3455,
      friends: 378,
    },
    {
      Id: "22",
      name: "David Baah",
      username: "coder",
      course: "Computer Science",
      profilePhoto: "",
      bio: "",
      events: 5,
      followers: 55,
      friends: 78,
    },
    {
      Id: "23",
      name: "Jack Jackson",
      username: "jack_jack",
      course: "Biological Science",
      profilePhoto: "",
      bio: "",
      events: 65,
      followers: 285,
      friends: 378,
    },
  ];

  useEffect(() => {
    // let dataArray = [
    //   {
    //     Id: "CX57HWBexMQhtXgrMEOPAHLX4pb2",
    //     name: "Kpodo Winner",
    //     username: "meet.winner",
    //     course: "Computer Science",
    //     profilePhoto: "",
    //     bio: "Here for fun and to make friends. Feel free to add me",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "2",
    //     name: "Nana Agyemang",
    //     username: "nana10",
    //     course: "Computer Science",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "m5OqpcsZpTfXJFi6JPUe96KojT72",
    //     name: "Worla",
    //     username: "nworla_xx",
    //     course: "Chemical Enginnering",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "FtghNEDM4tMVhhi2rKcLM0y1IWr1",
    //     name: "MR. Baah",
    //     username: "_baah",
    //     course: "Environmental Science",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "sEP2v3q29GdQV5Ftu0j8vEdNvrt1",
    //     name: "Mabel",
    //     username: "mabelll",
    //     course: "Computer Engineering",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 10,
    //     followers: 3000,
    //     friends: 30,
    //   },
    //   {
    //     Id: "5",
    //     name: "Obaapa Serwaa",
    //     username: "serwaaxx",
    //     course: "Fashion and Design",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 40,
    //     followers: 2980,
    //     friends: 45,
    //   },
    //   {
    //     Id: "6",
    //     name: "Abraham",
    //     username: "father_AB",
    //     course: "Chinese",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 300,
    //     followers: 1087,
    //     friends: 90,
    //   },
    //   {
    //     Id: "Jrm1Yww89UMFl4BpVjCWiRv1Eg93",
    //     name: "Aaron",
    //     username: "aaron",
    //     course: "Literature",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 20,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "8",
    //     name: "MR. Agyapong",
    //     username: "agyapong",
    //     course: "Environmental Science",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "9",
    //     name: "Elorm Ella",
    //     username: "elorm.e",
    //     course: "Petroleum Engineering",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 4000,
    //     friends: 178,
    //   },
    //   {
    //     Id: "ORq4Crm54sSXQ8Z729qPo4hjpFv2",
    //     name: "Godfriend",
    //     username: "goddey",
    //     course: "Mathematics",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 3205,
    //     friends: 168,
    //   },
    //   {
    //     Id: "iy58nSPjX1SjcAbtnLAhQymSYyv2",
    //     name: "Azu Joshua",
    //     username: "_subway",
    //     course: "Pharmacy",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 15,
    //     followers: 5205,
    //     friends: 18,
    //   },
    //   {
    //     Id: "zqGaB4ahauhUfwbs6LlMI7iIwji2",
    //     name: "Kelvin",
    //     username: "savage",
    //     course: "Business Administraton",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "0uZRvgU6nANqpQOs7ollhJW2syf2",
    //     name: "Tiana",
    //     username: "tiana_xx",
    //     course: "Marine Engineering",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "UjPX0Qg6OJZm0Z0HJD77d0LiWPz1",
    //     name: "Nadine",
    //     username: "ms_nadine",
    //     course: "Arts",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "15",
    //     name: "Francis",
    //     username: "franc_",
    //     course: "Environmental Science",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "16",
    //     name: "Nicholas",
    //     username: "fanta",
    //     course: "Electrical Engieering",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 45,
    //     followers: 6005,
    //     friends: 18,
    //   },
    //   {
    //     Id: "17",
    //     name: "Bless",
    //     username: "_blessed",
    //     course: "Physics",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "18",
    //     name: "Eddy",
    //     username: "_ed",
    //     course: "Environmental Science",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 25,
    //     followers: 1205,
    //     friends: 178,
    //   },
    //   {
    //     Id: "19",
    //     name: "Kwame Young",
    //     username: "kwame_y",
    //     course: "Political Science",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 5,
    //     followers: 55,
    //     friends: 78,
    //   },
    //   {
    //     Id: "20",
    //     name: "Allan Jackson",
    //     username: "AJ",
    //     course: "Graphic Design",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 59,
    //     followers: 5235,
    //     friends: 78,
    //   },
    //   {
    //     Id: "21",
    //     name: "Nana Ama",
    //     username: "dr.ama",
    //     course: "Doctor of Optometry",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 5,
    //     followers: 3455,
    //     friends: 378,
    //   },
    //   {
    //     Id: "22",
    //     name: "David Baah",
    //     username: "coder",
    //     course: "Computer Science",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 5,
    //     followers: 55,
    //     friends: 78,
    //   },
    //   {
    //     Id: "23",
    //     name: "Jack Jackson",
    //     username: "jack_jack",
    //     course: "Biological Science",
    //     profilePhoto: "",
    //     bio: "",
    //     events: 65,
    //     followers: 285,
    //     friends: 378,
    //   },
    // ];
    // let data = dataArray.find((e) => e.Id == userId);
    // setData(data);
  }, []);

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
          <Chats name={dataArray.at(0).name} />
          <Chats name={dataArray.at(1).name} />
          <Chats name={dataArray.at(2).name} />
          <Chats name={dataArray.at(3).name} />
          <Chats name={dataArray.at(4).name} />
          <Chats name={dataArray.at(5).name} />
          <Chats name={dataArray.at(6).name} />
          <Chats name={dataArray.at(7).name} />
          <Chats name={dataArray.at(8).name} />
          <Chats name={dataArray.at(9).name} />
          <Chats name={dataArray.at(10).name} />
          <Chats name={dataArray.at(11).name} />
          <Chats name={dataArray.at(12).name} />
          <Chats name={dataArray.at(13).name} />
          <Chats name={dataArray.at(14).name} />
          <Chats name={dataArray.at(15).name} />
          <Chats name={dataArray.at(16).name} />
          <Chats name={dataArray.at(17).name} />
          <Chats name={dataArray.at(18).name} />
          <Chats name={dataArray.at(19).name} />
          <Chats name={dataArray.at(20).name} />
          <Chats name={dataArray.at(21).name} />
          <Chats name={dataArray.at(22).name} />
          <Chats name={dataArray.at(23).name} />
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
