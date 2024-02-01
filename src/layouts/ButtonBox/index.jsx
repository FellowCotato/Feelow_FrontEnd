import React, { useEffect, useState } from "react";
import { ButtonWrapper, Cotton, Button, Buttons, ButtonContainer } from "./styles";
import cotton from "../../assets/cotton.png";
import { ReactComponent as StoreImg } from "../../assets/store_img.svg";
import { ReactComponent as ProfileImg } from "../../assets/profile_img.svg";
import { ReactComponent as CalendarImg } from "../../assets/calendar_img.svg";

// 코튼 모달 이쪽으로 빼야함

const ButtonBox = ({ cottonCount, page, setIsCottonModalOpen }) => {
  const [isStoreActive, setIsStoreActive] = useState(page === "store");
  const [isProfileActive, setIsProfileActive] = useState(page === "profile");
  const [isCalendarActive, setIsCalendarActive] = useState(page === "calendar");

  useEffect(() => {
    setIsStoreActive(page === "store");
    setIsProfileActive(page === "profile");
    setIsCalendarActive(page === "calendar");
  }, [page]);

  return (
    <ButtonWrapper>
      <ButtonContainer>
        <Cotton onClick={() => setIsCottonModalOpen(true)}>
          <img src={cotton} alt="cotton" />
          <p className="cotton-counter">{`${cottonCount}개`}</p>
        </Cotton>
        <Buttons>
          <Button
            to="/store"
            color={isStoreActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
          >
            <StoreImg
              fill={isStoreActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
            />
            <p>상점</p>
          </Button>
          <Button
            to="/profile"
            color={isProfileActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
          >
            <ProfileImg
              fill={isProfileActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
            />
            <p>프로필</p>
          </Button>
          <Button
            to="/calendar"
            color={isCalendarActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
          >
            <CalendarImg
              fill={isCalendarActive ? "#D7AB6E" : page === "chatting" ? "#B19B8F" : "#B0B0B0"}
            />
            <p>캘린더</p>
          </Button>
        </Buttons>
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default React.memo(ButtonBox);
