import React from 'react';

// /. imports

const ReactionTemplate: React.FC<{ emoji: string }> = ({ emoji }) => {
    return <li className="reactions__template">{emoji}</li>;
};

export default ReactionTemplate;
