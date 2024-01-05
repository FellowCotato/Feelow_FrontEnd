import axios from "axios";

const SERVER_URL = "http://43.200.189.64:8080/api/auth/sign-up"; 

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

    if (response.data.result === true) {
      const data = response.data;
      const token = data.token;
      const expiresIn = data.exprTime;
      const connectedAt = data.member.connected_at;

      if (response.data.message === "Already existing member") {
        // 이미 가입된 회원인 경우
        localStorage.setItem("token", token);
        localStorage.setItem("connectedAt", connectedAt);
        localStorage.setItem("exprTime", expiresIn);
        console.log("이미 가입된 회원입니다", response);
        return "/chatting";
      } else {
        // 새로 회원 가입 성공한 경우
        localStorage.setItem("token", token);
        localStorage.setItem("connectedAt", connectedAt);
        localStorage.setItem("exprTime", expiresIn);
        return ""; // 회원가입 완료화면으로 이동하는 경로 추가
      }
    } else {
      // 회원 여부 확인이 실패한 경우
      console.error("Error checking membership status:", response.data.errorMessage);
      return;
    }
  } catch (error) {
    console.error("Error during member status check:", error);
    return;
  }
};

export default checkMemberStatus;
