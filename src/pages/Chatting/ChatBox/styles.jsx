import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
`;

export const TextArea = styled.textarea`
  color: #2c2c2c;
  resize: none;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.36px;
  line-height: 16px;

  padding: 22px 30px;
  margin-left: -32px;
  width: 100%;
  height: 16px;
  display: block;
  flex-shrink: 0;
  border-radius: 35px;
  border: 2px solid #809f80;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 768px) {
    border-radius: 40px;
    box-shadow: none;
    border: 1.5px solid #809f80;
    height: 14px;

    font-size: 14px;
    letter-spacing: 0.14px;
    line-height: 14px;

    padding: 16px 30px;
  }
`;

export const SendButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: -6px;

  @media only screen and (max-width: 768px) {
    top: 14px;
    right: -12px;
  }

  img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;

    @media only screen and (max-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;
