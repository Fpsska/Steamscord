import React from 'react';

import { Iuser } from 'types/profileSliceTypes';

import CommentItem from './CommentItem';

import './Comment.scss';

// /. imports

const CommentsList: React.FC<{ availableItems: Iuser[] }> = ({
    availableItems
}) => {
    return (
        <div className="message">
            {availableItems.map((comment: Iuser) => {
                return (
                    <CommentItem
                        key={comment.steamid}
                        name={comment.personaname}
                        image={comment.avatarmedium}
                        time={new Date().toLocaleTimeString()}
                        {...comment}
                    />
                );
            })}
        </div>
    );
};

export default CommentsList;
