/* eslint-disable no-unused-vars */
import axios from "axios";

const SERVER_URL = "http://43.200.217.72:8080";

export const GetSimpleInfoApi = (token) => {
  return axios.get(`${SERVER_URL}/api/auth/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// role 선택
export const SelectRoleApi = (memberId, role, token) => {
  return axios.put(
    `${SERVER_URL}/api/${memberId}/member-type`,
    {
      member_type: role === "학생" ? "student" : "teacher",
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
};

// 추가정보 입력
export const AdditionalInfoApi = (memberId, userInfo, token) => {
  return axios.post(`${SERVER_URL}/api/${memberId}/additional-info`, userInfo, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const GetUserInfoApi = (memberId, token) => {
  return axios.get(`${SERVER_URL}/api/mypage/${memberId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
