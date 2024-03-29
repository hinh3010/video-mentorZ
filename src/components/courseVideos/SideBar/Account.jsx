import React from 'react';
import { Link } from 'react-router-dom';
import { IconSetTing } from '../../../assets/icons/IconSideBar';

function Account(props) {
    return (
        <>
            <div className="title-account">
                <span>Tài khoản</span>
            </div>
            <ul className=" menu-account">
                <li className="item-account">
                    <Link
                        to="/default-settings"
                        className="item-account-link"
                    >
                        <IconSetTing />
                        <span >Cài đặt</span>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Account;