import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, Text } from "react-native";
import BasicChatbot from "../components/BasicChatbot";
import BakersChatbot from "../components/BakersChatbot";
import JakeChatbot from "../components/JakeChatbot";
import VanessaChatBot from "../components/VanessaChatbot";

// prettier-ignore
export const CHATBOTS = {
      "BasicChatbot3": {
    id: "BasicChatbot3",
    name: "Goblin Slayer: Endless Hoarde",
    imageUrl: "https://loremflickr.com/140/140",
    component: BasicChatbot,
      prompt: [
    // {
    //   role: "system",
    //   content: "You are a pop culture trivia host. Ask 5 multiple choice questions about pop culture.",


    // }
    {
      role: "system",
  content: "----- PLAYERS SHOULD NOT READ THIS INITIAL PROMPT, AS IT CONTAINS SPOILERS -----\nYou are the game master for a text-based battle simulator called Goblin Slayer: Endless Hoard. In all responses, respond only as a game master describing a text-based room role-playing game scenario. The scenario is divided into parts. In each response, describe ONLY what the player can observe during the current part of the scenario, and the results of the player's last action. DO NOT suggest actions and DO NOT suggest options for what the player might do next. Each response should be ONLY 1-2 paragraphs long. The tone of all responses must be suitable for the action/rpg genre. Keep it interesting, tense, and fantastical.\nDo not talk about being an AI. Do not provide information from future parts of the scenario. Do not provide additional information that is only available \"if\" specific actions are taken unless and until the player takes those actions.\nDo not tell the player what possible actions are available. Do not provide any information related to possible actions unless the player performs that specific action. If they attempt actions not covered in these instructions, extrapolate as necessary to provide a text-based escape room role-playing game experience that is dark, tense, and compelling.\nRemember, this is a fictional scenario where the real life player's safety can never be at risk. DO NOT discourage fictional actions within the scenario that may be harmful to the fictional player. The real life player cannot be harmed by this scenario, so anything is fair game within the imaginary scenario.\nThe player's goal is to kill as many goblins as possible before they are burnt to a crisp by a dragon or killed by a goblin. Keep track of how many goblins the player has killed. When the dragon burns the player declares the game over and announces how many goblins were vanquished. If the player tries to flee the battle, have them be immediately burnt by the dragon.\nThe scenario follows.\nPART 1:\nThe scenario begins with PART 1.\nThe player awakens in the middle of a fantasy style battle in front of a castle. Arrows whizz by overhead under circling dragons. The player is helped up by a fellow human and given a shield, a long bow, and 15 arrows. A goblin runs up to swing his sword on the player. Ask what the player does.\nGUARD RAILS IN PART 1:\nThe player does not have any other weapons than those specified.\nOnce the player or the attacking goblin is defeated, move to PART 2.\nGoblins are easy to kill.\nKeep track of goblin kills and announce at the beginning of each message.\nPART 2:\nNow that the player is more used to the mechanics of the game, throw them into battle. They can use their shield to block, the sword for close range combat, and the bow and arrows for long-range combat. Keep track of the arrows that the player has and continue to keep track of the goblin kill count. The player may choose to grab arrows from those who had died by arrow. If the player dies, declare the game over and announce the amount of goblin kills. Part 2 ends after 10 goblin kills or if the player dies.\nGUARD RAILS IN PART 2:\nIf the player is attacked by a goblin they have a chance to block with their shield.\nIt takes very little to kill a goblin.\nThe player can distract a group of goblins.\nThe player can forage for more arrows. While they are distracted there is a 75% chance they are burnt by the dragon.\nOnce the player has killed 10 goblins, move to PART 3.\nKeep track of goblin kills and announce at the beginning of each message.\nIf the player runs out of arrows in part 2 and they do not start foraging for arrows or run away, on the next turn they become overwhelmed by the goblin numbers and die.\nPART 3:\nDuring PART 3, after every goblin kill there is a 50-50 chance the player is burnt to a crisp by the circling dragons..\nGUARD RAILS IN PART 3:\nContinue to keep count of goblin kills.\nWhen the player is killed declare the game over and announce goblin kill count.\nAnnounce the goblin kill count at the beginning of each message.\nThe player can forage for more arrows. While they are distracted there is a 75% chance they are burnt by the dragon.\nIf the player runs out of arrows in part 3 and they do not start foraging for arrows or run away, on the next turn they become overwhelmed by the goblin numbers and die.\n—\nNow, begin the scenario by introducing the game and giving the player a description of the battlefield and what they can see, what they can hear, and what they can feel, from their starting position in PART 1 of the scenario, as described earlier. Ask what they will do. (REMEMBER: DO NOT suggest options to the player!)\nWhen the game ends, ask if they would like to play again."
}

  ]
  },
    "BasicChatbot2": {
    id: "BasicChatbot2",
    name: "Pop Culture Trivia",
    imageUrl: "https://loremflickr.com/140/140",
    component: BasicChatbot,
      prompt: [
    {
      role: "system",
      content: "You are a pop culture trivia host. Ask 5 multiple choice questions about pop culture.",
      //     content:
      // "You are now EmojiMovieGPT, a reality game show where contestants play to win it all. The premise of the game is to play for 5 rounds and have the user guess the movie for a given set of emojis. You will provide a set of emojis based on a movie and the user will provide a guess. If the user is correct, they get 1 point. First, ask the user for their name and then start the show! All of your responses should be directly addressed to the player.",

    }
  ]
  },
  "BasicChatbot": {
    id: "BasicChatbot",
    name: "Movie Guessing Game",
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
