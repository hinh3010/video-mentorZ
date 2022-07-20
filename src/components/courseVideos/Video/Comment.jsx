import { Button } from 'react-bootstrap';
import React from 'react';
import { IconChat, IconLike, IconThreeDots } from '../../../assets/icons/IconComment';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Comment(props) {
    return (
        <div className={cx("comment-container")}>
            <textarea
                className="form-control bg-greylight 
                    h100
                " rows="5" placeholder="Write your message..."
            ></textarea>
            <div className={cx("comment-btn")}>
                <Button
                >  GUI </Button>
            </div>
            <div className={cx("comment-title")}>
                <span className={cx("title")}>Binh luan cua hoc sinh</span>
                <span>{`(3 cau tra loi)`}</span>
            </div>

            <ul className={cx("box-comment")}>

                <li className={cx("item-comment")}>
                    <div className={cx("item-img")} >
                        <img
                            src="assets/images/user.png"
                            alt="user"
                        />
                    </div>
                    <div className={cx("item-text")}>
                        <p className={cx("text-name")} >suhdnasjkbhcm, scs</p>
                        <p className={cx("text-time")}  >26/7/2022</p>
                        <span className={cx("text-message")}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                        </span>
                        <div className={cx("action")}>
                            <div>
                                <IconLike />
                                <span>
                                    Huu ich
                                </span>
                            </div>
                            <div>
                                <IconChat />
                                <span>
                                    Thao luan
                                </span>
                            </div>
                        </div>
                    </div>

                    <IconThreeDots className={cx("item-icon")} fill="#D9D9D9" />
                </li>

                <li className={cx("item-comment")}>
                    <div className={cx("item-img")} >
                        <img
                            src="assets/images/user.png"
                            alt="user"
                        />
                    </div>
                    <div className={cx("item-text")}>
                        <p className={cx("text-name")} >suhdnasjkbhcm, scs</p>
                        <p className={cx("text-time")}  >26/7/2022</p>
                        <span className={cx("text-message")}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                        </span>
                        <div className={cx("action")}>
                            <div>
                                <IconLike />
                                <span>
                                    Huu ich
                                </span>
                            </div>
                            <div>
                                <IconChat />
                                <span>
                                    Thao luan
                                </span>
                            </div>
                        </div>
                    </div>

                    <IconThreeDots className={cx("item-icon")} fill="#D9D9D9" />
                </li>

                <li className={cx("item-comment")}>
                    <div className={cx("item-img")} >
                        <img
                            src="assets/images/user.png"
                            alt="user"
                        />
                    </div>
                    <div className={cx("item-text")}>
                        <p className={cx("text-name")} >suhdnasjkbhcm, scs</p>
                        <p className={cx("text-time")}  >26/7/2022</p>
                        <span className={cx("text-message")}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Atque, totam temporibus nostrum nobis minus,
                            sed eum, sit est ut optio quia reprehenderit.
                            A ex pariatur eos sequi nemo soluta iure.
                        </span>
                        <div className={cx("action")}>
                            <div>
                                <IconLike />
                                <span>
                                    Huu ich
                                </span>
                            </div>
                            <div>
                                <IconChat />
                                <span>
                                    Thao luan
                                </span>
                            </div>
                        </div>
                    </div>

                    <IconThreeDots className={cx("item-icon")} fill="#D9D9D9" />
                </li>

            </ul>

        </div>
    );
}

export default Comment;