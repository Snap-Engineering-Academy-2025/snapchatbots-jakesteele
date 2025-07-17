import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
// import { createAnimatedPropAdapter } from "react-native-reanimated";
const CHATBOT_USER_OBJ = {
  _id: 2,
  name: "React Native Chatbot",
  avatar: "https://loremflickr.com/140/140",
};
const triviaQuestions = [
  {
    id: "Who pays monthly for a KPOP star to send her messages everyday?",
    answer: "Tsering",
  },
  {
    id: "What type of work did jake used to do?",
    answer: "Farming",
  },
  {
    id: "Who likes the blue sun chips?",
    answer: "Baker",
  },
  {
    id: "Who's favorite food is mac and cheese?",
    answer: "Elijah",
  },
  {
    id: "Who's favorite food saltine crackers?",
    answer: "Chanho",
  },
  {
    id: "Who's is Ascendant in Valorant (but shouldn't be)?",
    answer: "Adan",
  },
  {
    id: "Who went to Harvard for their pre-med requirements?",
    answer: "Alexis",
  },
  {
    id: "What type of dog does Cindy have?",
    answer: "Mini schnauzer",
  },
  {
    id: "Who does ballet and loves musicals?",
    answer: "Jo",
  },
  {
    id: "Who went out instead of doing their project?",
    answer: "Danny",
  },
  {
    id: "Who is trying to compete in a surfing competition?",
    answer: "Nicole",
  },
  {
    id: "Who drives a green beetle?",
    answer: "Ricardo",
  },
  {
    id: "Who's favorite team is the 49er's?",
    answer: "Alejandro",
  },
  {
    id: "Who has a hair dresser license?",
    answer: "Christine",
  },
  {
    id: "Who rarely gives restraunts 10/10's?",
    answer: "Tiffanie",
  },
  {
    id: "Who loves hot pockets?",
    answer: "Gev",
  },
];
export default function VanessaChatBot() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (messages.length < 1) {
      // Add a "starting message" when chat UI first loads
      addBotMessage(
        "Hello, welcome to simple trivia! Say 'Ready' when you're ready to play!"
      );
    }
  }, []);
  const addNewMessage = (newMessages) => {
    setMessages((previousMessages) => {
      // console.log("PREVIOUS MESSAGES:", previousMessages);
      // console.log("NEW MESSAGE:", newMessages);
      return GiftedChat.append(previousMessages, newMessages);
    });
  };
  const addBotMessage = (text) => {
    addNewMessage([
      {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        user: CHATBOT_USER_OBJ,
      },
    ]);
  };
  const respondToUser = (userMessages) => {
    console.log("Recent user msg:", userMessages[0].text);
    // while (question <= triviaQuestions.length)
    if (question == 0) {
      if (userMessages[0].text.toLowerCase() == "ready") {
        addBotMessage(triviaQuestions[0].id);
        setQuestion(1);
      } else {
        addBotMessage(
          "Hello, welcome to simple trivia! Say 'Ready' when you're ready to play"
        );
      }
    }
    if (question > 0 && question < triviaQuestions.length)
      if (userMessages[0].text == triviaQuestions[question - 1].answer) {
        addBotMessage("You're right!!  :)");
        let newCount = score;
        newCount++;
        setScore(newCount);
        console.log(score);
        setQuestion(question + 1);
        addBotMessage(triviaQuestions[question].id);
      } else {
        addBotMessage("ERRR WRONG! Try again!");
        // addBotMessage(triviaQuestions[question].id);
      }
    if (question == triviaQuestions.length)
      if (
        userMessages[0].text.toLowerCase() ==
        triviaQuestions[question - 1].answer
      ) {
        addBotMessage("You're right!!");
        addBotMessage("GAME OVER  Score: " + score);
      } else {
        addBotMessage("ERRR WRONG! Try again!");
      }
  };
  const onSend = useCallback((messages = []) => {
    addNewMessage(messages);
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages);
        // Wait a sec before responding
        setTimeout(() => respondToUser(messages), 1000);
      }}
      user={{
        _id: 1,
        name: "Chilla",
      }}
      renderUsernameOnMessage={true}
    />
  );
}
// Workaround to hide an unnessary warning about defaultProps
const error = console.error;
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};
