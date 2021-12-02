import React, { useLayoutEffect, useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
  SmileOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchAuthStatus } from "../../app/store/authSlice";
import { switchSettingsStatus } from "../../app/store/ProfileSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ChannelList from "../Channel/ChannelList";
import FriendList from "../Friend/FriendList";
import CommentsList from "../Comment/CommentList";
import SettingsPage from "../SettingsPage/SettingsPage";
import "./ProfilePage.scss";
import "antd/dist/antd.css";

const ProfilePage = () => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsedStatus] = useState(true);

  const AsideToggle = () => {
    if (window.innerWidth >= 768) {
      setCollapsedStatus(!collapsed);
    }
  };

  // useLayoutEffect(() => {
  //   window.addEventListener("resize", AsideToggle);
  //   window.addEventListener("load", AsideToggle);
  //   return () => {
  //     window.removeEventListener("resize", AsideToggle);
  //     window.removeEventListener("load", AsideToggle);
  //   };
  // }, []);

  const { AuthStatus, userInformation } = useSelector(
    (state) => state.authReducer
  );

  const { channels, friends, settingsIsOpen } = useSelector(
    (state) => state.ProfileReducer
  );

  console.log(settingsIsOpen);

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
  };

  const openMainSettings = () => {
    dispatch(switchSettingsStatus(true));
  };

  return (
    <>
      {settingsIsOpen ? (
        <SettingsPage />
      ) : (
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
              >
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
                onClick={logOut}
                style={{ margin: "0" }}
              >
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
                          <span className="content__counter">
                            {friends.length}
                          </span>
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
                          <div className="chat__column chat__column--name">
                            <span className="chat__name">#general</span>
                            <button className="chat__button">
                              <span className="chat__icon">
                                <SvgTemplate id="star" />
                              </span>
                            </button>
                          </div>

                          <div className="chat__column chat__column--user">
                            <span className="chat__icon">
                              <SvgTemplate id="user" />
                            </span>
                            <span className="chat__users">1,903</span>
                          </div>

                          <div className="chat__column chat__column--form">
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
                          </div>

                          <div className="chat__column chat__column--notification">
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
                    xs={0}
                    xxl={3}
                    className="content__section content__section--right"
                  >
                    <div className="profile">
                      <img
                        className="profile__image"
                        src={
                          require(`../../assets/images/profile-main.png`)
                            .default
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

                        <button className="profile__button">Message</button>

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
      )}
    </>
  );
};

export default ProfilePage;
