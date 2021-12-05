import React, { useState } from "react";
import { Spin, Button, Empty } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ChatPageSecond = () => {
  const { isFetching } = useSelector((state) => state.ChatReducer);

  const [contentVisible, setContentVisibleStatus] = useState(false);
  const [isLoading, setLoadingStatus] = useState(false);

  const acceptAction = () => {
    setLoadingStatus(true);
    setTimeout(() => {
      setLoadingStatus(false);
      setContentVisibleStatus(true);
    }, 3000);
  };
  return (
    <>
      {isFetching ? (
        <>
          {contentVisible ? (
            <Empty style={{ margin: "auto" }} />
          ) : (
            <div className="warning">
              <img
                className="warning__image"
                src={require(`../../../assets/images/warning.png`).default}
                alt="warning"
              />
              <div className="warning__text">
                <h2 className="warning__title">NSFW Channel</h2>
                <p className="warning__description">
                  You must be at least eighteen years old to view this channel.
                  Are you over eighteen and willing to see adult content?
                </p>
              </div>
              <div className="warning__nav">
                <Button
                  className="warning__button warning__button--cancel"
                  type="primary"
                >
                  {" "}
                  <Link className="warning__link" to="/Steamscord">
                    Back
                  </Link>
                </Button>
                <Button
                  className="warning__button warning__button--accept"
                  type="primary"
                  danger
                  loading={isLoading}
                  onClick={acceptAction}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
        </>
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
