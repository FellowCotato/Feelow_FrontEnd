import React, { useEffect, useRef } from "react";
import {
  CharacterWrapper,
  ChatSummary,
  CloseButton,
  ContentBox,
  ContentWrapper,
  // Feelow,
  Horizon,
  ModalBackground,
  ModalBox,
  ModalHeader,
  ModalOverlay,
  TextWrapper,
  TodayWord,
} from "./styles";
import { ReactComponent as FeelowCharacter } from "../../../assets/feelow_character.svg";

const content = {
  summary: "시험을 망침. 필로우가 위로해줌. 다음에 더 잘해야겠다고 다짐함.",
  todayWord: "“수고했어, 힘내!!”",
};

const CalendarModal = ({ modalOpen, setModalOpen, date }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [modalRef]);

  if (!modalOpen) {
    return <></>;
  }

  console.log(date);

  return (
    <ModalOverlay>
      <ModalBackground ref={modalRef}>
        <ModalBox>
          <CloseButton onClick={() => setModalOpen(false)} />
          <ModalHeader>
            {date.getMonth() + 1}/{date.getDate()}
          </ModalHeader>
          <ContentWrapper>
            <ContentBox>
              <CharacterWrapper>
                <FeelowCharacter />
              </CharacterWrapper>
              <TextWrapper>
                <ChatSummary>
                  <h5>대화 내용 요약</h5>
                  <p>{content.summary}</p>
                </ChatSummary>
                <Horizon />
                <TodayWord>
                  <h5>오늘의 한마디</h5>
                  <p>{content.todayWord}</p>
                </TodayWord>
              </TextWrapper>
            </ContentBox>
          </ContentWrapper>
        </ModalBox>
      </ModalBackground>
    </ModalOverlay>
  );
};

export default CalendarModal;
