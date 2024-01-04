import React, { useEffect, useRef } from "react";
import {
  CloseButton,
  CottonDescription,
  CottonImage,
  CottonTitle,
  ModalBackground,
  ModalBox,
  ModalOverlay,
} from "./styles";
import cotton from "../../../assets/cotton.png";
import close_icon from "../../../assets/close_icon.svg";

const CottonModal = ({ isOpen, setModalOpen }) => {
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
          <CottonImage src={cotton} alt="cotton" />
          <CottonTitle>솜뭉치</CottonTitle>
          <CottonDescription>
            <p>솜뭉치는 출석이나 Feelow와의 채팅을 통해 얻을 수 있습니다.</p>
            <p className="bold">
              1. 매일 Feelow 서비스에 접속하면 솜뭉치가 5개씩 적립됩니다.
              <br />
              2. Fellow에서 채팅을 10번 보낼 때마다 솜뭉치가 5개씩 적립됩니다.
            </p>
            <hr />
            <p>
              모은 솜뭉치는 상점에서 사용이 가능합니다.
              <br />
              상점에서 Feelow 캐릭터를 꾸밀 수 있는 다양한 아이템이 준비어되 있습니다.
              <br />
              열심히 솜뭉치를 모아 자신의 Feelow를 예쁘게 꾸며 보세요!
            </p>
          </CottonDescription>
        </ModalBox>
      </ModalBackground>
    </ModalOverlay>
  );
};

export default CottonModal;
