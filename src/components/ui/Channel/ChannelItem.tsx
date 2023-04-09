import React from 'react';

import { NavLink } from 'react-router-dom';

// /. imports

interface propTypes {
    name: string;
    link: string;
}

// /. interfaces

const ChannelItem: React.FC<propTypes> = ({ name, link }) => {
    return (
        <li className="channels__item">
            <NavLink
                className="channels__link"
                to={link}
            >
                {name}
            </NavLink>
        </li>
    );
};

export default ChannelItem;
