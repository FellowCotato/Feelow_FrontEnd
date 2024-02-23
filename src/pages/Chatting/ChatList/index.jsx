import React, { forwardRef, useEffect } from "react";
import { ChatZone } from "./styles";
import CustomScroll from "react-custom-scrollbars-2";
import Chat from "../Chat";

// 다른 컴포넌트에서 사용 가능성이 있어 Chatting으로 ref 올림
const ChatList = forwardRef(({ messages }, ref) => {
  useEffect(() => {
    ref.current?.scrollToBottom();
  });

  const copyMessages = [...messages];
  if (copyMessages.length > 0 && copyMessages.at(-1).sender !== "bot") {
    copyMessages.push({ id: copyMessages.at(-1).id + 1, sender: "bot", content: "" });
  }

  return (
    <ChatZone>
      <CustomScroll ref={ref}>
        {copyMessages.map((message) => (
          <Chat key={message.id} message={message} />
        ))}
      </CustomScroll>
    </ChatZone>
  );
});
ChatList.displayName = "ChatList";

export default ChatList;
