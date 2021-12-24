import React from "react";
import { useSelector } from "react-redux";
import ChannelItem from "./ChannelItem";
import "./Channel.scss";

const ChannelList = () => {
  const { channels } = useSelector((state) => state.chatReducer);
  const channelList = channels.map((item) => {
    return <ChannelItem key={item.id} name={item.name} link={item.link} />;
  });
  return <ul className="channels">{channelList}</ul>;
};

export default ChannelList;
