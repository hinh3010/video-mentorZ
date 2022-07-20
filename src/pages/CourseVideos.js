import React, { Component, Fragment } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

import Appfooter from '../components/Appfooter';
import SideBar from '../components/courseVideos/SideBar/SideBar';
import Appheader from '../components/courseVideos/SideBar/Appheader';
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
                        <Col lg={2} xs={0} >
                            <SideBar />
                        </Col>

                        <Col lg={10} xs={12}>
                            <div className="main-content" style={{ paddingLeft: 0 }} >
                                {/* <Appheader /> */}

                                <div style={{ margin: '35px 20px', width: '100%', padding: '0' }} className="middle-sidebar-bottom theme-dark-bg" >

                                    <Row>
                                        <Col xs={4}>
                                            <ListVideo />
                                            {/* <div style={{ width: '434px' }}>
                                                    <ListVideo />
                                                </div> */}
                                        </Col>

                                        <Col xs={8} style={{ paddingLeft: '5px' }}>
                                            <div style={{ flex: 1 }}>
                                                <Video />
                                                <Comment />
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                        </Col>

                        <Appfooter />
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default CourseVideos;
