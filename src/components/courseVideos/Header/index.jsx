import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../../assets/icons';
import { IconSearch } from '../../../assets/icons/IconSideBar';
import './style.scss'
function Header(props) {
    return (
        <div className="header-container">
            <div className="header-logo">
                <Link to="/" >
                    <img src={images.Logo} alt="Logo" />
                </Link>
            </div>
            <div className="header-form-search">
                <form action="#" >
                    <div className="form-group mb-0 header-form-input"
                        style={{ paddingLeft: '14px', display: 'flex', alignItems: 'center' }}
                    >
                        <IconSearch />
                        <input
                            type="text"
                            placeholder="Tìm kiếm thông tin tại đây"
                            className="middleSidebar__Search--input bg-transparent border-0 lh-32 pt-2 pb-2 pr-3 rounded-xl w350 search-herder"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Header;