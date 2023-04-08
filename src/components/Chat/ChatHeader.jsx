import React from 'react';
import { useSelector } from 'react-redux';

import { Row, Badge, Input, message } from 'antd';

import { BsStar } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiMoreVertical } from 'react-icons/fi';

import './Chat.scss';

const ChatHeader = props => {
  const {
    enteredSearchValue,
    setEnteredSearchValue = () => null,
    channelName = 'untitled',
    channelMembersCount = 0,
    isPageInteractive = false,
    isError
  } = props;

  const { isAuthorized } = useSelector(state => state.authReducer);

  const { Search } = Input;
  //
  const errorNotification = () => {
    message.error('Function temporarily unavailable');
  };
  //
  return (
    <Row className="chat__section chat__section--top">
      <div className="chat__column chat__column--name">
        <span className="chat__name">{channelName}</span>
        <button className="chat__button">
          <BsStar size={20} />
        </button>
      </div>

      <div className="chat__column chat__column--user">
        <BiUser size={20} />
        <span className="chat__users">{channelMembersCount}</span>
      </div>

      <div className="chat__column chat__column--form">
        <form
          className="form"
          onSubmit={e => e.preventDefault()}
        >
          <Search
            placeholder="Search.."
            style={{ borderRadius: '5px' }}
            disabled={
              !isAuthorized || !isPageInteractive || isError
            }
            value={enteredSearchValue}
            onChange={e => setEnteredSearchValue(e.target.value)}
          />
        </form>
      </div>

      <div className="chat__column chat__column--notification">
        <button className="chat__button">
          <Badge
            count={9}
            size="small"
          >
            <IoNotificationsOutline size={20} />
          </Badge>
        </button>
      </div>

      <div className="chat__column chat__column--settings">
        <button
          className="chat__button"
          onClick={errorNotification}
        >
          <FiMoreVertical size={20} />
        </button>
      </div>
    </Row>
  );
};

export default ChatHeader;
