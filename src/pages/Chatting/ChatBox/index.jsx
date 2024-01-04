import React, { useCallback, useState } from "react";
import { FormContainer, Form, SendButton, TextArea } from "./styles";
import chat_button from "../../../assets/chat_button.svg";

/*
전송버튼 위치 조절 (1920 1080 기준으로 밑으로)
버튼 왼쪽으로 쫌 더 이동
*/

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
        {
          id: messageId + 1,
          sender: "bot",
          content: "waiting",
        },
      ]);
      setMessageId(messageId + 2);
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
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <TextArea
          id="chat-text"
          value={chat}
          onChange={onChangeChat}
          onKeyDown={onKeydownChat}
          placeholder="채팅을 입력하세요."
        />
        <SendButton type="submit" disabled={!chat?.trim()}>
          <img src={chat_button} alt="send-button" />
        </SendButton>
      </Form>
    </FormContainer>
  );
};

export default ChatBox;
