import React from "react";
import {
  ChatContainer,
  ChatContentContainer,
  ChatContent,
  ChatAnimation,
  FeelowCharacter,
} from "./styles";

const Chat = ({ message }) => {
  const sender = message.sender;

  return (
    <ChatContainer sender={sender}>
      {sender === "bot" ? (
        <>
          <FeelowCharacter width={68} height={88} />
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
