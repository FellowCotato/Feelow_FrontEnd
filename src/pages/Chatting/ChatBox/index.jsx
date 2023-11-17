import React, { useCallback, useState } from "react";
import { Form, SendButton, TextArea } from "./styles";
import chatButton from "../../../assets/chatButton.svg";

const ChatBox = ({ user, messages, setMessages, messageId, setMessageId }) => {
  const [chat, setChat] = useState("");

  const onChangeChat = useCallback((e) => {
    setChat(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setMessages([
        ...messages,
        {
          id: messageId,
          sender: user.name,
          content: chat,
        },
      ]);
      setMessageId(messageId + 1);
      setChat("");
    },
    [chat, messages, messageId],
  );

  const onKeydownChat = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey && chat.trim() && !e.nativeEvent.isComposing) {
        onSubmit(e);
      }
    },
    [onSubmit, chat],
  );

  return (
    <Form onSubmit={onSubmit}>
      <TextArea
        id="chat-text"
        value={chat}
        onChange={onChangeChat}
        onKeyDown={onKeydownChat}
        placeholder="채팅을 입력하세요."
      />
      <SendButton type="submit" disabled={!chat?.trim()}>
        <img src={chatButton} alt="send-button" />
      </SendButton>
    </Form>
  );
};

export default ChatBox;
