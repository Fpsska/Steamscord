import React from 'react';

import { Ireaction } from 'types/profileSliceTypes';

import ReactionTemplate from './ReactionTemplate';

import './reaction.scss';

// /. imports

const ReactionsList: React.FC<{ reactions: Ireaction[] }> = ({ reactions }) => {
    return (
        <ul className="reactions">
            {reactions.map((reaction: Ireaction) => {
                return (
                    <ReactionTemplate
                        key={reaction.id}
                        {...reaction}
                    />
                );
            })}
        </ul>
    );
};

export default ReactionsList;
