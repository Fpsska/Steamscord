import React, { useEffect, useLayoutEffect, useState } from 'react';

import { Col, Spin, Result, Empty } from 'antd';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { switchFirstPageLoadingStatus } from 'app/slices/mainSlice';

import { useFilter } from 'utils/hook/useFilter';

import CommentsList from 'components/ui/Comment/CommentList';
import ChatHeader from 'components/layout/Chat/ChatHeader';
import ChatForm from 'components/layout/Chat/ChatForm';

// /. imports

interface propTypes {
    isLoading: boolean;
    isError: boolean;
}

// /. interfaces

const ChatPageFirst: React.FC<propTypes> = props => {
    const { isLoading, isError } = props;

    const { isFirstPageLoading } = useAppSelector(state => state.mainReducer);
    const { comments } = useAppSelector(state => state.profileReducer);

    const [isMobileErrorTemplate, setMobileErrorTemplate] =
        useState<boolean>(false);

    const { enteredSearchValue, setEnteredSearchValue, availableItems } =
        useFilter(comments, 'name');

    const dispatch = useAppDispatch();

    // /. hooks

    const centeredStyles: { [key: string]: string } = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    };

    // /. variables

    useEffect(() => {
        const validCondition = !isLoading && !isError;
        const cheker = setTimeout(() => {
            if (validCondition) {
                dispatch(switchFirstPageLoadingStatus(false));
            }
        }, 1300);

        return () => clearTimeout(cheker);
    }, [isLoading, isError]);

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
    }, []);

    // /. effects

    return (
        <>
            <ChatHeader
                channelName="NikitosXClub"
                channelMembersCount="1337"
                isError={isError}
                enteredSearchValue={enteredSearchValue}
                setEnteredSearchValue={setEnteredSearchValue}
                isPageInteractive={!isFirstPageLoading}
            />
            <div className="chat__section chat__section--main">
                {isFirstPageLoading ? (
                    <Spin
                        size="large"
                        style={centeredStyles}
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
                ) : availableItems.length === 0 ? (
                    <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={<span>no matches</span>}
                        style={centeredStyles}
                    />
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
