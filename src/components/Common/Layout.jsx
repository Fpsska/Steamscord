import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Layout, Menu, Row, Col, Button, Form, Input, message } from "antd";
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
  switchInputStatus,
  switchHomePageStatus,
} from "../../app/store/chatSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ChannelList from "../Channel/ChannelList";
import FriendList from "../Friend/FriendList";
import ChatHeader from "../Chat/ChatHeader";
import ChatForm from "../Chat/ChatForm";
import HomePage from "../Pages/HomePage/HomePage";
import SettingsPage from "../Pages/SettingsPage/SettingsPage";
import useGetProfileInfoQuery from "../../app/api/steamAPI";
import "antd/dist/antd.css";
import { useEffect } from "react";

const GeneralLayout = () => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsedStatus] = useState(true);
  const { channels, settingsIsOpen, isHomePage, isInputActive } = useSelector(
    (state) => state.chatReducer
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isButtonLoading, setLoadingStatus] = useState(false);

  const { confirm } = Modal;
  const { TextArea } = Input;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AsideToggle = () => {
    if (window.innerWidth >= 768) {
      setCollapsedStatus(!collapsed);
    }
  };

  const handleExitModal = () => {
    confirm({
      title: "Exit",
      visible: { isModalVisible },
      content: "Are you sure?",
      okText: "Submit",
      onOk() {
        setIsModalVisible(false);
        dispatch(switchAuthStatus(false));
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

  const inputMessageHandle = (event) => {
    console.log(event.target.value);
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
    inputMessageHandle();
  };
  // /.MODAL

  const { data = [], isLoading, error } = useGetProfileInfoQuery();

  const DefineInputStatus = () => {};
  if (useGetProfileInfoQuery().status === "fulfilled") {
    dispatch(switchInputStatus(true));
  }

  useEffect(() => {
    DefineInputStatus();
  }, []);

  // /.API

  const openHomePage = () => {
    dispatch(switchHomePageStatus(true));
    navigate("/Steamscord", { replace: true });
  };

  const openProfileSettings = () => {
    dispatch(switchSettingsStatus(true));
    navigate("/Steamscord/Settings", { replace: true });
  };

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
          <Menu.Item
            key="1"
            icon={<UserOutlined />}
            style={{ marginTop: "0" }}
            onClick={openProfileSettings}
          >
            settings
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
                        onClick={openHomePage}
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
                      <span className="content__counter">{data.length}</span>
                    </div>
                    <ul className="friends">
                      {" "}
                      <FriendList
                        data={data}
                        isLoading={isLoading}
                        error={error}
                      />
                    </ul>
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
                {isHomePage ? (
                  <HomePage />
                ) : settingsIsOpen ? (
                  <SettingsPage />
                ) : (
                  <Row className="chat">
                    <>
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
                    </>
                  </Row>
                )}
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
                      <Button
                        type="primary"
                        className="profile__button"
                        onClick={openMessageModal}
                        disabled={isInputActive ? "" : true}
                      >
                        Message
                      </Button>
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
                            loading={isButtonLoading}
                            onClick={sendMessage}
                          >
                            Send
                          </Button>,
                        ]}
                      >
                        <Form onSubmit={inputMessageHandle}>
                          <TextArea rows={4} />
                        </Form>
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
