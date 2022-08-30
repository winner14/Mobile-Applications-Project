import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import DrawerBar from "./DrawerBar";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { getAuth } from "firebase/auth";

export default function Profile(props) {
  const [vNavModalOpen, setVNavModalOpen] = useState(false);
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [data, setData] = useState({});

  const userId = auth.currentUser.uid;

  useEffect(() => {
    let dataArray = [
      {
        Id: "CX57HWBexMQhtXgrMEOPAHLX4pb2",
        name: "Kpodo Winner",
        username: "meet.winner",
        course: "Computer Science",
        profilePhoto: "",
        bio: '"Here for fun and to make friends. Feel free to add me"',
        events: 25,
        followers: 1205,
        friends: 178,
      },
      {
        Id: "pHxFg4QNuPS5AqcEXYc228SXlXy2",
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
        Id: "FEjKhQ9bz3YZS4eFjvURn59rrfo2",
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
        Id: "mLrZD7uC1lM341JRjlQq5jUMwNJ2",
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
    let data = dataArray.find((e) => e.Id == userId);
    setData(data);
  }, []);

  return (
    <View style={styles.container}>
      <Modal visible={vNavModalOpen} animationType="" transparent>
        <DrawerBar back={setVNavModalOpen} />
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 5,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <TouchableOpacity style={styles.profileImage}>
            <Image
              source={require("../assets/prof.jpg")}
              style={styles.image}
              resizeMode="cover"
            ></Image>
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 25 }]}>
              {data.name}
            </Text>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 18 }]}>
              {data.course}
            </Text>
            <Text style={{ fontWeight: "200", fontSize: 13, marginTop: 8 }}>
              "{data.bio}"
            </Text>
          </View>
          <View style={styles.titleBar}>
            <TouchableOpacity style={{ flex: 0, margin: 5 }}>
              <Icon
                name="ellipsis-v"
                size={30}
                color="rgb(160, 90, 9)"
                // onPress={() => setModalOpen(true)}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>{data.events}</Text>
            <Text style={[styles.text, styles.subText]}>Events</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "rgba(206, 99, 11, 0.63)",
                borderLeftWidth: 1.2,
                borderRightWidth: 1.2,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>
              {data.followers}
            </Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>{data.friends}</Text>
            <Text style={[styles.text, styles.subText]}>Friends</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <Text style={styles.subText}>Public memories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mediaImageContainer}>
              <Image
                source={require("../assets/prof.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ flex: 1 }}>
          <Icon
            name="home"
            size={40}
            color="rgb(160, 90, 9)"
            onPress={() => navigation.navigate("home")}
          />
        </View>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("search")}
        >
          <Icon name="search" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Icon name="user-circle" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("notifications")}
        >
          <Icon name="bell-o" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 0 }}
          onPress={() => navigation.navigate("chat")}
        >
          <Icon name="envelope-o" size={35} color="rgb(160, 90, 9)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(243, 237, 232)",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
    margin: 10,
    marginTop: 0,
  },
  profileImage: {
    flex: 0,
    backgroundColor: "rgb(226, 214, 204)",
    width: 130,
    height: 130,
    borderRadius: 100,
    marginTop: 25,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    backgroundColor: "rgba(247, 245, 243)",
    width: 280,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 3,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  footer: {
    // flex: 1,
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
