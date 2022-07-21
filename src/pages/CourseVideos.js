import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

import Appfooter from '../components/Appfooter';
import SideBar from '../components/courseVideos/SideBar/SideBar';
import ListVideo from '../components/courseVideos/ListVideo/index';
import Video from '../components/courseVideos/Video';
import Comment from '../components/courseVideos/Video/Comment';
import Header from '../components/courseVideos/Header';


class CourseVideos extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-wrapper">
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        {/* <SideBar /> */}

                        <Col lg={2} xs={0} md={0} sm={0}>
                            <SideBar />
                        </Col>

                        <Col lg={10} xs={12} md={12} sm={12} style={{ paddingLeft: 0 }}>

                            <div style={{ margin: '35px 20px 0 5px', width: '100%', padding: '0' }} className="middle-sidebar-bottom theme-dark-bg" >

                                <Row>
                                    <Col xs={3}>
                                        <ListVideo />
                                    </Col>

                                    <Col xs={9} style={{ paddingLeft: '5px' }}>
                                        <div style={{ flex: 1 }}>
                                            <Video />
                                            <Comment />
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                            {/* </div> */}
                        </Col>

                        <Appfooter />
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default CourseVideos;
