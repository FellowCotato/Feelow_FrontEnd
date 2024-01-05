export const saveTokenInfo = (token, connectedAt, expiresIn) => {
  localStorage.setItem("token", token);
  localStorage.setItem("connectedAt", connectedAt);
  localStorage.setItem("exprTime", expiresIn);
};

export const loadTokenInfo = () => {
  return {
    token: localStorage.getItem("token"),
    connectedAt: localStorage.getItem("connectedAt"),
    expiresIn: localStorage.getItem("exprTime"),
  };
};

export const removeTokenInfo = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("connectedAt");
  localStorage.removeItem("exprTime");
};

// 토큰 만료 여부 확인
export const isTokenExpired = (connectedAt, expiresIn) => {
  const formattedConnectedAt = connectedAt.replace(
    /(\d{4}-\d{2}-\d{2})(\d{2}:\d{2}:\d{2})/,
    "$1 $2",
  );
  const connectedAtDate = new Date(formattedConnectedAt);
  const expirationTime = new Date(connectedAtDate.getTime() + expiresIn);
  const currentTime = new Date();

  return expirationTime < currentTime;
};
