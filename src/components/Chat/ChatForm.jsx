import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Row, message } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import SvgTemplate from '../Common/SvgTemplate';

const ChatForm = ({ contentVisible = true }) => {

  const { isInputActive, isFetching } = useSelector((state) => state.chatReducer);

  const formRef = useRef(!null);

  const errorNotification = () => {
    message.error('Function temporarily unavailable');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };

  return (
    <Row className="chat__section chat__section--bottom">
      <form className="form form--message" ref={formRef} onSubmit={e => onFormSubmit(e)}>
        <input
          className="form__input form__input--message"
          type="text"
          placeholder="Message in #general"
          disabled={!isInputActive || isFetching || !contentVisible}
        />
        <div className="form__interaction">
          <button
            type="button"
            className="form__button form__button--message form__button--voice"
            onClick={errorNotification}
          >
            <span className="form__icon">
              <SvgTemplate id="microphone" />
            </span>
          </button>
          <button
            type="button"
            className="form__button form__button--message form__button--file"
            onClick={errorNotification}
          >
            <span className="form__icon">
              <SvgTemplate id="clip" />
            </span>
          </button>
        </div>
        <button
          type="button"
          className="form__button form__button--message form__button--emoji"
          onClick={errorNotification}
        >
          <span className="form__icon">
            <SmileOutlined />
          </span>
        </button>
      </form>
    </Row>
  );
};

export default ChatForm;
