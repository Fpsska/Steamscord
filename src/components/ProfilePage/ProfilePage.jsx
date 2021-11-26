import React, { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchAuthStatus } from "../../app/store/authSlice";
import SvgTemplate from "../Common/SvgTemplate";
import ChannelList from "../Channel/ChannelList";
import FriendList from "../Friend/FriendList";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsedStatus] = useState(false);

  const toggle = () => {
    setCollapsedStatus(!collapsed);
  };

  const { AuthStatus, userInformation } = useSelector(
    (state) => state.authReducer
  );
  const { channels } = useSelector(
    (state) => state.ProfileReducer
  );
  const { friends } = useSelector(
    (state) => state.ProfileReducer
  );

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
                      <span className="content__counter">{channels.length}</span>
                    </div>
                  <ChannelList/>
                  </Col>
                </Row>
                {/*  */}
                <Row>
                  <Col style={{ width: "100%" }}>
                    <div className="content__preview">
                      <h2 className="content__title">Friends</h2>
                      <span className="content__counter">{friends.length}</span>
                    </div>
                    <FriendList/>
                  </Col>
                </Row>
              </Col>
              {/* /. COL LEFT */}
              <Col
                span={17}
                className="content__section content__section--main"
              ></Col>
              {/* /. COL MIDDLE */}
              <Col
                span={3}
                className="content__section content__section--right"
              ></Col>
            </Row>
          </div>

          {/* {`Hello, ${userInformation.username}!`} */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
