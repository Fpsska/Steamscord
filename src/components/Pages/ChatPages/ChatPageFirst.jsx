import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Spin, Result, Button } from 'antd';

import { switchFetchingStatus } from '../../../app/store/chatSlice';

import CommentsList from '../../Comment/CommentList';
import ChatHeader from '../../Chat/ChatHeader';
import ChatForm from '../../Chat/ChatForm';

const ChatPageFirst = (props) => {

  const {
    enteredSearchValue,
    setEnteredSearchValue,
    availableItems,
    isLoading,
    isError
  } = props;


  const { isFetching } = useSelector(state => state.chatReducer);
  const { isAuthorized } = useSelector(state => state.authReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const cheker = isAuthorized && !isLoading && setTimeout(() => {
      dispatch(switchFetchingStatus(false));
    }, 1300);

    return () => clearInterval(cheker);
  }, [isAuthorized, isLoading]);

  return (
    <>
      <ChatHeader
        enteredSearchValue={enteredSearchValue}
        setEnteredSearchValue={setEnteredSearchValue}
        channelName={'NikitosXClub'}
        channelMembersCount={1337}
        isPageInteractive={!isFetching}
        isError={isError}
      />
      <div className="chat__section chat__section--main">
        {isFetching ?
          <Spin
            size="large"
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
          :
          isError ?
            <div className="loading">
              <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={<Button type="primary">Refresh</Button>}
              />
            </div>
            :
            <CommentsList
              availableItems={availableItems}
            />
        }
      </div>
      <ChatForm isPageInteractive={!isFetching} isError={isError} />
    </>
  );
};

export default ChatPageFirst;
