import React, { useEffect, useState, useRef } from "react";
import { ChattingWrapper, ChattingContainer } from "./styles";
import Header from "../../layouts/Header";
import ButtonBox from "../../layouts/ButtonBox";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import CottonAlarm from "./CottonAlarm";
import CottonModal from "./CottonModal";

// 임시 데이터 타입
const user = { name: "냠냠", cotton: 0 };
const initialContent = ["제일 좋아하는 색깔이 뭐야?", "오늘 하루는 어땠어?", "오늘 급식은 먹었어?"];

const Chatting = () => {
  const [isCottonAlarmOpen, setIsCottonAlarmOpen] = useState(false);
  const [isCottoModalOpen, setIsCottonModalOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 0,
      sender: "bot",
      content: `안녕 ${user.name}야~! ${initialContent[Math.floor(Math.random() * 3)]}`,
    },
  ]);
  const [messageId, setMessageId] = useState(1);

  useEffect(() => {
    // 오늘 최초 접촉인면 then
    setIsCottonAlarmOpen(true);
  }, []);

  const scrollRef = useRef(null);

  return (
    <ChattingWrapper>
      <Header />
      <ButtonBox
        cottonCount={user.cotton}
        page="chatting"
        setIsCottonModalOpen={setIsCottonModalOpen}
      />
      <ChattingContainer>
        <ChatList messages={messages} ref={scrollRef} />
        <ChatBox
          user={user}
          messages={messages}
          setMessages={setMessages}
          messageId={messageId}
          setMessageId={setMessageId}
        />
      </ChattingContainer>
      <CottonAlarm isOpen={isCottonAlarmOpen} setAlarmOpen={setIsCottonAlarmOpen} />
      <CottonModal isOpen={isCottoModalOpen} setModalOpen={setIsCottonModalOpen} />
    </ChattingWrapper>
  );
};

export default Chatting;
