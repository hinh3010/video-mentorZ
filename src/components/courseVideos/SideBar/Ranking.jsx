import React from 'react';
import RankingItem from './RankingItem';
import './style.scss'

const arrs = [
    { id: 1, name: 'Hoang Ngoc Bich', description: 'Sinh vien', star: '5.0' },
    { id: 2, name: 'Hoang Ngoc Bich', description: 'Sinh vien', star: '5.0' },
    { id: 3, name: 'Hoang Ngoc Bich', description: 'Sinh vien', star: '5.0' },
    { id: 4, name: 'Hoang Ngoc Bich', description: 'Sinh vien', star: '5.0' },
]

function Ranking(props) {
    return (
        <>
            <div style={{ paddingLeft: '30px', marginBottom: '8px' }} className="nav-caption fw-600 font-xssss text-grey-500 title-ranking">
                <span>Bảng xếp hạng</span>
            </div>
            <ul className="mb-3 menu-ranking" style={{ padding: '0 10px 0 22px' }}>
                {arrs.map(arr => <RankingItem arr={arr} key={arr.id} />)}
            </ul>
        </>
    );
}

export default Ranking;