import React, { useCallback, useState, useEffect } from "react";
import { AcitveDot, DateWrapper, StyledFeelowCharacter, TileWrapper } from "./styles";

const TileContent = ({ activeStartDate, date, onClickTile, historys }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickTileWrapper = useCallback(() => {
    onClickTile(date);
  }, [date]);

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  let dateNow = false;
  if (date.getTime() === currentDate.getTime()) {
    dateNow = true;
  }

  return (
    <TileWrapper datenow={dateNow.toString()} onClick={onClickTileWrapper}>
      <DateWrapper
        day={date.getDay()}
        neighboringmonth={(date.getMonth() !== activeStartDate.getMonth()).toString()}
        datenow={dateNow.toString()}
      >
        <p>{date.getDate()}</p>
      </DateWrapper>
      {historys?.find((history) => date.getDate() === new Date(history.localDate).getDate()) &&
        (windowWidth <= 768 ? <AcitveDot /> : <StyledFeelowCharacter width={64} height={68} />)}
    </TileWrapper>
  );
};

export default TileContent;
