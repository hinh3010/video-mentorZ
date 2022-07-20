import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from '../../../assets/icons'
import Ranking from './Ranking';
import Account from './Account';
import Categoty from './Categoty';

class SideBar extends Component {
    render() {
        return (
            <nav className="sidebar-container scroll-bar">
                <div className="container pl-0 pr-0">
                    <div className="nav-content">

                        <div className="nav-top">
                            <Link to="/" style={{ padding: '0', margin: '0' }}>
                                <img src={images.Logo} alt="Logo" />
                            </Link>
                            {/* <Link to="/" className="close-nav d-inline-block d-lg-none">
                                <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i>
                            </Link> */}
                        </div>


                        <Categoty />

                        <div style={{ padding: '0 15px 26px 15px' }}>
                            <img src={images.Banner} alt="banner" />
                        </div>

                        <Ranking />

                        <Account />
                    </div>
                </div>
            </nav >

            // <nav className="navigation scroll-bar">
            //     <div className="container pl-0 pr-0">
            //         <div className="nav-content">

            //             <div className="nav-top">
            //                 <Link to="/" style={{ padding: '0', margin: '0' }}>
            //                     <img src={images.Logo} alt="Logo" />
            //                 </Link>
            //                 <Link to="/" className="close-nav d-inline-block d-lg-none">
            //                     <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 "></i>
            //                 </Link>
            //             </div>


            //             <Categoty />

            //             <div style={{ padding: '0 15px 26px 15px' }}>
            //                 <img src={images.Banner} alt="banner" />
            //             </div>

            //             <Ranking />

            //             <Account />
            //         </div>
            //     </div>
            // </nav >
        );
    }
}

export default SideBar;
