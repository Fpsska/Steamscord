import React from 'react';

import './section-separator.scss';

// /. imports

const DateSectionSeparator: React.FC<{ date: string }> = ({ date }) => {
    return (
        <div className="date-section-separator">
            <span>{date}</span>
        </div>
    );
};

export default DateSectionSeparator;
