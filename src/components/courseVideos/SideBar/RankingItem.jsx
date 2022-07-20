import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../assets/icons';
import './style.scss'

function RankingItem(props) {
    const { name, description, star, avatar, rank } = props.arr;
    return (
        <li className="item-ranking" style={{ padding: '0', margin: '8px 0', height: '54px' }}>
            <Link
                style={{
                    padding: '0', margin: '0',
                }}
                to="/default-author-profile"
                className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto item-ranking-link"
                data-tab="chats"
            >
                <img
                    style={{ width: "38px", height: "38px" }}
                    // src={avatar}
                    src="assets/images/user.png"
                    alt="user"
                    className="w40 mr-2"
                />
                <div style={{ flex: 1 }}>
                    <p className="text name" >{name}</p>
                    <p className="text description"  >{description}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ paddingRight: '4px' }}>{star}</span>
                    <img src={images.star} alt="s" />
                </div>
            </Link>
        </li>
    );
}

export default RankingItem;