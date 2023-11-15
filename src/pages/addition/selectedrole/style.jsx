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
