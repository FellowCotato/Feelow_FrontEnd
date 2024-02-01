/* eslint-disable no-unused-vars */
import axios from "axios";

const SERVER_URL = "http://43.200.217.72:8080";

export const GetStudentListApi = (memberId, token) => {
  return axios.get(`${SERVER_URL}/${memberId}/studentList`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
