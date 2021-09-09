import React from 'react';
export default function Pagination({ totalPosts, postsPerPage, currentPage, paginate,}) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumber.push(i);
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="deneb_pagination text-center">
                    <ul>
                        {pageNumber.map(number=>(
                            <li key={number}><a 
                            href="!#" 
                                className={number === currentPage ? "active" : "pag-link" } 
                            onClick={(e)=>paginate(e,number)}>{number}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
