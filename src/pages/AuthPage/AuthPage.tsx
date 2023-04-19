import React, { useState, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { switchUserRememberedStatus, signIn } from 'app/slices/authSlice';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import './Auth.scss';

// /. imports

const AuthorisationPage: React.FC = () => {
    const { isUserRemembered, isUserAuthorized, login, password } =
        useAppSelector(state => state.authReducer);

    const [isLoading, setLoadingStatus] = useState<boolean>(false);

    // relocate user to previous page after auth
    const [startLocationLink, setStartLocationLink] = useState<string>('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [form] = Form.useForm();

    // /. hooks

    const onSubmit = (data: any): void => {
        setLoadingStatus(true);
        localStorage.setItem('storageIsUserAuth', JSON.stringify(true));
        // setTimeout(() => {
        //     setLoadingStatus(false);
        // }, 1900);

        setTimeout(() => {
            dispatch(
                signIn({ login: data.loginInput, password: data.passwordInput })
            );
            localStorage.setItem(
                'storageUserData',
                JSON.stringify({
                    login: data.loginInput,
                    password: data.passwordInput
                })
            );

            navigate(startLocationLink, { replace: true });
        }, 2000);
    };

    const onCheckboxChange = (): void => {
        dispatch(switchUserRememberedStatus(!isUserRemembered));
        localStorage.setItem(
            'storageIsUserRemembered',
            JSON.stringify(!isUserRemembered)
        );
    };

    // /. functions

    useEffect(() => {
        form.setFieldsValue({
            loginInput: login,
            passwordInput: password
        });
    }, [login, password, form]);

    useEffect(() => {
        const locationLink = location.state?.from?.pathname || '/';
        setStartLocationLink(locationLink);
    }, [location.state]);

    // /.effects

    return (
        <div className="section">
            <Form
                form={form}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: isUserRemembered
                }}
                onFinish={onSubmit}
            >
                <Form.Item
                    name="loginInput"
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
                        // defaultValue={isUserRemembered ? userName : ''}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="passwordInput"
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
                        // defaultValue={isUserRemembered ? password : ''}
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
                        <Checkbox
                            checked={isUserRemembered}
                            onChange={onCheckboxChange}
                        >
                            Remember me
                        </Checkbox>
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
