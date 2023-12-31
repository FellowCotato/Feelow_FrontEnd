import React from "react";
import feelow_character from "../../../assets/feelow_character.png";
import {
  BotImg,
  ChatContainer,
  UserCircle,
  UserName,
  ChatContentContainer,
  ChatContent,
} from "./styles";

const Chat = ({ message }) => {
  const isBot = message.sender === "bot";

  const profile = isBot ? (
    <BotImg src={feelow_character} alt="bot-character" />
  ) : (
    <UserCircle>
      <UserName>{message.sender}</UserName>
    </UserCircle>
  );

  return (
    <ChatContainer isBot={isBot}>
      {isBot ? (
        <>
          {profile}
          <ChatContentContainer>
            <ChatContent>{message.content}</ChatContent>
          </ChatContentContainer>
        </>
      ) : (
        <>
          <ChatContentContainer>
            <ChatContent>{message.content}</ChatContent>
          </ChatContentContainer>
          {profile}
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
