import React, { useState } from "react";
import Header from "../../layouts/Header/Header";
import { ChattingWrapper, ChattingContainer, ButtonContainer, Button } from "./styles";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import pointImg from "../../assets/pointImg.svg";
import storeImg from "../../assets/storeImg.svg";
import profileImg from "../../assets/profileImg.svg";
import calendarImg from "../../assets/calendarImg.svg";

/*
// eslint-disable <- eslint 무시 설정
*/

const Chatting = () => {
  const [user] = useState({
    name: "냠냠",
  });
  const [messages, setMessages] = useState([
    {
      id: 0,
      sender: "bot",
      content: `안녕 ${user.name}야~! 오늘 하루는 어땠어?`,
    },
  ]);
  const [messageId, setMessageId] = useState(1);

  return (
    <ChattingWrapper>
      <Header />
      <ChattingContainer>
        <ButtonContainer>
          <Button position="left">
            <img src={pointImg} alt="point" />
          </Button>
          <Button position="left">
            <img src={storeImg} alt="store" />
          </Button>
          <Button position="right">
            <img src={profileImg} alt="profil" />
          </Button>
          <Button position="right">
            <img src={calendarImg} alt="calendar" />
          </Button>
        </ButtonContainer>
        <ChatList messages={messages} />
        <ChatBox
          user={user}
          messages={messages}
          setMessages={setMessages}
          messageId={messageId}
          setMessageId={setMessageId}
        />
      </ChattingContainer>
    </ChattingWrapper>
  );
};

export default Chatting;
