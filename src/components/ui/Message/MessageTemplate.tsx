import React from 'react';

import placeholderIMG from 'assets/images/profile-main.png';

import CommentContextMenu from './MessageContextMenu/MessageContextMenu';

// /. imports

interface propTypes {
    id: string;
    name: string;
    comment: string;
    avatar: string;
    time: string;
}

// /. interfaces

const MessageTemplate: React.FC<propTypes> = ({
    id,
    name,
    comment,
    avatar,
    time
}) => {
    return (
        <div className="messages__template">
            <img
                className="messages__profile-image"
                src={avatar || placeholderIMG}
                alt="profile-avatar"
            />
            <div className="messages__content">
                <div className="messages__information">
                    <span className="messages__name">{name}</span>
                    <span className="messages__time">
                        {time} <b>ID:{id}</b>
                    </span>
                </div>
                <p className="messages__text">{comment}</p>
            </div>
            <CommentContextMenu />
        </div>
    );
};

export default MessageTemplate;
