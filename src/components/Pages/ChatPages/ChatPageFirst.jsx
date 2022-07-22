import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Spin } from 'antd';

import { switchFetchingStatus } from '../../../app/store/chatSlice';

import CommentsList from '../../Comment/CommentList';
import ChatHeader from '../../Chat/ChatHeader';
import ChatForm from '../../Chat/ChatForm';

const ChatPageFirst = ({ availableItems, isError, isLoading }) => {

  const { isFetching } = useSelector(state => state.chatReducer);
  const { isAuthorized } = useSelector(state => state.authReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    isAuthorized && setTimeout(() => {
      dispatch(switchFetchingStatus(false));
    }, 1300);
    return () => {
      // clear Interval
    };
  }, [isAuthorized]);

  return (
    <>
      <ChatHeader
      // enteredSearchValue={enteredSearchValue}
      // setEnteredSearchValue={setEnteredSearchValue}
      />
      {isFetching ?
        <Spin
          size="large"
          style={{
            margin: 'auto'
          }}
        />
        :
        <CommentsList
          availableItems={availableItems}
          isLoading={isLoading}
          isError={isError}
        />
      }
      <ChatForm />
    </>
  );
};

export default ChatPageFirst;
