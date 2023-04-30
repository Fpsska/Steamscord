import React from 'react';

import placeholderIMG from 'assets/images/profile-main.png';

import CommentContextMenu from './CommentContextMenu/CommentContextMenu';

// /. imports

interface propTypes {
    id: string;
    name: string;
    comment: string;
    avatar: string;
    time: string;
}

// /. interfaces

const CommentItem: React.FC<propTypes> = ({
    id,
    name,
    comment,
    avatar,
    time
}) => {
    return (
        <div className="message__template">
            <img
                className="message__profile-image"
                src={avatar || placeholderIMG}
                alt="profile-avatar"
            />
            <div className="message__content">
                <div className="message__information">
                    <span className="message__name">{name}</span>
                    <span className="message__time">
                        {time} <b>{id}</b>
                    </span>
                </div>
                <p className="message__text">{comment}</p>
            </div>
            <CommentContextMenu />
        </div>
    );
};

export default CommentItem;
