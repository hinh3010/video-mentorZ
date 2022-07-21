import React, { Component, Fragment } from 'react';
import Appfooter from '../../../components/Appfooter';
import SideBar from '../components/SideBar/index';
import Video from '../components/Video'
import Comment from '../components/Video/Comment'
import ListVideo from '../components/ListVideo';
import Header from '../components/Header';
class Defaultcourseone extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-wrapper">
                    <SideBar />

                    <div className="main-content">
                        <Header />
                        <div className="middle-sidebar-bottom theme-dark-bg">
                            <div className="row">
                                <div className="col-xl-8 col-xxl-9"
                                    style={{ paddingLeft: "10px", paddingRight: "10px" }} >
                                    <Video />
                                    <Comment />
                                </div>
                                <div className="col-xl-4 col-xxl-3"
                                    style={{ paddingLeft: "10px", paddingRight: "10px" }} >
                                    <ListVideo />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Appfooter />
                </div>
            </Fragment>
        );
    }
}

export default Defaultcourseone;
