import React from "react";
import "./Settings.scss";
import { Row, Col } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Button, notification } from "antd";
import { useDispatch } from "react-redux";
import { switchSettingsStatus } from "../../app/store/ProfileSlice";

const SettingsPage = () => {
  const dispatch = useDispatch();

  const closeSettingsPage = () => {
    dispatch(switchSettingsStatus(false));
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Dear user!",
      description:
        "This feature is not yet available, Please try again later :)",
    });
  };

  return (
    <Row className="settings" style={{ width: "100%", height: "100%" }}>
      <Col sm={0} md={0} lg={6} xxl={8} className="settings__column settings__column--left">
        <nav className="settings__nav nav">
          <ul className="nav__menu">
            <li className="nav__item">
              <a className="nav__link nav__link--title" href="#">
                user settings
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                My Account
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                User Profile
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Privacy And Safety
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Authorized Apps
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Connections
              </a>
            </li>
          </ul>
          <button
            className="settings__button settings__button--exit"
            onClick={closeSettingsPage}
          >
            Log Out
          </button>
        </nav>
      </Col>
      <Col
        sm={24}
        md={24}
        lg={18}
        xxl={16}
        className="settings__column settings__column--right"
      >
        <div className="settings__wrapper account">
          <button className="settings__button settings__button--close">
            <span className="">
              <CloseCircleOutlined />
            </span>
            <span className="">ESC</span>
          </button>
          <div className="account__section account__section--review">
            <h3 className="settings__title">My Account</h3>
            {/*  */}
            <div className="site-card-border-less-wrapper">
              <Card
                title="Profile review"
                bordered={false}
                style={{
                  maxWidth: "700px",
                  width: "100%",
                  backgroundColor: "#2f3136",
                  borderRadius: "5px",
                }}
              >
                <div className="account-card">
                  <div className="account-card__header">
                    <div className="account-card__preview">
                      <img
                        className="account-card__image"
                        src={
                          require(`../../assets/images/profile-main.png`)
                            .default
                        }
                        alt="avatar"
                      />
                      <span className="account-card__name">Fpsska#1531</span>
                    </div>
                    <Button
                      className="settings__button account__button--profileEdit"
                      type="primary"
                      onClick={() => openNotificationWithIcon("info")}
                    >
                      Edit User Profile
                    </Button>
                  </div>
                  <div className="account-card__bottom">
                    <div className="account-card__section">
                      <div className="account-card__row">
                        <div className="account-card__text">
                          <h4 className="account-card__username settings__subtitle">
                            username
                          </h4>
                          <span className="account-card__username--text">
                            Fpsska#1531
                          </span>
                        </div>
                        <button
                          className="settings__button account__button--edit"
                          onClick={() => openNotificationWithIcon("info")}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="account-card__section">
                      <div className="account-card__row">
                        <div className="account-card__text">
                          <h4 className="account-card__email settings__subtitle">
                            email
                          </h4>
                          <span className="account-card__email--text">
                            ********@gmail.com
                          </span>
                        </div>
                        <button
                          className="settings__button account__button--edit"
                          onClick={() => openNotificationWithIcon("info")}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="account-card__section">
                      <div className="account-card__row">
                        <div className="account-card__text">
                          <h4 className="account-card__phone settings__subtitle">
                            phone number
                          </h4>
                          <span className="account-card__phone--text">
                            You haven't added a phone number yet.
                          </span>
                        </div>
                        <button
                          className="settings__button account__button--add"
                          onClick={() => openNotificationWithIcon("info")}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            {/* /. account-card */}
          </div>
          {/* /. account__section */}
          <div className="account__section account__section--authenfication">
            <h3 className="settings__title">Password and Authenfication</h3>
            <Button
              className="settings__button account__button--password"
              type="primary"
              onClick={() => openNotificationWithIcon("info")}
            >
              Change Password
            </Button>
            <div className="">
              <h4 className="settings__subtitle">Two-factor authentication</h4>
              <p className="settings__text">
                Protect your Discord account with an extra layer of security.
                Once configured, you'll be required to enter both your password
                and an authentication code from your mobile phone in order to
                sign in.
              </p>
              <Button
                className="settings__button account__button--authenfication"
                type="primary"
                onClick={() => openNotificationWithIcon("info")}
              >
                Enable Two-Factor Auth
              </Button>
            </div>
          </div>
          {/* /. account__section */}
          <div className="account__section account__section--removal">
            <h4 className="settings__subtitle">Account Removal</h4>
            <p className="settings__text">
              Disabling your account means you can recover it at any time after
              taking this action.
            </p>
            <div className="account__buttons">
              <Button
                className="settings__button account__button--disableAcc"
                type="primary"
                danger
                onClick={() => openNotificationWithIcon("info")}
              >
                Disable Account
              </Button>
              <Button
                className="settings__button account__button--deleteAcc"
                danger
                disabled
              >
                Delete Account
              </Button>
            </div>
          </div>
          {/* /. account__section */}
        </div>
      </Col>
    </Row>
  );
};

export default SettingsPage;
