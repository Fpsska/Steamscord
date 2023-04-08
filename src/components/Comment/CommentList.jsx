import React from 'react';

import CommentItem from './CommentItem';

import './Comment.scss';

// /. imports

const CommentsList = ({ availableItems }) => {
  return (
    <div className="message">
      {availableItems.map(item => {
        return (
          <CommentItem
            key={item.steamid}
            name={item.personaname}
            image={item.avatarmedium}
            comment={item.comment}
            time={new Date().toLocaleTimeString()}
          />
        );
      })}
    </div>
  );
};

export default CommentsList;
