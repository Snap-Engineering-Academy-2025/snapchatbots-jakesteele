import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";

import { getChat } from "../utils/getChatGPT";

const CHATBOT_USER_OBJ = {
  _id: 2,
  name: "React Native Chatbot",
  avatar: "https://loremflickr.com/140/140",
};

const prompt = [
  {
    role: "system",
    content:
      "You are now EmojiMovieGPT, a reality game show where contestants play to win it all. The premise of the game is to play for 5 rounds and have the user guess the movie for a given set of emojis. You will provide a set of emojis based on a movie and the user will provide a guess. If the user is correct, they get 1 point. First, ask the user for their name and then start the show! All of your responses should be directly addressed to the player.",
  },
];

export default function BasicChatbot() {
  const [messages, setMessages] = useState([]);

  async function fetchInitialMessage() {
    const response = await getChat(prompt);

    const message = response.choices[0].message;

    console.log("message: ", message);
    const content = response.choices[0].message.content;
    console.log("content: ", content);

    addBotMessage(content);
  }

  async function fetchNextMessage(messageLog) {
    /// oooo ho ho.. does get chat just want a single prompt?
    //no
    const response = await getChat(messageLog);

    const message = response.choices[0].message;

    console.log("FROM fetchNextMessage message: ", message);
    const content = response.choices[0].message.content;
    console.log("FROM fetchNextMessage content: ", content);

    addBotMessage(content);
  }

  useEffect(() => {
    //possible FIX ME: maybe this fetchInitialMessage should be in another useEffect

    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Hello, welcome to simple trivia! Say 'Yes' when you're ready to play!",
    //     createdAt: new Date(),
    //     user: CHATBOT_USER_OBJ,
    //   },
    // ]);

    fetchInitialMessage();
  }, []);

  const addNewMessage = (newMessages) => {
    //I think here I want to map through previous messges to the correct format
    //also (I think) change format of newMessages
    //ok, maybe not...
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
    console.log("!!!!!!!HELLOOOOO WORLD!!!!!");
    console.log("User message text:", userMessages[0].text);

    // Simple chatbot logic (aka Checkpoint 2 onwards) here!

    //mapping to make formatted messages
    tempFormattedMessages = [];
    // tempFormattedMessages = userMessages.map((entry) => {
    tempFormattedMessages = messages.map((entry) => {
      // const role = entry.user._id === 1 ? "assistant" : "user";
      const role = entry.user._id === 1 ? "user" : "assistant";

      const content = entry.text;

      return {
        role: role,
        content: content,
      };

      //now add the latest userMessage
      //but wait - is the original userMessage already formatted???

      // return; //something
    });

    const allFormattedMessages = [
      {
        role: "user",
        content: userMessages[0].text,
      },
      ...tempFormattedMessages,
      // prompt,
    ];

    console.log("tempFormattedMessages: ", tempFormattedMessages);
    console.log("allFormattedMessages: ", allFormattedMessages);

    //JAKE YOU ARE WORKING HERE
    allFormattedMessages.reverse();
    // addBotMessage("I am da response!");
    fetchNextMessage(allFormattedMessages);
    // addBotMessage(fetchNextMessage(allFormattedMessages));
    //++++++++++++++
    //I THINK THAT IT DOES NOT LIKE THE BACKWARD ARRAY!!!!
    //++++++++++++++
  };

  const onSend = useCallback((messages = []) => {
    addNewMessage(messages);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages);
        setTimeout(() => respondToUser(messages), 1000);
      }}
      user={{
        _id: 1,
        name: "Baker",
      }}
      renderUsernameOnMessage={true}
    />
  );
}
