import React from 'react';

import CommentItem from './CommentItem';

import './Comment.scss';

const CommentsList = ({ availableItems }) => {
  return (
    <div className="message">
      {
        availableItems.map((item) => {
          return (
            <CommentItem
              key={item.steamid}
              name={item.personaname}
              image={item.avatarmedium}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!"
              time={new Date().toLocaleTimeString()}
            />
          );
        })
      }
    </div>
  );
};

export default CommentsList;
