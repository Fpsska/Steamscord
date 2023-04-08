import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Row, message } from 'antd';

import { BsMic, BsEmojiSmile, BsPaperclip } from 'react-icons/bs';

// /. imports

const ChatForm = ({ isPageInteractive = false, isError }) => {
  const { isAuthorized } = useSelector(state => state.authReducer);

  const formRef = useRef(!null);

  const errorNotification = () => {
    message.error('Function temporarily unavailable');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    formRef.current.reset();
  };

  return (
    <Row className="chat__section chat__section--bottom">
      <form
        className="form form--message"
        ref={formRef}
        onSubmit={e => onFormSubmit(e)}
      >
        <input
          className="form__input form__input--message"
          type="text"
          placeholder="Message in #general"
          disabled={!isAuthorized || !isPageInteractive || isError}
        />
        <div className="form__interaction">
          <button
            type="button"
            className="form__button form__button--message form__button--voice"
            onClick={errorNotification}
          >
            <BsMic
              size={20}
              color={'#b5b5b5'}
            />
          </button>
          <button
            type="button"
            className="form__button form__button--message form__button--file"
            onClick={errorNotification}
          >
            <BsPaperclip
              size={20}
              color={'#b5b5b5'}
            />
          </button>
        </div>
        <button
          type="button"
          className="form__button form__button--message form__button--emoji"
          onClick={errorNotification}
        >
          <BsEmojiSmile
            size={20}
            color={'#b5b5b5'}
          />
        </button>
      </form>
    </Row>
  );
};

export default ChatForm;
