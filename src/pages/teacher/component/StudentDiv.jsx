/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const StudentDiv = ({ item, perPage }) => {
  return (
    <Box perPage={perPage}>
      <BoxTop>
        {item.student_number} {item.name}
      </BoxTop>
      <BoxLine />
      <BoxImg src={item.characterImagePath} alt="character" />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 164px;
  height: 240px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #b7b7b7;
  background: var(--White, #fff);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
  ${(props) =>
    props.perPage === 9 &&
    `
    min-width:106px;
    width: 26vw;

    min-height: 151px;
    height:39vw;
    flex-shrink: 0;
    `}
`;

const BoxTop = styled.div`
  color: #2c2c2c;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px; /* 131.25% */
  letter-spacing: 0.32px;
  margin: 15px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 17px; /* 141.667% */
    letter-spacing: 0.12px;
    margin: 8px 0px 0px 0px;
  }
`;

const BoxLine = styled.div`
  width: 75%;
  height: 0px;
  border: 1px solid #e3e3e3;
  margin: 10px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    width: 89px;
    margin: 8px 0px 0px 0px;
  }
`;

const BoxImg = styled.img`
  width: 54.87%;
  /* height: 50.4%; */
  object-fit: cover;
  flex-shrink: 0;
  margin: 34px 0px 0px 0px;

  @media screen and (max-width: 768px) {
    width: 57.547%;
    /* height: 54.3%; */
    margin: 16px 0px 0px 0px;
  }
`;
