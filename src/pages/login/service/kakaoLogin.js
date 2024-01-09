/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userIdState, userNicknameState } from "../../../recoil/Auth";
import checkMemberStatus from "../../../utils/Login";

const KakaoLoginComponent = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_APP_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userConnectedAt, setUserConnectedAt] = useState("");

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code"); // 인가 코드 추출
    if (code) {
      fetchAccessToken(code);
    }
  }, []);

  const getKakaoCode = () => {
    let redirect_uri = REDIRECT_URI;
    window.location.href =
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=account_email,profile_nickname`;
  };

  // 액세스 토큰을 가져오는 함수
  const fetchAccessToken = (code) => {
    let redirect_uri = REDIRECT_URI;
    const path = "";
    if (path) {
      redirect_uri += `?path=${path}`;
    }

    const params = {
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: `${code}`,
    };

    const query = Object.keys(params)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");

    console.log(query);
    fetch(`https://kauth.kakao.com/oauth/token?${query}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        fetchUserInfo(accessToken);
      });
  };

  // 유저 정보 받아오는 함수
  const fetchUserInfo = async (accessToken) => {
    try {
      const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      });
      const data = response.data;
      setUserId(data.id);
      setUserNickname(data.kakao_account.profile.nickname);
      setUserConnectedAt(data.connected_at);
      setUserEmail(data.kakao_account.email);

      // 회원 여부 판별하는 함수
      const path = await checkMemberStatus({
        userId: data.id,
        userEmail: data.kakao_account.email,
        userNickname: data.kakao_account.profile.nickname,
        userConnectedAt: data.connected_at,
      });
      navigate(path);
      console.log(path);
    } catch (error) {
      console.error("Kakao user info error:", error);
    }
  };
  return {
    getKakaoCode,
  };
};

export default KakaoLoginComponent;
