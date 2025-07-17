import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Themes } from "../assets/Themes";
import { useNavigation } from "@react-navigation/native";

const DevNames = ({ DevNames }) => {
  return (
    <Text style={styles.devNames} numberOfLines={1}>
      {DevNames.map(({ name }) => `${name}`).join(", ")}
    </Text>
  );
};

const Chatbot = ({ index, imageUrl, botName, devNames, albumName }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ChatScreen", {
          // this is a "quick and dirty" hack for the moment, we'll want to rename our properties later
          chatbotName: albumName,
        })
      }
    >
      <View style={styles.chat}>
        <Text style={styles.index}>{index + 1}</Text>
        <Image
          style={[styles.image, styles.albumCover]}
          source={{ uri: imageUrl }}
        />
        <View style={styles.devNameContainer}>
          <Text style={[styles.botName]} numberOfLines={1}>
            {botName}
          </Text>
          <DevNames DevNames={devNames} />
        </View>
        {/* below not necessary but keeping in case of future desires */}
        {/* <Text style={[styles.albumName]} numberOfLines={1}>
          {albumName}
        </Text> */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chat: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
  },
  index: {
    color: Themes.colors.gray,
    flex: 0.05,
    textAlign: "center",
    fontSize: 12,
    margin: 1,
  },
  albumCover: {
    resizeMode: "contain",
    flex: 0.2,
    width: 50,
    height: 50,
  },
  devNameContainer: {
    flex: 0.4,
    margin: 5,
  },
  botName: {
    color: Themes.colors.white,
    fontSize: 12,
  },
  devNames: {
    color: Themes.colors.gray,
    fontSize: 12,
  },
  albumName: {
    color: Themes.colors.white,
    flex: 0.25,
    fontSize: 12,
    margin: 5,
  },
});

export default Chatbot;
