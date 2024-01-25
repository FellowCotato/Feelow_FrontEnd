import styled, { css } from "styled-components";
import { ReactComponent as FeelowCharacter } from "../../../assets/feelow_character.svg";

export const TileWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  width: auto;
  height: 100px;
  border: 0.5px solid #e8e8e8;
  background: ${(props) => props.datenow === "true" && "#E1E9E1"};
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 8px;

  color: ${(props) => props.day === 6 && "#969696"};
  color: ${(props) => props.day === 6 && props.neighboringmonth === "true" && "#B0B0B0"};

  ${(props) =>
    props.datenow === "true" &&
    css`
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #809f80;
      color: #fff;
    `}

  > p {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
  }
`;

export const StyledFeelowCharacter = styled(FeelowCharacter)`
  width: 64px;
  height: 68px;
  margin-right: 10%;
`;
