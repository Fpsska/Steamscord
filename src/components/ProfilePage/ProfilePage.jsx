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
                      <span className="content__icon">
                        <SvgTemplate id="settings" />
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ width: "100%" }}>
                    <div className="content__preview content__preview--treads">
                      <span className="content__icon">
                        <SvgTemplate id="dialog" />
                      </span>
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
                      <span className="content__counter">11</span>
                    </div>
                    <ul className="channels">
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general1
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general2
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general3
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general4
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general5
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general6
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general7
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general8
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general9
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general10
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general11
                        </a>
                      </li>
                      <li className="channels__item">
                        <a className="channels__link" href="">
                          # general12
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
                {/*  */}
                <Row>
                  <Col style={{ width: "100%" }}>
                    <div className="content__preview">
                      <h2 className="content__title">Friends</h2>
                      <span className="content__counter">82</span>
                    </div>
                    <ul className="friends">
                      <li className="friends__item">
                        <img
                          className="friends__image"
                          src="https://via.placeholder.com/40x40"
                          alt="img"
                        />
                        <span className="friends__name">Orlando Diggs</span>
                      </li>
                      <li className="friends__item">
                        <img
                          className="friends__image"
                          src="https://via.placeholder.com/40x40"
                          alt="img"
                        />
                        <span className="friends__name">Carmen Velasco</span>
                      </li>
                      <li className="friends__item">
                        <img
                          className="friends__image"
                          src="https://via.placeholder.com/40x40"
                          alt="img"
                        />
                        <span className="friends__name">Marie Jensen</span>
                      </li>
                      <li className="friends__item">
                        <img
                          className="friends__image"
                          src="https://via.placeholder.com/40x40"
                          alt="img"
                        />
                        <span className="friends__name">Alex Lee</span>
                      </li>
                      <li className="friends__item">
                        <img
                          className="friends__image"
                          src="https://via.placeholder.com/40x40"
                          alt="img"
                        />
                        <span className="friends__name">Leo Gill</span>
                      </li>
                      <li className="friends__item">
                        <img
                          className="friends__image"
                          src="https://via.placeholder.com/40x40"
                          alt="img"
                        />
                        <span className="friends__name">Britney Cooper</span>
                      </li>
                      <li className="friends__item">
                        <img
                          className="friends__image"
                          src="https://via.placeholder.com/40x40"
                          alt="img"
                        />
                        <span className="friends__name">Orlando Diggs</span>
                      </li>
                      <li className="friends__item">
                        <img
                          className="friends__image"
                          src="https://via.placeholder.com/40x40"
                          alt="img"
                        />
                        <span className="friends__name">Carmen Velasco</span>
                      </li>
                    </ul>
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
