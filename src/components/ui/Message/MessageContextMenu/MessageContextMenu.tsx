import React from 'react';

import {
    MdOutlineAddReaction,
    MdOutlineModeEditOutline,
    MdOutlineReply,
    MdOutlineMoreHoriz
} from 'react-icons/md';

import { useAppDispatch } from 'app/hooks';

import { switchEditingMessageStatus } from 'app/slices/profileSlice';

import './message-context.scss';

// /. imports

interface propTypes {
    messageID: string;
    isEditable?: boolean;
}

// /. interfaces

const MessageContextMenu: React.FC<propTypes> = ({ messageID, isEditable }) => {
    const dispatch = useAppDispatch();

    // /. hooks

    const onEditButtonClick = (): void => {
        dispatch(
            switchEditingMessageStatus({
                payloadID: messageID,
                status: true
            })
        );
    };

    // /. functions

    const iconProperties: { [key: string]: string } = {
        size: '22',
        color: '#928e8e'
    };

    // /. variables

    return (
        <ul className="message-context">
            <li
                className="message-context__template"
                data-action="add reaction"
            >
                <button
                    className="message-context__button"
                    aria-label="add reaction"
                    type="button"
                >
                    <MdOutlineAddReaction
                        size={iconProperties.size}
                        color={iconProperties.color}
                    />
                </button>
            </li>
            <li
                className="message-context__template"
                data-action="reply"
            >
                <button
                    className="message-context__button"
                    aria-label="reply to message"
                    type="button"
                >
                    <MdOutlineReply
                        size={iconProperties.size}
                        color={iconProperties.color}
                    />
                </button>
            </li>
            <>
                {isEditable && (
                    <li
                        className="message-context__template"
                        data-action="edit"
                    >
                        <button
                            className="message-context__button"
                            aria-label="edit message body"
                            type="button"
                            onClick={onEditButtonClick}
                        >
                            <MdOutlineModeEditOutline
                                size={iconProperties.size}
                                color={iconProperties.color}
                            />
                        </button>
                    </li>
                )}
            </>
            <li
                className="message-context__template"
                data-action="more"
            >
                <button
                    className="message-context__button"
                    aria-label="show more actions"
                    type="button"
                >
                    <MdOutlineMoreHoriz
                        size={iconProperties.size}
                        color={iconProperties.color}
                    />
                </button>
            </li>
        </ul>
    );
};

export default MessageContextMenu;
