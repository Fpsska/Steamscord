import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { getUserNameValue, switchAuthStatus } from '../../app/store/authSlice';

import './Auth.scss';

const Authorisation = () => {
  const dispatch = useDispatch();

  const { AuthStatus } = useSelector((state) => state.authReducer);
  const [isButtonLoading, setLoadingStatus] = useState(false);

  const onFinish = (values) => {
    setLoadingStatus(true);
    setTimeout(() => {
      dispatch(getUserNameValue(values));
      dispatch(switchAuthStatus(!AuthStatus));
      setLoadingStatus(false);
    }, 2000);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!'
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="#">Forgot password</a>
      </Form.Item>

      <Form.Item style={{ margin: '0' }}>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: '100%' }}
          loading={isButtonLoading}
        >
          Log in
        </Button>
        Or <a href="#">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Authorisation;
