import React, { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchAuthStatus } from "../../app/store/authSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ChannelList from "../Channel/ChannelList";
import FriendList from "../Friend/FriendList";
import CommentsList from "../Comment/CommentList";
import "./ProfilePage.scss";
import "antd/dist/antd.css";

const ProfilePage = () => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsedStatus] = useState(true);

  const toggle = () => {
    setCollapsedStatus(!collapsed);
  };

  const { AuthStatus, userInformation } = useSelector(
    (state) => state.authReducer
  );
  const { channels, friends } = useSelector((state) => state.ProfileReducer);

  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleConfirm = () => {
    setIsModalVisible(false);
    dispatch(switchAuthStatus(!AuthStatus));
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const logOut = () => {
    setIsModalVisible(true);
    setIsModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  return (
    <Layout
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ position: "relative" }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            {userInformation.username}
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            meeting
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            upload
          </Menu.Item>
        </Menu>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
          style={{ position: "absolute", bottom: "0" }}
        >
          <Menu.Item key="1" icon={<LogoutOutlined />} onClick={logOut}>
            Log Out
          </Menu.Item>
          {isModalVisible ? (
            <>
              <Modal
                title="Exit"
                visible={isModalVisible}
                onOk={handleConfirm}
                onCancel={handleCancel}
              >
                <p>Are you sure?</p>
              </Modal>
            </>
          ) : (
            <></>
          )}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: 0,
            padding: 0,
            minHeight: 280,
          }}
        >
          <div className="content">
            <Row className="content__wrapper">
              <Col span={4} className="content__section content__section--left">
                <Row>
                  <Col style={{ width: "100%" }}>
                    <div className="content__preview">
                      <h2 className="content__title">Nomad List</h2>
                      <button className="content__button">
                        <span className="content__icon">
                          <SvgTemplate id="settings" />
                        </span>
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ width: "100%" }}>
                    <div className="content__preview content__preview--treads">
                      <button className="content__button">
                        <span className="content__icon">
                          <SvgTemplate id="dialog" />
                        </span>
                      </button>
                      <h2 className="content__title content__title--small">
                        All treads
                      </h2>
                    </div>
                  </Col>
                </Row>
                {/*  */}
                <Row>
                  <Col style={{ width: "100%" }}>
                    <div className="content__preview">
                      <h2 className="content__title">Channels</h2>
                      <span className="content__counter">
                        {channels.length}
                      </span>
                    </div>
                    <ChannelList />
                  </Col>
                </Row>
                {/*  */}
                <Row>
                  <Col style={{ width: "100%" }}>
                    <div className="content__preview">
                      <h2 className="content__title">Friends</h2>
                      <span className="content__counter">{friends.length}</span>
                    </div>
                    <FriendList />
                  </Col>
                </Row>
              </Col>
              {/* /. COL LEFT */}

              <Col
                span={17}
                className="content__section content__section--main"
              >
                <Row className="chat">
                  <Col
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Row className="chat__section chat__section--top">
                      <div className="chat__column chat__column--name">
                        <span className="chat__name">#general</span>
                        <button className="chat__button">
                          <span className="chat__icon">
                            <SvgTemplate id="star" />
                          </span>
                        </button>
                      </div>
                      <div className="chat__column">
                        <span className="chat__icon">
                          <SvgTemplate id="user" />
                        </span>
                        <span className="chat__users">1,903</span>
                      </div>

                      <form className="form" action="#">
                        <input
                          className="form__input form__input--search"
                          type="text"
                          placeholder="Search.."
                        />
                        <button className="form__button form__button--search">
                          <span className="form__icon">
                            <SvgTemplate id="search" />
                          </span>
                        </button>
                      </form>

                      <div className="chat__column">
                        <button className="chat__button">
                          <span className="chat__icon">
                            <SvgTemplate id="notification" />
                          </span>
                        </button>
                      </div>
                      <div className="chat__column chat__column--settings">
                        <button className="chat__button">
                          <span className="chat__icon">
                            <SvgTemplate id="chat-settings" />
                          </span>
                        </button>
                      </div>
                    </Row>

                    <Row className="chat__section chat__section--main">
                      <CommentsList />
                    </Row>

                    <Row className="chat__section chat__section--bottom">
                        <form className="form form--message" action="#">
                          <input
                            className="form__input form__input--message"
                            type="text"
                            placeholder="Message in #general"
                          />
                          <div className="form__interaction">
                            <button className="form__button form__button--message form__button--voice">
                              <span className="form__icon">
                                <SvgTemplate id="microphone" />
                              </span>
                            </button>
                            <button className="form__button form__button--message form__button--file">
                              <span className="form__icon">
                                <SvgTemplate id="clip" />
                              </span>
                            </button>
                          </div>
                          <button className="form__button form__button--message form__button--emoji">
                            <span className="form__icon">
                              <SmileOutlined />
                            </span>
                          </button>
                        </form>
                    </Row>
                  </Col>
                </Row>
              </Col>
              {/* /. COL MIDDLE */}

              <Col
                span={3}
                className="content__section content__section--right"
              ></Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
