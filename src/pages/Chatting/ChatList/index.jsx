import React from "react";
import { ChatZone } from "./styles";
import Chat from "../Chat";

const ChatList = ({ messages }) => {
  return (
    <ChatZone>
      {messages.map((message) => (
        <Chat key={message.id} message={message} />
      ))}
    </ChatZone>
  );
};

export default ChatList;
