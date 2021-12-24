import React from "react";
import { message } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import SvgTemplate from "../Common/SvgTemplate";

const ChatForm = () => {
  const errorNotification = () => {
    message.error("Function temporarily unavailable");
  };

  const { isInputActive } = useSelector((state) => state.chatReducer);

  return (
    <form className="form form--message" action="#">
      <input
        className="form__input form__input--message"
        type="text"
        placeholder="Message in #general"
        disabled={isInputActive ? "" : true}
      />
      <div className="form__interaction">
        <button
          type="button"
          className="form__button form__button--message form__button--voice"
          onClick={errorNotification}
        >
          <span className="form__icon">
            <SvgTemplate id="microphone" />
          </span>
        </button>
        <button
          type="button"
          className="form__button form__button--message form__button--file"
          onClick={errorNotification}
        >
          <span className="form__icon">
            <SvgTemplate id="clip" />
          </span>
        </button>
      </div>
      <button
        type="button"
        className="form__button form__button--message form__button--emoji"
        onClick={errorNotification}
      >
        <span className="form__icon">
          <SmileOutlined />
        </span>
      </button>
    </form>
  );
};

export default ChatForm;
