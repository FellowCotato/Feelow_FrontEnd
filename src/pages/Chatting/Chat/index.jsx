import React from "react";
import feelow_character from "../../../assets/feelow_character.png";
import { BotImg, ChatContainer, ChatContentContainer, ChatContent, ChatAnimation } from "./styles";

/*
유저의 채팅 배경 색 변경
유저 프로필은 수정 될지도
*/

const Chat = ({ message }) => {
  const sender = message.sender;

  return (
    <ChatContainer sender={sender}>
      {sender === "bot" ? (
        <>
          <BotImg src={feelow_character} alt="bot-character" />
          <ChatContentContainer background="#F7F0EA">
            {message.content ? (
              <ChatContent color="#2c2c2c">{message.content}</ChatContent>
            ) : (
              <>
                <ChatAnimation width="8px" height="8px" scale="1.5" />
                <ChatAnimation width="12px" height="12px" scale="0.5" />
                <ChatAnimation width="8px" height="8px" scale="1.5" />
              </>
            )}
          </ChatContentContainer>
        </>
      ) : (
        <>
          <ChatContentContainer background="#809F80">
            <ChatContent color="#fff">{message.content}</ChatContent>
          </ChatContentContainer>
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
