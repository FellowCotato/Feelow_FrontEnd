import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  CharacterWrapper,
  ChatSummary,
  CloseBar,
  CloseButton,
  ContentBox,
  ContentWrapper,
  Horizon,
  ModalBackground,
  ModalBox,
  ModalHeader,
  ModalOverlay,
  TextWrapper,
  TodayWord,
} from "./styles";
import { ReactComponent as FeelowCharacter } from "../../../assets/feelow_character.svg";

const CalendarModal = ({ modalOpen, setModalOpen, date, historys }) => {
  const [initialPosition, setInitialPosition] = useState(0);
  const [positionOffset, setPositionOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsVisible(false);
        setTimeout(() => {
          setModalOpen(false);
          setPositionOffset(0);
          setInitialPosition(0);
          setIsVisible(true);
        }, 300);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [modalRef]);

  const handleTouchStart = useCallback((e) => {
    setInitialPosition(e.targetTouches[0].pageY);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      setPositionOffset(initialPosition - e.targetTouches[0].pageY);
    },
    [initialPosition],
  );

  const handleTouchEnd = useCallback(() => {
    if (positionOffset < -125) {
      setIsVisible(false);
      setTimeout(() => {
        setModalOpen(false);
        setPositionOffset(0);
        setInitialPosition(0);
        setIsVisible(true);
      }, 300);
    } else {
      setPositionOffset(0);
    }
  }, [positionOffset]);

  if (!modalOpen) {
    return <></>;
  }

  if (historys.find((history) => new Date(history.localDate).getDate() !== date.getDate())) {
    return <></>;
  }

  return (
    <ModalOverlay>
      <ModalBackground
        ref={modalRef}
        offset={positionOffset}
        visible={isVisible ? "visible" : "invisible"}
      >
        <ModalBox>
          <CloseButton onClick={() => setModalOpen(false)} />
          <CloseBar
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
          <ModalHeader>
            {date.getMonth() + 1}/{date.getDate()}
          </ModalHeader>
          <ContentWrapper>
            <ContentBox>
              <CharacterWrapper>
                <FeelowCharacter width="132" height="180" />
              </CharacterWrapper>
              <TextWrapper>
                <ChatSummary>
                  <h5>대화 내용 요약</h5>
                  <p>
                    {
                      historys?.find(
                        (history) => new Date(history.localDate).getDate() === date.getDate(),
                      ).historySum
                    }
                  </p>
                </ChatSummary>
                <Horizon />
                <TodayWord>
                  <h5>오늘의 한마디</h5>
                  <p>
                    {
                      historys?.find(
                        (history) => new Date(history.localDate).getDate() === date.getDate(),
                      ).todaySentence
                    }
                  </p>
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
