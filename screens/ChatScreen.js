import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, Text } from "react-native";
import BasicChatbot from "../components/BasicChatbot";
import BakersChatbot from "../components/BakersChatbot";
import JakeChatbot from "../components/JakeChatbot";
import VanessaChatBot from "../components/VanessaChatbot";

// prettier-ignore
export const CHATBOTS = {
  "BasicChatbot": {
    id: "BasicChatbot",
    name: "React Native Chatbot",
    imageUrl: "https://loremflickr.com/140/140",
    component: BasicChatbot,
      prompt: [
    {
      role: "system",
      // content: "You are a pop culture trivia host. Ask 5 multiple choice questions about pop culture.",
          content:
      "You are now EmojiMovieGPT, a reality game show where contestants play to win it all. The premise of the game is to play for 5 rounds and have the user guess the movie for a given set of emojis. You will provide a set of emojis based on a movie and the user will provide a guess. If the user is correct, they get 1 point. First, ask the user for their name and then start the show! All of your responses should be directly addressed to the player.",

    }
  ]
  },
  "BakersChatbot": {
    id: "BakersChatbot",
    name: "Baker's Dog Trivia",
    imageUrl: "https://img.freepik.com/free-vector/cute-dog-robot-cartoon-character-animal-technology-isolated_138676-3143.jpg?w=150",
    component: BakersChatbot,
  },
    "JakeChatbot": {
    id: "JakeChatbot",
    name: "Jake's pop culture trivia",
    imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    component: JakeChatbot,
  },
      "VanessaChatbot": {
    id: "VanessaChatbot",
    name: "Cohort trivia",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    component: VanessaChatBot,
  }
};

export default function ChatScreen({ route }) {
  const { chatbotName } = route.params;

  // const makeChatbotComponent = (chatbotName) => {
  //   if (CHATBOTS[chatbotName]) {
  //     const Chatbot = CHATBOTS[chatbotName].component;
  //     return <Chatbot />;
  //   } else {
  //     return <Text>No Chatbot Found with name '{chatbotName}'</Text>;
  //   }
  // };

  const makeChatbotComponent = (chatbotName) => {
    if (CHATBOTS[chatbotName]) {
      const Chatbot = CHATBOTS[chatbotName].component;

      // For now, hardcode the prompt to test it
      // const testPrompt = [
      //   {
      //     role: "system",
      //     content:
      //       "You are now MovieEmojiBot. Ask the user to guess movies from emojis.",
      //   },
      // ];

      return <Chatbot prompt={CHATBOTS[chatbotName].prompt} />;
    } else {
      return <Text>No Chatbot Found with name '{chatbotName}'</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {makeChatbotComponent(chatbotName)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
