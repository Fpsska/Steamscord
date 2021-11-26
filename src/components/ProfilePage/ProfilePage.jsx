import React, { useState } from "react";
import { Layout, Menu } from "antd";
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
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
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
          <>
            <Menu.Item key="4" icon={<LogoutOutlined />} onClick={logOut}>
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
          </>
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
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {`Hello, ${userInformation.username}!`}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
