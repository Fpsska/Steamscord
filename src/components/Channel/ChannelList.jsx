import React from "react";
import { useSelector } from "react-redux";
import ChannelItem from "./ChannelItem";
import "./Channel.scss";

const ChannelList = () => {
  const { channels } = useSelector((state) => state.ChatReducer);
  const channelList = channels.map((item) => {
    return <ChannelItem key={item.id} text={item.text} />;
  });
  return <ul className="channels">{channelList}</ul>;
};

export default ChannelList;
