import styled from "styled-components";

export const Logo = styled.div`
  padding: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: #809f80;
  text-align: center;
  font-family: Coiny;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.7px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 0.48px;
    padding-bottom: 0px;
  }
`;
