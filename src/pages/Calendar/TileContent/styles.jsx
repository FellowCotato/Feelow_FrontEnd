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

  @media only screen and (max-width: 768px) {
    border: none;
    justify-content: center;
    height: 40px;
    background: none;
    margin: 8px 0;
  }
`;

export const DateWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    top: 8px;
    left: 8px;
  }

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

      @media only screen and (max-width: 768px) {
        width: 44px;
        max-width: 100%;
        height: 44px;
        max-height: 100%;
      }
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

export const AcitveDot = styled.div`
  position: absolute;
  top: 32px;
  width: 6px;
  height: 6px;
  background: #d9d9d9;
  border-radius: 50%;
`;
