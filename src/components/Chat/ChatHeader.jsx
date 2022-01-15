import React from "react";
import { useSelector } from "react-redux";
import { Badge, Input, message } from "antd";
import { StarOutlined } from "@ant-design/icons";
import SvgTemplate from "../Common/SvgTemplate";
import "./Chat.scss";

const ChatHeader = () => {
  const { isInputActive, isHomePage } = useSelector(
    (state) => state.chatReducer
  );
  const { Search } = Input;
  //
  const errorNotification = () => {
    message.error("Function temporarily unavailable");
  };
  return (
    <>
      <div className="chat__column chat__column--name">
        <span className="chat__name">untitled</span>
        <button className="chat__button">
          <span className="chat__icon">
            <StarOutlined />
          </span>
        </button>
      </div>

      <div className="chat__column chat__column--user">
        <span className="chat__icon">
          <SvgTemplate id="user" />
        </span>
        <span className="chat__users">1337</span>
      </div>

      <div className="chat__column chat__column--form">
        <form className="form" action="">
          <Search
            placeholder="Search.."
            style={{ borderRadius: "5px" }}
            disabled={isInputActive ? "" : true}
          />
        </form>
      </div>

      <div className="chat__column chat__column--notification">
        <button className="chat__button">
          <Badge count={9} size="small">
            <span className="chat__icon">
              <SvgTemplate id="notification" />
            </span>
          </Badge>
        </button>
      </div>

      <div className="chat__column chat__column--settings">
        <button className="chat__button" onClick={errorNotification}>
          <span className="chat__icon">
            <SvgTemplate id="chat-settings" />
          </span>
        </button>
      </div>
    </>
  );
};

export default ChatHeader;
