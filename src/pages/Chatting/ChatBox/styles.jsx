import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextArea = styled.textarea`
  color: #2c2c2c;
  resize: none;

  /* Content */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.36px;
  padding: 22px 30px 0px;

  width: 80%;
  flex-shrink: 0;
  border-radius: 35px;
  border: 2px solid var(--Main-Color, #809f80);
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const SendButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: absolute;
  top: 28%;
  right: 7.5%;
`;
