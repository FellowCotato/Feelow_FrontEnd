import React, { useCallback } from "react";
import { DateWrapper, StyledFeelowCharacter, TileWrapper } from "./styles";

const TileContent = ({ activeStartDate, date, onClickTile }) => {
  const onClickTileWrapper = useCallback(() => {
    onClickTile(date);
  }, []);

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
        neighboringmonth={(date.getMonth() === activeStartDate.getMonth()).toString()}
        datenow={dateNow.toString()}
      >
        <p>{date.getDate()}</p>
      </DateWrapper>
      {(date.getDay() === 1 || date.getDate() === currentDate.getDate()) && (
        <StyledFeelowCharacter width={64} height={68} />
      )}
    </TileWrapper>
  );
};

export default TileContent;
