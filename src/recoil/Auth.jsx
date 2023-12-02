import { atom } from "recoil";

export const userIdState = atom({
  key: "userIdState",
  default: "",
});

export const userNicknameState = atom({
  key: "userNickName",
  default: "",
});
