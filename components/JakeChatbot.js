import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const CHATBOT_USER_OBJ = {
  _id: 2,
  name: "Jake's Blasphemous Chatbot",
  avatar: "https://loremflickr.com/140/140",
};

export default function JakeChatbot() {
  const [messages, setMessages] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  // let questions = [
  //   "What is the airspeed velocity of an unladen swallow?",
  //   "Why is a raven like a writing desk?",
  //   "What is the meaning of life, the universe, and everything?",
  //   "Do androids dream of electric sheep?",
  //   "If a tree falls in a forest and no one is around to hear it, does it make a sound?",
  //   "Is the Pope Catholic?",
  // ];
  // let answers = [
  //   "African or European?",
  //   "Uhhh",
  //   "42",
  //   "Yes",
  //   "Hell no",
  //   "Does a bear shit in the woods?",
  // ];

  const trivia = [
    {
      question: "What is the airspeed velocity of an unladen swallow?",
      answer: "African or European?",
    },
    {
      question: "Why is a raven like a writing desk?",
      answer: "Uhhh",
    },
    {
      question: "What is the meaning of life, the universe, and everything?",
      answer: "42",
    },
    {
      question: "Do androids dream of electric sheep?",
      answer: "Yes",
    },
    {
      question:
        "If a tree falls in a forest and no one is around to hear it, does it make a sound?",
      answer: "Hell no",
    },
    {
      question: "Is the Pope Catholic?",
      answer: "Does a bear shit in the woods?",
    },
  ];

  useEffect(() => {
    // console.log("Test printout Jakey");
    if (messages.length < 1) {
      // Add a "starting message" when chat UI first loads
      addBotMessage(
        "Hello, welcome to simple trivia! Say 'Yes' when you're ready to play!"
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

  const respondToUserHelper = (userMessages, questionNumber) => {
    //to do : add the initial message to the trivia array
    if (questionNumber === 0) {
      if (userMessages[0].text === "Yes") {
        addBotMessage(trivia[questionNumber].question);
        setQuestionNumber(1);
      } else
        addBotMessage(
          "Hello, welcome to simple trivia! Say 'Yes' when you're ready to play!"
        );
    } else if (questionNumber === 6) {
      if (userMessages[0].text === trivia[questionNumber - 1].answer) {
        let newScore = playerScore + 1;
        setPlayerScore(newScore);
        addBotMessage(
          "Nice! That was the right answer. Here is your final point total: " +
            newScore +
            ".  No more questions! Go touch grass!"
        );
      } else {
        addBotMessage(
          "BONK! That was wrong. Here is your final point total: " +
            playerScore +
            ".  No more questions! Go touch grass!"
        );
      }
      setQuestionNumber(0);
    } else {
      if (userMessages[0].text === trivia[questionNumber - 1].answer) {
        let newScore = playerScore + 1;
        setPlayerScore(newScore);
        addBotMessage(
          "Nice! That was the right answer. You now have this many points: " +
            newScore +
            ". Now, we will move on to question " +
            questionNumber +
            ". " +
            trivia[questionNumber].question
        );
      } else {
        addBotMessage(
          "BONK! Moving on to question " +
            questionNumber +
            ". " +
            trivia[questionNumber].question
        );
      }
      setQuestionNumber(questionNumber + 1);
    }
  };

  const respondToUser = (userMessages) => {
    respondToUserHelper(userMessages, questionNumber);
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
