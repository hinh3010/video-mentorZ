import React from 'react';
import { Link } from 'react-router-dom';
import { IconSetTing } from '../../../assets/icons/IconSideBar';

function Account(props) {
    return (
        <>
            <div style={{ paddingLeft: '35px', marginBottom: '10px' }} className="nav-caption fw-600 font-xssss text-grey-500 title-account">
                <span>Tài khoản</span>
            </div>
            <ul className="mb-3 menu-account">
                <li>
                    <Link
                        to="/default-settings"
                        className="nav-content-bttn open-font h-auto pt-2 pb-2 item-account"
                    >
                        <IconSetTing />
                        <span style={{ color: '#888' }} className="text" >Cài đặt</span>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Account;