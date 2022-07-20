import React from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/icons';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

const chatMember = [
    {
        imageUrl: 'user.png',
        name: 'Hurin Seary',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        name: 'Victor Exrixon',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        name: 'Surfiya Zakir',
        status: 'bg-warning',
    },
    {
        imageUrl: 'user.png',
        name: 'Goria Coast',
        status: 'bg-danger',
    },
    {
        imageUrl: 'user.png',
        name: 'Hurin Seary',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        name: 'David Goria',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        name: 'Seary Victor',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        name: 'Ana Seary',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        name: 'Hurin Seary',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        name: 'Victor Exrixon',
        status: 'bg-success',
    },
    {
        imageUrl: 'user.png',
        name: 'Surfiya Zakir',
        status: 'bg-warning',
    },
    {
        imageUrl: 'user.png',
        name: 'Goria Coast',
        status: 'bg-danger',
    },
];

function ListVideo(props) {

    const handleClick = (e) => {
        console.log(e)
    }
    return (
        <div className="section full mb-2 ">

            <ul className={`list-group list-group-flush scrollbar ${cx('list-video')}`} >

                <h2 className={cx("title-list-video")}>CHUYEN DE 1: SO THUC</h2>

                {chatMember.map((value, index) => (
                    <li
                        // className="bg-transparent list-group-item no-icon item-video"
                        className={`${cx('item-video')} list-group-item`} key={index}
                        onClick={(e) => handleClick(e)}
                    >
                        <div className={cx("title-video")}>
                            <img className={cx("icon-check")} src={images.check} alt="" />
                            <h3 className="h3 fw-700 ">Bai 1 : so thuc la gi ?</h3>
                            <img className={cx("icon-lock")} src={images.lock} alt="" />
                        </div>
                        <span className={cx("dotthree", "desc-video")}>
                            Commit chỉ branch master đã di chuyển đến vị trí giống với issue1. Merger này là merge fast-forward(chuyển tiếp nhanh).
                            Commit chỉ branch master đã di chuyển đến vị trí giống với issue1. Merger này là merge fast-forward(chuyển tiếp nhanh).
                        </span>
                        <div className={cx("status-video")}>
                            <img className={cx("icon-star")} src={images.star} alt="" />
                            <p>bai tets 1</p>
                        </div>
                        {/* <span
                                    className={`ms-auto btn-round-xss badge d-block p-0`}
                                ><img className="icon-lock" src={images.lock} alt="" /></span> */}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ListVideo;