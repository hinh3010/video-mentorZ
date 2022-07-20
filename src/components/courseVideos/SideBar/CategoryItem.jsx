import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoryItem(props) {
    const { title, icon, link } = props.arr;
    return (
        <li className='item-categoty'>
            <NavLink
                activeClassName="active"
                to={link}
                className="nav-content-bttn open-font item-categoty-link active"
                data-tab="chats"
            >
                {icon}
                <span className='title' >{title}</span>
            </NavLink>
        </li>
    );
}

export default CategoryItem;