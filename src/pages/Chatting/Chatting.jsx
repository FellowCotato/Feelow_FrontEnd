import React, { useState } from "react";
import { ChattingWrapper, ChattingContainer, ButtonContainer, Button } from "./styles";
import { LogoName } from "../addition/style";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import point_img from "../../assets/point_img.svg";
import store_img from "../../assets/store_img.svg";
import profile_img from "../../assets/profile_img.svg";
import calendar_img from "../../assets/calendar_img.svg";

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
      <LogoName>Feelow</LogoName>
      <ChattingContainer>
        <ButtonContainer>
          <Button position="left">
            <img src={point_img} alt="point" />
          </Button>
          <Button position="left">
            <img src={store_img} alt="store" />
          </Button>
          <Button position="right">
            <img src={profile_img} alt="profil" />
          </Button>
          <Button position="right">
            <img src={calendar_img} alt="calendar" />
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
