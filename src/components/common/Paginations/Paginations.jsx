import React from 'react';


let Paginations = ({ totalUsersCount, pageSize, currentPage, onPageChange }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return <span
                    onClick={(e) => {
                        onPageChange(p)
                    }}> {p}
                </span>
            })}
        </div>
    )
}

export default Paginations; 