/* eslint-disable no-unused-vars */
import axios from "axios";

const SERVER_URL = "http://43.200.217.72:8080/api/auth/sign-up";

const checkMemberStatus = async ({ userId, userEmail, userNickname, userConnectedAt }) => {
  try {
    const response = await axios.post(SERVER_URL, {
      id: userId,
      connected_at: userConnectedAt,
      properties: {
        nickname: userNickname,
      },
      kakao_account: {
        profile_nickname_needs_agreement: false,
        profile: {
          nickname: userNickname,
        },
        has_email: true,
        email_needs_agreement: false,
        is_email_valid: true,
        is_email_verified: true,
        email: userEmail,
      },
    });
    console.log(response);
    if (response.data.success === true) {
      const data = response.data.data;
      const token = data.accessToken;
      const refreshToken = data.refreshToken;
      const expiresIn = data.exprTime;
      const connectedAt = data.member.connected_at;
      const memberId = data.member.memberId;
      const nickname = data.member.nickname;
      const email = data.member.email;

      if (response.data.message === "Already existing member") {
        // 이미 가입된 회원인 경우
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("connectedAt", connectedAt);
        localStorage.setItem("exprTime", expiresIn);
        localStorage.setItem("memberId", memberId);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("email", email);
        localStorage.setItem("member_type", data.member.member_type);
        localStorage.setItem("studentId", data.member.studentId);
        localStorage.setItem("teacherId", data.member.teacherId);
        console.log("이미 가입된 회원입니다", response);
        if (data.member.member_type === "student") {
          return "/chatting";
        } else if (data.member.member_type === "teacher") {
          return "/teacher";
        }
      } else {
        // 새로 회원 가입 성공한 경우
        localStorage.setItem("token", token);
        localStorage.setItem("connectedAt", connectedAt);
        localStorage.setItem("exprTime", expiresIn);
        localStorage.setItem("memberId", memberId);
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("email", email);
        return "/goto/addition";
        // 회원가입 완료화면으로 이동하는 경로 추가
      }
    } else {
      // 회원 여부 확인이 실패한 경우
      console.error("Error checking membership status:", response.data.errorMessage);
      alert("로그인에 실패하였습니다.");
      return;
    }
  } catch (error) {
    console.error("Error during member status check:", error);
    alert("로그인에 실패하였습니다.");
    return;
  }
};

export default checkMemberStatus;
