import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";

const ChatPageSecond = () => {
  const { isFetching } = useSelector((state) => state.ChatReducer);

  return (
    <>
      {isFetching ? (
        <div className="warning">
          <img
            className="warning__image"
            src={require(`../../../assets/images/warning.png`).default}
            alt="warning"
          />
          <div className="warning__text">
            <h2 className="warning__title">NSFW Channel</h2>
            <p className="warning__description">
              You must be at least eighteen years old to view this channel. Are
              you over eighteen and willing to see adult content?
            </p>
          </div>
        </div>
      ) : (
        <Spin
          size="large"
          style={{
            margin: "auto",
          }}
        />
      )}
    </>
  );
};

export default ChatPageSecond;
