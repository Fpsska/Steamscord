import React from "react";
import { Row, Spin } from "antd";
import CommentsList from "../../Comment/CommentList";
import ChatHeader from "../../Chat/ChatHeader";
import ChatForm from "../../Chat/ChatForm";
import { useSelector } from "react-redux";

const ChatPageFirst = () => {
  const { isFetching } = useSelector((state) => state.ChatReducer);

  return (
    <>
      <Row className="chat__section chat__section--top">
        <ChatHeader />
      </Row>

      <Row className="chat__section chat__section--main">
        {isFetching ? (
          <CommentsList />
        ) : (
          <Spin
            size="large"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          />
        )}
      </Row>

      <Row className="chat__section chat__section--bottom">
        <ChatForm />
      </Row>
    </>
  );
};

export default ChatPageFirst;
