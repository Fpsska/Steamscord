import React, { useEffect, useLayoutEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Col, Spin, Result, Empty } from 'antd';

import { switchFirstPageLoadingStatus } from 'app/slices/mainSlice';

import CommentsList from 'components/Comment/CommentList';
import ChatHeader from 'components/Chat/ChatHeader';
import ChatForm from 'components/Chat/ChatForm';

// /. imports

const ChatPageFirst = props => {
  const {
    enteredSearchValue,
    setEnteredSearchValue,
    availableItems,
    isLoading,
    isError
  } = props;

  const { isFirstPageLoading } = useSelector(state => state.mainReducer);

  // unlock route for only auth-d users

  const dispatch = useDispatch();

  useEffect(() => {
    const cheker =
      (!isLoading || isError) &&
      setTimeout(() => {
        dispatch(switchFirstPageLoadingStatus(false));
      }, 1300);

    return () => clearInterval(cheker);
  }, [isLoading]);

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
        isPageInteractive={!isFirstPageLoading}
        isError={isError}
      />
      <div className="chat__section chat__section--main">
        {isFirstPageLoading ? (
          <Spin
            size="large"
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
        ) : isError ? (
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}
          >
            {isMobileErrorTemplate ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                style={{ margin: '0 0 10px 0' }}
                description={'Sorry, something went wrong.'}
              />
            ) : (
              <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
              />
            )}
          </Col>
        ) : (
          <CommentsList availableItems={availableItems} />
        )}
      </div>
      <ChatForm
        isPageInteractive={!isFirstPageLoading}
        isError={isError}
      />
    </>
  );
};

export default ChatPageFirst;
