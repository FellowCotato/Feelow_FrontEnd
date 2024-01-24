/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { StudentDiv } from "./StudentDiv";

export const StudentComponent = ({ pageStudentList }) => {
  console.log(pageStudentList);
  return (
    <StudentListComponent>
      {pageStudentList.map((item) => {
        return <StudentDiv key={item.studentId} item={item} />;
      })}
    </StudentListComponent>
  );
};
const StudentListComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1080px;
  width: 90%;
  height: 500px;
`;
