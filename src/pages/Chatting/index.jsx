import React, { useEffect, useState, useRef } from "react";
import { ChattingWrapper, ChattingContainer } from "./styles";
import Header from "../../layouts/Header";
import ButtonBox from "../../layouts/ButtonBox";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import CottonAlarm from "./CottonAlarm";
import CottonModal from "./CottonModal";
import api from "../../utils/api";
import dayjs from "dayjs";

const Chatting = () => {
  const [user, setUser] = useState({ name: localStorage.getItem("nickname"), cotton: -1 });
  const [isCottonAlarmOpen, setIsCottonAlarmOpen] = useState(false);
  const [isCottoModalOpen, setIsCottonModalOpen] = useState(false);

  const [messages, setMessages] = useState([]);
  const [messageId, setMessageId] = useState(1);

  useEffect(() => {
    api
      .get(`/api/chat/${localStorage.getItem("memberId")}/${dayjs().format("YYYY-MM-DD")}`)
      .then((res) => {
        if (user.cotton === -1 || user.cotton !== res.data.data.at(-1).point) {
          setIsCottonAlarmOpen(true);
          localStorage.setItem("cotton", res.data.data.at(-1).point);
        }

        setUser({ name: localStorage.getItem("nickname"), cotton: res.data.data.at(-1).point });
        const history = [];
        res.data.data.map((data, idx) => {
          if (idx === 0) {
            history.push({
              id: 1,
              sender: "bot",
              content: data.response,
            });
          } else {
            history.push({
              id: data.conversationCount * 2 - 2,
              sender: user.name,
              content: data.input,
            });
            history.push({
              id: data.conversationCount * 2 - 1,
              sender: "bot",
              content: data.response,
            });
          }
        });

        setMessages(history);
        setMessageId(history.at(-1).id + 1);
      })
      .catch((err) => console.error(err));
  }, []);

  const scrollRef = useRef(null);
  console.log(messages);
  return (
    <ChattingWrapper>
      <Header />
      <ButtonBox
        cottonCount={user.cotton}
        page="chatting"
        setIsCottonModalOpen={setIsCottonModalOpen}
      />
      <ChattingContainer>
        <ChatList messages={messages} ref={scrollRef} />
        <ChatBox
          user={user}
          messages={messages}
          setMessages={setMessages}
          messageId={messageId}
          setMessageId={setMessageId}
        />
      </ChattingContainer>
      <CottonAlarm isOpen={isCottonAlarmOpen} setAlarmOpen={setIsCottonAlarmOpen} />
      <CottonModal isOpen={isCottoModalOpen} setModalOpen={setIsCottonModalOpen} />
    </ChattingWrapper>
  );
};

export default Chatting;
