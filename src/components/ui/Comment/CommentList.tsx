import React from 'react';

import { Icomment } from 'types/profileSliceTypes';

import CommentItem from './CommentItem';

import './Comment.scss';

// /. imports

const CommentsList: React.FC<{ availableItems: Icomment[] }> = ({
    availableItems
}) => {
    return (
        <div className="message">
            {availableItems.map((comment: Icomment) => {
                return (
                    <CommentItem
                        key={comment.id}
                        time={comment.dateOfCreate}
                        {...comment}
                    />
                );
            })}
        </div>
    );
};

export default CommentsList;
