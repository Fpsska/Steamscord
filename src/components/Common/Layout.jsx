import React, { useState } from "react";
import { Outlet } from "react-router";

import { Layout, Menu, Row, Col, Button, Input, message } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchAuthStatus } from "../../app/store/authSlice";
import {
  switchSettingsStatus,
  switchFetchingStatus,
} from "../../app/store/ChatSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ChannelList from "../Channel/ChannelList";
import FriendList from "../Friend/FriendList";
import ChatHeader from "../Chat/ChatHeader";
import ChatForm from "../Chat/ChatForm";
import "antd/dist/antd.css";

const GeneralLayout = () => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsedStatus] = useState(true);

  const AsideToggle = () => {
    if (window.innerWidth >= 768) {
      setCollapsedStatus(!collapsed);
    }
  };

  const { authStatus, userInformation } = useSelector(
    (state) => state.authReducer
  );
  const { channels, friends, settingsIsOpen, isFetching } = useSelector(
    (state) => state.ChatReducer
  );

  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setLoadingStatus] = useState(false);

  const { confirm } = Modal;
  const { TextArea } = Input;

  const handleExitModal = () => {
    confirm({
      title: "Exit",
      visible: { isModalVisible },
      content: "Are you sure?",
      okText: "Submit",
      onOk() {
        setIsModalVisible(false);
        dispatch(switchAuthStatus(!authStatus));
        console.log(authStatus);
      },
      onCancel() {
        setIsModalVisible(false);
      },
    });
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };
  const openMessageModal = () => {
    setIsModalVisible(true);
  };
  const sendMessage = () => {
    setLoadingStatus(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setLoadingStatus(false);
    }, 2200);
    setTimeout(() => {
      message.success("Message sent successfully!");
    }, 3000);
  };

  const openMainSettings = () => {
    dispatch(switchSettingsStatus(true));
  };

  setTimeout(() => {
    dispatch(switchFetchingStatus(true));
  }, 1500);

  return (
    <Layout
      style={{
        height: "100%",
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
          <Menu.Item key="1" icon={<UserOutlined />} style={{ marginTop: "0" }}>
            {userInformation.username}
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            meeting
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            upload
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<LogoutOutlined />}
            onClick={handleExitModal}
            style={{ margin: "0" }}
          >
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: AsideToggle,
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
              <Col
                md={0}
                lg={6}
                xl={6}
                xxl={4}
                className="content__section content__section--left"
              >
                <Row>
                  <Col style={{ width: "100%" }}>
                    <div className="content__preview">
                      <h2 className="content__title content__title--main">
                        Nomad List
                      </h2>
                      <button
                        className="content__button content__button--settings"
                        onClick={openMainSettings}
                      >
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
                      <span className="content__counter">??</span>
                    </div>
                    <FriendList />
                  </Col>
                </Row>
              </Col>
              {/* /. COL LEFT */}
              <Col
                md={24}
                lg={18}
                xl={18}
                xxl={17}
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
                      <ChatHeader />
                    </Row>
                    <Row className="chat__section chat__section--main">
                      <Outlet />
                    </Row>
                    <Row className="chat__section chat__section--bottom">
                      <ChatForm />
                    </Row>
                  </Col>
                </Row>
              </Col>
              {/* /. COL MIDDLE */}
              <Col
                xs={0}
                xxl={3}
                className="content__section content__section--right"
              >
                <div className="profile">
                  <img
                    className="profile__image"
                    src={
                      require(`../../assets/images/profile-main.png`).default
                    }
                    alt="profile"
                  />

                  <div className="profile__wrapper">
                    <div className="profile__bio">
                      <h2 className="profile__name">Fpsska</h2>
                      <span className="profile__position">
                        Junior Frontend Developer
                      </span>
                    </div>

                    <ul className="profile__social social">
                      <li className="social__icon">
                        <a className="social__link" href="#">
                          <FacebookOutlined />
                        </a>
                      </li>
                      <li className="social__icon">
                        <a className="social__link" href="#">
                          <TwitterOutlined />
                        </a>
                      </li>
                      <li className="social__icon">
                        <a className="social__link" href="#">
                          <InstagramOutlined />
                        </a>
                      </li>
                      <li className="social__icon">
                        <a className="social__link" href="#">
                          <LinkedinOutlined />
                        </a>
                      </li>
                    </ul>
                    <>
                      <button
                        className="profile__button"
                        onClick={openMessageModal}
                      >
                        Message
                      </button>
                      <Modal
                        visible={isModalVisible}
                        title="Write your message there!"
                        onOk={sendMessage}
                        onCancel={handleCancelModal}
                        footer={[
                          <Button key="back" onClick={handleCancelModal}>
                            Cancel
                          </Button>,
                          <Button
                            key="submit"
                            type="primary"
                            loading={isLoading}
                            onClick={sendMessage}
                          >
                            Send
                          </Button>,
                        ]}
                      >
                        <TextArea rows={4} />
                      </Modal>
                    </>
                    <ul className="profile__information information">
                      <li className="information__template">
                        <span className="information__title">Username</span>
                        <a className="information__link" href="#">
                          @Fpsska
                        </a>
                      </li>
                      <li className="information__template">
                        <span className="information__title">Email</span>
                        <a
                          className="information__link"
                          href="mailto:a-luna@gmail.com"
                        >
                          a-dropmail.com
                        </a>
                      </li>
                      <li className="information__template">
                        <span className="information__title">Skype</span>
                        <a className="information__link" href="#">
                          fpsska_skype
                        </a>
                      </li>
                      <li className="information__template">
                        <span className="information__title">Timezone</span>
                        <span>
                          {new Date().toLocaleTimeString()} Local time
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default GeneralLayout;
