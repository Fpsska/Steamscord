import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate, useLocation } from 'react-router';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from 'app/slices/authSlice';

import './Auth.scss';

// /. imports

const AuthorisationPage: React.FC = () => {
    const [isLoading, setLoadingStatus] = useState<boolean>(false);

    // relocate user to previous page after auth
    const [startLocationLink, setStartLocationLink] = useState<string>('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // /. hooks

    const onSubmit = (data: any): void => {
        setLoadingStatus(true);
        // setTimeout(() => {
        //     setLoadingStatus(false);
        // }, 1900);

        setTimeout(() => {
            dispatch(login({ login: data.username }));
            navigate(startLocationLink, { replace: true });
        }, 2000);
    };

    // /. functions

    useEffect(() => {
        const locationLink = location.state?.from?.pathname || '/Steamscord';
        setStartLocationLink(locationLink);
    }, [location.state]);

    // /.effects

    return (
        <div className="section">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true
                }}
                onFinish={onSubmit}
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
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
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
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName=""
                        noStyle
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a
                        className="login-form-forgot"
                        href="#"
                    >
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item style={{ margin: '0' }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ width: '100%' }}
                        loading={isLoading}
                    >
                        Log in
                    </Button>
                    Or <a href="#">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AuthorisationPage;
