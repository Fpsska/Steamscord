import React, { useEffect, useRef } from 'react';

import { useAppSelector } from 'app/hooks';

import { Icomment } from 'types/profileSliceTypes';

import CommentItem from './CommentItem';

import './Comment.scss';

// /. imports

const CommentsList: React.FC<{ availableItems: Icomment[] }> = ({
    availableItems
}) => {
    const { isCommentCreated } = useAppSelector(state => state.profileReducer);

    const commentsListRef = useRef<HTMLDivElement>(null!);

    // /. hooks

    useEffect(() => {
        commentsListRef.current.scrollTo({
            top: commentsListRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }, [isCommentCreated]);

    // /. effects

    return (
        <div
            className="message"
            ref={commentsListRef}
        >
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
