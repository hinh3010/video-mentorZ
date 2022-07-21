import { Button } from 'react-bootstrap';
import React from 'react';
import ReactPlayer from 'react-player';
import { IconBook } from '../../icon/IconSideBar';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Video(props) {
    return (
        <div className={cx("video-container")}>
            <h2 className="title">BAI 1 : SO THUC LA GI</h2>
            {/* <div className={`card border-0 mb-0 rounded-lg overflow-hidden ${cx('video')}`}> */}
            <ReactPlayer
                controls="true"
                width="100%"
                height="auto"
                className="react-player"
                playing
                url={`assets/images/video4.mp4`}
            />
            {/* </div> */}
            <div className={`${cx('content')}`}>
                {/* <div className={`card border-0 dark-bg-transparent bg-transparent ${cx('content')}`}> */}
                <h2>
                    Noi dung bai hoc
                </h2>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque, totam temporibus nostrum nobis minus,
                    sed eum, sit est ut optio quia reprehenderit.
                    A ex pariatur eos sequi nemo soluta iure.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque, totam temporibus nostrum nobis minus,
                    sed eum, sit est ut optio quia reprehenderit.
                    A ex pariatur eos sequi nemo soluta iure.
                </span>
                <Button className={cx("content-btn")}>
                    <IconBook />
                    <span>BAI TEST 1</span>
                </Button>
            </div>
        </div>
    );
}

export default Video;