/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { StudentDiv } from "./StudentDiv";
import { XDiv } from "./XDiv";
export const StudentComponent = ({ perPage, pageStudentList }) => {
  const lengthPage = pageStudentList.length;
  const result = [];
  for (let i = 0; i < perPage - lengthPage; i++) {
    result.push(<div>X</div>);
  }
  return (
    <StudentListComponent perPage={perPage}>
      {pageStudentList.map((item) => {
        return <StudentDiv key={item.studentId} item={item} perPage={perPage} />;
      })}
      {result.map((item) => {
        return <XDiv key={item.studentId} item={item} perPage={perPage} />;
      })}
    </StudentListComponent>
  );
};

const StudentListComponent = styled.div`
  max-width: 1080px;
  width: 90%;
  display: grid;
  margin: 26px 0px 36px 0px;
  gap: 20px 19px;
  grid-template-columns: ${(props) =>
    props.perPage === 12 ? "1fr 1fr 1fr 1fr 1fr 1fr" : "1fr 1fr 1fr"};
  @media screen and (max-width: 768px) {
    gap: 16px 16px;
  }
`;
