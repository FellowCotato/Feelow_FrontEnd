import React, { useEffect, useState, useRef } from "react";
import { ChattingWrapper, ChattingContainer } from "./styles";
import Header from "../../layouts/Header";
import ButtonBox from "../../layouts/ButtonBox";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import CottonAlarm from "./CottonAlarm";
import CottonModal from "./CottonModal";

/*
button 컴포넌트로 분히라 것
button에서 액티브 되는거 어떻게 구분되는지
데스크탑 화면에서는 채팅중에 검은색인데, 이게 비활성 상태에 대한 구분
*/

// 임시 데이터 타입
const user = { name: "냠냠", cotton: 0 };
const initialContent = ["제일 좋아하는 색깔이 뭐야?", "오늘 하루는 어땠어?", "오늘 급식은 먹었어?"];

const Chatting = () => {
  const [isCottonAlarmOpen, setIsCottonAlarmOpen] = useState(false);
  const [isCottoModalOpen, setIsCottonModalOpen] = useState(false);
  const [isStoreActive, setIsStoreActive] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [isCalendarActive, setIsCalendarActive] = useState(false);

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

    // 채팅 페이지에 진입시 모든 버튼 비활성화
    setIsStoreActive(false);
    setIsProfileActive(false);
    setIsCalendarActive(false);
  }, []);

  const scrollRef = useRef(null);

  return (
    <ChattingWrapper>
      <Header />
      <ButtonBox
        cottonCount={user.cotton}
        isStoreActive={isStoreActive}
        setIsStoreActive={setIsStoreActive}
        isProfileActive={isProfileActive}
        setIsProfileActive={setIsProfileActive}
        isCalendarActive={isCalendarActive}
        setIsCalendarActive={setIsCalendarActive}
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
