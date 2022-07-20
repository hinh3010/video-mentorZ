import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconConfession, IconMonHoc, IconQuanLy, IconTaiLieu, IconThiTuDo } from '../../../assets/icons/IconSideBar';
// import CategoryItem from './CategoryItem';
import './style.scss';

// const arrs = [
//     { id: 1, title: 'Môn học', icon: <IconMonHoc fill="white" />, link: '/default' }
// ]
function Categoty(props) {
    return (
        <>

            <div className="nav-caption fw-600 font-xssss text-grey-500 title-category">
                <span>Danh mục</span>
            </div>

            <ul className="mb-3 menu-category" >
                <li className="logo d-none d-xl-block d-lg-block"></li>

                <li className='item-categoty'>
                    <NavLink
                        activeClassName="active"
                        to="/default"
                        className="nav-content-bttn open-font item-categoty-link active"
                        data-tab="chats"
                    >
                        <IconMonHoc fill="white" />
                        <span className='title' >Môn học</span>
                    </NavLink>
                </li>

                <li className='item-categoty'>
                    <NavLink
                        activeClassName="active"
                        to="/default-follower"
                        className="nav-content-bttn open-font item-categoty-link"
                        data-tab="friends"
                    >
                        <IconTaiLieu />
                        <span className='title'>Tài Liệu học tập</span>
                    </NavLink>
                </li>

                <li className='item-categoty'>
                    <NavLink
                        activeClassName="active"
                        to="/default-channel"
                        className="nav-content-bttn open-font  item-categoty-link-2"
                        data-tab="favorites"
                    >
                        <IconQuanLy />
                        <span className='title'>Quản lý A+</span>
                    </NavLink>
                </li>

                <li className='item-categoty'>
                    <NavLink
                        activeClassName="active"
                        to="/default-live-stream"
                        className="nav-content-bttn open-font  item-categoty-link"
                        data-tab="favorites"
                    >
                        <IconThiTuDo />
                        <span className='title'>Thi tự do</span>
                    </NavLink>
                </li>
                <li className="flex-lg-brackets item-categoty">
                    <NavLink
                        activeClassName="active"
                        to="/default-user-profile"
                        data-tab="archived"
                        className="nav-content-bttn open-font item-categoty-link"
                    >
                        <IconConfession />
                        <span className='title'>Confesion</span>
                    </NavLink>
                </li>
            </ul>

        </>
    );
}

export default Categoty;