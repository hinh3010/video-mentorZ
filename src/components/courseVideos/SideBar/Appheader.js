import React from 'react';
import { IconSearch } from '../../../assets/icons/IconSideBar';

function Appheader(props) {
    return (
        <div className="middle-sidebar-header   bg-white">
            <form action="#" className="float-left header-search middleSidebar__Search">
                <div className="form-group mb-0 icon-input"
                    style={{ paddingLeft: '14px', display: 'flex', alignItems: 'center' }}
                >
                    <IconSearch />
                    <div>
                        <input
                            type="text"
                            placeholder="Tìm kiếm thông tin tại đây"
                            className="middleSidebar__Search--input bg-transparent border-0 lh-32 pt-2 pb-2 pr-3 font-xsss fw-500 rounded-xl w350 search-herder"
                            style={{ color: '#FE9431', paddingLeft: '15px', flex: 1 }}
                        />
                    </div>
                    <div className="action"
                        style={{ paddingRight: '14px', display: 'flex', alignItems: 'center' }}
                    >

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Appheader;
