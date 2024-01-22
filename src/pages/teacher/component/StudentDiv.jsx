/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const StudentDiv = () => {
  return (
    <Box>
      <div>하이</div>
    </Box>
  );
};

const Box = styled.div`
  width: 106px;
  height: 151px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #b7b7b7;
  background: var(--White, #fff);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
`;
