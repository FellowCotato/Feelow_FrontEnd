import React, { useCallback } from "react";
import { ButtonWrapper, Cotton, Button, ButtonContainer } from "./styles";
import cotton from "../../assets/cotton.png";
import { ReactComponent as StoreImg } from "../../assets/store_img.svg";
import { ReactComponent as ProfileImg } from "../../assets/profile_img.svg";
import { ReactComponent as CalendarImg } from "../../assets/calendar_img.svg";

/*
button state 관리가 이게 최선인지 생각 필요
*/

const ButtonBox = ({
  cottonCount,
  isStoreActive,
  setIsStoreActive,
  isProfileActive,
  setIsProfileActive,
  isCalendarActive,
  setIsCalendarActive,
  setIsCottonModalOpen,
}) => {
  const onClickCotton = useCallback(() => {
    console.log("cotton click");
    setIsCottonModalOpen(true);
  }, []);

  const onClickStore = useCallback(() => {
    console.log("store click");
    setIsStoreActive(true);
    setIsProfileActive(false);
    setIsCalendarActive(false);
  }, []);

  const onClickProfile = useCallback(() => {
    console.log("profile click");
    setIsStoreActive(false);
    setIsProfileActive(true);
    setIsCalendarActive(false);
  }, []);

  const onClickCalendar = useCallback(() => {
    console.log("calendar click");
    setIsStoreActive(false);
    setIsProfileActive(false);
    setIsCalendarActive(true);
  }, []);

  return (
    <ButtonWrapper>
      <ButtonContainer>
        <Cotton onClick={onClickCotton}>
          <button className="cotton-button">
            <img src={cotton} alt="cotton" />
          </button>
          <p className="cotton-counter">{`${cottonCount}개`}</p>
        </Cotton>
        <div className="button-container">
          <Button onClick={onClickStore}>
            <StoreImg fill={isStoreActive ? "#D7AB6E" : "#B0B0B0"} />
          </Button>
          <Button onClick={onClickProfile}>
            <ProfileImg fill={isProfileActive ? "#D7AB6E" : "#B0B0B0"} />
          </Button>
          <Button onClick={onClickCalendar}>
            <CalendarImg fill={isCalendarActive ? "#D7AB6E" : "#B0B0B0"} />
          </Button>
        </div>
      </ButtonContainer>
    </ButtonWrapper>
  );
};

export default ButtonBox;
