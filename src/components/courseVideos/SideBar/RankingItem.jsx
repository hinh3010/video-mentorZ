import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../assets/icons';
import './style.scss'

function RankingItem(props) {
    const { name, description, star, avatar, rank } = props.arr;
    return (
        <li className="item-ranking">
            <Link
                to="/default-author-profile"
                className="item-ranking-link"
                data-tab="chats"
            >
                <img
                    style={{ width: "38px", height: "38px" }}
                    src="assets/images/user.png"
                    alt="user"
                    className="w40 mr-2"
                />
                <div className="item-ranking-text">
                    <p className="text name" >{name}</p>
                    <p className="text description"  >{description}</p>
                </div>
                <div className="item-ranking-star" >
                    <span >{star}</span>
                    <img src={images.star} alt="s" />
                </div>
            </Link>
        </li>
    );
}

export default RankingItem;