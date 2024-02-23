import React, { useCallback, useState } from "react";
import { FormContainer, Form, SendButton, TextArea } from "./styles";
import chat_button from "../../../assets/chat_button.svg";
import api from "../../../utils/api";
import dayjs from "dayjs";

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

      api
        .post(`/api/chat/${localStorage.getItem("memberId")}/${dayjs().format("YYYY-MM-DD")}`, {
          input: chat,
        })
        .then((res) => {
          const reply = res.data.response;
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
              content: reply,
            },
          ]);
        })
        .catch((err) => console.error(err));

      setChat("");
      setMessageId(messageId + 2);
    },
    [chat, user, messages, messageId],
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
