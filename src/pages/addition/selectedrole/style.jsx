import styled from "styled-components";

export const RoleLabel = styled.div`
  margin-top: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 37px;
  border-radius: 28px;
  background: #b19b8f;
  color: white;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.36px;
`;

export const OtherLabel = styled.div`
  color: #2c2c2c;
  text-align: center;
  font-family: "Pretendard";
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.22px;

  margin-top: ${(props) => props.marginTop || "0px"};
`;

export const TextInput = styled.input`
  width: 79vw;
  max-width: 473px;
  padding-left: 14px;
  height: 47px;
  border-radius: 18px;
  border: 2px solid #809f80;
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.18);
  color: #2c2c2c;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.32px;
  outline: none;
  margin-top: ${(props) => props.marginTop || "0px"};

  &:hover,
  &:focus,
  &:active {
    border: 2px solid #809f80;
  }
  ::placeholder {
    color: #b7b7b7;
  }
`;

export const CheckRegx = styled.p`
  height: 14px;
  color: #ff6b6b;
  text-align: center;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.32px;
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-left: 22px;
  @media screen and (max-width: 555px) {
    margin-left: 9vw;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const VisibleFileInput = styled.button`
  text-align: left;
  margin-top: 31px;
  width: 85vw;
  max-width: 490px;
  height: 50px;
  border-radius: 18px;
  border: 2px solid #809f80;
  color: #666;
  background-color: #fff;
  border-color: #809f80;
  box-shadow: 0 0 0 1px #809f80;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px 15px;
`;
