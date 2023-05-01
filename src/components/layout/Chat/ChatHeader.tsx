import React from 'react';

import { Row, Badge, Input, message } from 'antd';

import { BsStar } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiMoreVertical } from 'react-icons/fi';

import { useAppSelector } from 'app/hooks';

import './Chat.scss';

// /. imports

interface propTypes {
    enteredSearchValue?: string;
    setEnteredSearchValue?: (arg: string) => void;
    channelName?: string;
    channelMembersCount?: string;
    isPageInteractive?: boolean;
    isError?: boolean;
}

// /. interfaces

const ChatHeader: React.FC<propTypes> = props => {
    const {
        enteredSearchValue,
        setEnteredSearchValue = () => null,
        channelName = 'untitled',
        channelMembersCount = 0,
        isPageInteractive = false,
        isError
    } = props;

    const { isUserAuthorized } = useAppSelector(state => state.authReducer);

    const { Search } = Input;

    // /. hooks

    const isInputDisabled = !isUserAuthorized || !isPageInteractive || isError;

    // /. variables

    const errorNotification = (): void => {
        message.error('Function temporarily unavailable');
    };

    // /. functions

    return (
        <Row className="chat__header">
            <div className="chat__column chat__column--name">
                <span className="chat__name">{channelName}</span>
                <button
                    className="chat__button"
                    aria-label="add server to favourite"
                >
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
                    action="#"
                >
                    <Search
                        placeholder="Search by nickname.."
                        style={{ borderRadius: '5px' }}
                        disabled={isInputDisabled}
                        value={enteredSearchValue}
                        onChange={e => setEnteredSearchValue(e.target.value)}
                    />
                </form>
            </div>

            <div className="chat__column chat__column--notification">
                <button
                    className="chat__button"
                    aria-label="show notifications"
                >
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
                    aria-label="open settings"
                    onClick={errorNotification}
                >
                    <FiMoreVertical size={20} />
                </button>
            </div>
        </Row>
    );
};

export default ChatHeader;
