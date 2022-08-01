import React, { useEffect, useLayoutEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Col, Spin, Result, Empty } from 'antd';

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

  const [isMobileErrorTemplate, setMobileErrorTemplate] = useState(false);

  useLayoutEffect(() => {
    const defineErrorTemplate = () => {
      if (window.innerWidth < 768 || window.innerHeight < 475) {
        setMobileErrorTemplate(true);
      } else if (window.innerWidth > 768 || window.innerHeight > 475) {
        setMobileErrorTemplate(false);
      }
    };

    window.addEventListener('resize', defineErrorTemplate);
    window.addEventListener('load', defineErrorTemplate);
    return () => {
      window.removeEventListener('resize', defineErrorTemplate);
      window.removeEventListener('load', defineErrorTemplate);
    };
  }, [isError]);

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
            <Col style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}>
              {isMobileErrorTemplate ?
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  style={{ margin: '0 0 10px 0' }}
                  description={'Sorry, something went wrong.'}
                />
                :
                <Result
                  status="500"
                  title="500"
                  subTitle="Sorry, something went wrong."
                />
              }
            </Col>
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
