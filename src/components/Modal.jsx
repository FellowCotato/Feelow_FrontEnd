// Import statements...
import React, { useEffect, useRef, useState } from "react";
import close_icon from "../assets/close_icon.svg";
import styled from "styled-components";
import character from "../assets/feelow_character.svg";

const Modal = ({ isOpen, setModalOpen, modalText, selectedItemAccessory, selectedItemCover }) => {
  const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 5;
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
    width: ${(props) => (props.noCotton ? "661px" : "980px")};
    height: ${(props) => (props.noCotton ? "324px" : "544px")};
    border-radius: 35px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
    z-index: 999; /* Added z-index property */

    @media only screen and (max-width: 768px) {
      width: ${(props) => (props.noCotton ? "661px" : "332px")};
      height: ${(props) => (props.noCotton ? "324px" : "452px")};
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
  `;

  const FeelowCharacterImage = styled.img`
    width: ${({ isAccessory }) => (isAccessory ? "12vw" : "10.4vw")};
    height: ${({ isAccessory }) => (isAccessory ? "18vh" : "26vh")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-51%, -50%);
    z-index: 0;
  `;

  const CottonDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${(props) => (props.noCotton ? "2vh" : "35vh")};

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
      margin: ${(props) => (props.noCotton ? "1vh" : "12px 28px")};
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.12px;

      p {
        margin: 12px;
      }

      .bold {
        line-height: ${(props) => (props.noCotton ? "16px" : "18px")};
      }
    }
  `;

  const PurchaseButton = styled.button`
    width: 10vw;
    height: 5vh;
    border-radius: 40px;
    background: var(--Point-Color, #d7ab6e);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-left: 500px;
    color: #fff;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;

    border: none;

    @media only screen and (max-width: 768px) {
      /* Purchase 버튼의 모바일 화면에서의 스타일 설정 */
      /* ... */
    }

    display: ${(props) => (props.noCotton ? "none" : "inline-block")};
  `;

  const CancelButton = styled.button`
    width: 10vw;
    height: 5vh;
    border-radius: 40px;
    background: var(--Point-Color, #d7ab6e);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-left: ${(props) => (props.noCotton ? "400px" : "10px")};
    margin-top: ${(props) => (props.noCotton ? "50px" : "")};
    color: var(--Point-Color, #d7ab6e);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;

    border-radius: 40px;
    border: 1px solid var(--Point-Color, #d7ab6e);
    background: #fff;
  `;

  const modalRef = useRef(null);
  const [lastClickedItem, setLastClickedItem] = useState(null);
  const [purchaseClicked, setPurchaseClicked] = useState(false);
  const [noCotton, setNoCotton] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [modalRef]);

  useEffect(() => {
    setLastClickedItem(selectedItemAccessory || selectedItemCover);
  }, [selectedItemAccessory, selectedItemCover]);

  const handlePurchase = () => {
    console.log(`구매 버튼이 클릭되었습니다. 선택된 항목: ${modalText}`);
    setPurchaseClicked(true);
    // 추후 구매 api 구현 후 로직 필요
    setNoCotton(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNoCotton(false);
    console.log(noCotton);
  };

  if (!isOpen) {
    return <></>;
  }

  return (
    <ModalOverlay>
      <ModalBackground ref={modalRef} noCotton={purchaseClicked}>
        <ModalBox>
          <CloseButton src={close_icon} alt="close-icon" onClick={() => setModalOpen(false)} />
          <CottonTitle>{purchaseClicked ? "솜뭉치가 부족합니다!" : modalText}</CottonTitle>
          <FeelowCharacter>
            {lastClickedItem && !purchaseClicked && (
              <FeelowCharacterImage
                src={lastClickedItem.coverImage}
                style={{
                  zIndex: 1,
                  width: lastClickedItem.type === "accessory" ? "8vw" : "10vw",
                  height: lastClickedItem.type === "accessory" ? "18vh" : "15.3vh",
                  marginTop: lastClickedItem.type === "accessory" ? "0" : "4.5vh",
                  marginLeft: lastClickedItem.type === "accessory" ? "0" : "0.2vw",
                }}
                alt={lastClickedItem.type}
              />
            )}
            {!lastClickedItem ||
              (selectedItemCover && !purchaseClicked && (
                <FeelowCharacterImage
                  src={character}
                  style={{ zIndex: 0 }}
                  alt="Feelow_Character"
                />
              ))}
            <CottonDescription noCotton={purchaseClicked}>
              {purchaseClicked
                ? "Feelow와 채팅을 하여 열심히 솜뭉치를 모아보세요."
                : `${modalText}를 구매하시겠습니까?`}
            </CottonDescription>
            <div className="buttonContainer">
              <PurchaseButton noCotton={purchaseClicked} onClick={handlePurchase}>
                구매
              </PurchaseButton>
              <CancelButton noCotton={purchaseClicked} onClick={closeModal}>
                {purchaseClicked ? "확인" : "취소"}
              </CancelButton>
            </div>
          </FeelowCharacter>
        </ModalBox>
      </ModalBackground>
    </ModalOverlay>
  );
};

export default Modal;
