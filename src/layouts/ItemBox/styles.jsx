import styled, { css } from "styled-components";

const commonStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const ItemBox = styled.div`
  ${commonStyles}
  border: 2px solid #b7b7b7;
  background: var(--White, #fff);

  ${(props) =>
    props.isSelected &&
    css`
      border-radius: 10px;
      border: 3px solid var(--Point-Color, #d7ab6e);
      background: var(--Sub-Color0, #fffbf8);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
    `}
`;

export const SelectedItemBox = styled.div`
  ${commonStyles}
  border: 2px solid var(--Point-Color, #D7AB6E);
  background: #fff;
`;

export const Title = styled.div`
  color: #2c2c2c;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.32px;
  padding-top: 1.38vh;
  padding-bottom: 0.9vh;
`;

export const Line = styled.div`
  width: 6.45vw;
  height: 0.1vh;
  background-color: #e3e3e3;
  margin-bottom: 1.7vh;
`;

export const PointContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Cover = styled.div`
  position: absolute;
  padding-top: 11vh;
  padding-left: 0.1vw;
`;

export const CottonPoint = styled.div`
  color: #2c2c2c;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.32px;
  margin-left: 0.7vw;
`;

export const NullContainer = styled.div`
  width: 8.5vw;
  height: 22.2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fbf7f4;
`;
