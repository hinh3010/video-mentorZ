import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconConfession, IconMonHoc, IconQuanLy, IconTaiLieu, IconThiTuDo } from '../../../assets/icons/IconSideBar';
import './style.scss';

function Categoty(props) {
    return (
        <div>

            <div className="title-category">
                <span>Danh mục</span>
            </div>

            <ul className="menu-category" >
                <li className='item-categoty '>
                    <NavLink
                        activeClassName="active"
                        to="/default"
                        className="item-categoty-link "
                        data-tab="chats"
                    >
                        <IconMonHoc />
                        <span>Môn học</span>
                    </NavLink>
                </li>

                <li className='item-categoty'>
                    <NavLink
                        activeClassName="active"
                        to="/default-follower"
                        className="item-categoty-link "
                        data-tab="friends"
                    >
                        <IconTaiLieu />
                        <span>Tài Liệu học tập</span>
                    </NavLink>
                </li>

                <li className='item-categoty'>
                    <NavLink
                        activeClassName="active"
                        to="/default-channel"
                        className="item-categoty-link"
                        data-tab="favorites"
                    >
                        <IconQuanLy />
                        <span >Quản lý A+</span>
                    </NavLink>
                </li>

                <li className='item-categoty'>
                    <NavLink
                        activeClassName="active"
                        to="/default-live-stream"
                        className=" item-categoty-link"
                        data-tab="favorites"
                    >
                        <IconThiTuDo />
                        <span>Thi tự do</span>
                    </NavLink>
                </li>
                <li className="item-categoty">
                    <NavLink
                        activeClassName="active"
                        to="/default-user-profile"
                        data-tab="archived"
                        className="item-categoty-link"
                    >
                        <IconConfession />
                        <span >Confesion</span>
                    </NavLink>
                </li>
            </ul>

        </div>
    );
}

export default Categoty;