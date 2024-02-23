import React, { useEffect, useRef } from "react";
import close_icon from "../assets/close_icon.svg";
import styled from "styled-components";
import character from "../assets/feelow_character.png";

const Modal = ({ isOpen, setModalOpen, modalText }) => {
  const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  `;

  const ModalBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 980px;
    height: 544px;
    border-radius: 35px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
    z-index: 999; /* Added z-index property */

    @media only screen and (max-width: 768px) {
      width: 332px;
      height: 452px;
      border-radius: 26px;
      box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.4);
    }
  `;

  const ModalBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: calc(100% - 18px);
    height: calc(100% - 18px);
    border: 2.5px dashed #d7ab6e;
    border-radius: 30px;
    z-index: 1000; /* Added z-index property */

    @media only screen and (max-width: 768px) {
      width: calc(100% - 16px);
      height: calc(100% - 16px);
      border: 2px dashed #d7ab6e;
      border-radius: 22px;
    }
  `;

  const CloseButton = styled.img`
    position: absolute;
    top: 12px;
    right: 18px;
    width: 36px;
    height: 36px;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      width: 24px;
      height: 24px;
    }
  `;

  const CottonTitle = styled.h3`
    color: #2c2c2c;
    text-align: center;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.32px;

    padding-top: 5.5vh;

    @media only screen and (max-width: 768px) {
      font-size: 20px;
      letter-spacing: 0.18px;
    }
  `;

  const FeelowCharacter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 5.5vh;

    img {
      width: 100%;
      height: 100%;
    }
  `;

  const CottonDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.36px;
    font-weight: 400;

    p {
      margin: 24px;
    }

    .bold {
      font-weight: 600;
      line-height: 28px;
    }

    hr {
      margin: 24px;
      width: 120px;
      height: 4px;
      border: none;
      border-radius: 2px;
      background: #f7f0ea;
    }

    @media only screen and (max-width: 768px) {
      margin: 12px 28px;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.12px;

      p {
        margin: 12px;
      }

      .bold {
        line-height: 18px;
      }
    }
  `;

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

  if (!isOpen) {
    return <></>;
  }

  return (
    <ModalOverlay>
      <ModalBackground ref={modalRef}>
        <ModalBox>
          <CloseButton src={close_icon} alt="close-icon" onClick={() => setModalOpen(false)} />
          <CottonTitle>{modalText}</CottonTitle>
          <FeelowCharacter src={character} style={{ width: "8vw", height: "18vh" }}>
            <img src={character} alt="Feelow Character" />
          </FeelowCharacter>
          <CottonDescription>{modalText}를 구매하시겠습니까?</CottonDescription>
        </ModalBox>
      </ModalBackground>
    </ModalOverlay>
  );
};

export default Modal;
