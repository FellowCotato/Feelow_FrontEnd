import styled from "styled-components";

export const Background = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffbff8;
`;

export const AdditionBackground = styled.div`
  background-color: #f7f0ea;
  margin-top: 6vh;
  width: 100vw;
  height: 67.2vh;
`;

export const StylingContainer = styled.div`
  display: flex;
`;

export const Character = styled.div`
  padding-top: 14.02vh;
  padding-left: 22.4vw;
`;

export const PurchaseButton = styled.div`
  width: 4vw;
  height: 3vh;
  margin-top: 4.5vh;
  margin-left: 6vw;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 1.5px solid #d7ab6e;
  background: #fff;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  color: #d7ab6e;
  text-align: center;
  cursor: pointer;
`;

export const ItemSpace = styled.div`
  width: 36vw;
  height: 46.3vh;
  padding-top: 11vh;
  margin-left: -35vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.4vw;
  z-index: 0;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4.2vh;
  padding-left: 18.48vw;
  gap: 10px;
`;

export const CatgoryButton = styled.div`
  width: ${(props) => `${props.textLength * 2}vw`}; /* 글자수에 따라 width 동적 계산 */
  min-width: 4.8vw;
  height: 3.6vh;
  border-radius: 40px;
  border: 1.5px solid var(--Main-Color, #809f80);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Main-Font, #2c2c2c);
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.32px;

  &.selected {
    border-radius: 40px;
    background: var(--Main-Color, #809f80);
    color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.18);
  }
  z-index: 1;
`;
