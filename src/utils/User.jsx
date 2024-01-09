/* eslint-disable no-unused-vars */
import axios from "axios";

const SERVER_URL = "http://43.200.217.72:8080";

export const SelectRoleApi = (memberId, role, token) => {
  return axios.put(
    `${SERVER_URL}/api/${memberId}/member_type`,
    {
      member_type: role === "학생" ? "student" : "teacher",
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
};
