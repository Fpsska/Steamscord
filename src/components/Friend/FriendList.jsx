import React from "react";
import { Skeleton, Space } from "antd";
import { useSelector } from "react-redux";
import FriendItem from "./FriendItem";
import "./Friend.scss";

const FriendList = ({ data, isLoading, error }) => {
  const { gameActivity } = useSelector((state) => state.chatReducer);

  const getGameActivity = Math.floor(Math.random() * gameActivity.length);

  const friendList = data.map((item) => {
    return (
      <FriendItem
        key={item.steamid}
        name={item.personaname}
        image={item.avatarmedium}
        status={Boolean(Math.round(Math.random()))}
        activity={(getGameActivity, gameActivity[getGameActivity])}
      />
    );
  });

  return (
    <>
      {isLoading ? (
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
          <div>
            <Skeleton.Avatar
              active="active"
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button active="active" size="middle" shape="round" />
          </div>
        </Space>
      ) : error ? (
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <div>
            <Skeleton.Avatar
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button size="middle" shape="round" block="block" />
          </div>
          <div>
            <Skeleton.Avatar
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button size="middle" shape="round" block="block" />
          </div>
          <div>
            <Skeleton.Avatar
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button size="middle" shape="round" block="block" />
          </div>
          <div>
            <Skeleton.Avatar
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button size="middle" shape="round" block="block" />
          </div>
          <div>
            <Skeleton.Avatar
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button size="middle" shape="round" block="block" />
          </div>
          <div>
            <Skeleton.Avatar
              size="middle"
              shape="avatarShape"
              style={{ margin: "0 15px 0 0" }}
            />
            <Skeleton.Button size="middle" shape="round" block="block" />
          </div>
        </Space>
      ) : data ? (
        friendList
      ) : null}
    </>
  );
};

export default FriendList;
