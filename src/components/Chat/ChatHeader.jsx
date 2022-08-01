import React from 'react';
import { useSelector } from 'react-redux';

import { Row, Badge, Input, message } from 'antd';

import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiMoreVertical } from 'react-icons/fi';

import './Chat.scss';

const ChatHeader = (props) => {

  const {
    enteredSearchValue,
    setEnteredSearchValue = () => { },
    channelName = 'untitled',
    channelMembersCount = 0,
    contentVisible = true
  } = props;

  const { isInputActive, isFetching } = useSelector((state) => state.chatReducer);

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
          <AiOutlineStar size={20} />
        </button>
      </div>

      <div className="chat__column chat__column--user">
        <AiOutlineUser size={20} />
        <span className="chat__users">{channelMembersCount}</span>
      </div>

      <div className="chat__column chat__column--form">
        <form className="form" onSubmit={e => e.preventDefault()}>
          <Search
            placeholder="Search.."
            style={{ borderRadius: '5px' }}
            disabled={!isInputActive || isFetching || !contentVisible}
            value={enteredSearchValue}
            onChange={(e) => setEnteredSearchValue(e.target.value)}
          />
        </form>
      </div>

      <div className="chat__column chat__column--notification">
        <button className="chat__button">
          <Badge count={9} size="small">
            <IoNotificationsOutline size={20}/>
          </Badge>
        </button>
      </div>

      <div className="chat__column chat__column--settings">
        <button className="chat__button" onClick={errorNotification}>
          <FiMoreVertical size={20}/>
        </button>
      </div>
    </Row>
  );
};

export default ChatHeader;
