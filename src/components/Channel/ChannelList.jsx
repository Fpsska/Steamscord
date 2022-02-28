import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import ChannelItem from "./ChannelItem";
import "./Channel.scss";

const ChannelList = () => {
  const { channels } = useSelector((state) => state.chatReducer);
  const channelList = useMemo(
    () =>
      channels.map((item) => {
        return <ChannelItem key={item.id} name={item.name} link={item.link} />;
      }),
    [channels]
  );
  return <ul className="channels">{channelList}</ul>;
};

export default ChannelList;
