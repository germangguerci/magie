import React from 'react';
import './styles/categorys.css'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className={"pagination"}>
                {pageNumbers.map((number,index) => (
                <div key={index}>
                    <a onClick={ () => paginate(number) } className={"pageLink"}>
                    <button className={"pageItem"} style={{outline: "none"}}>
                    {number}
                    </button>
                </a>
                </div>  
                ) ) }
            </ul>
        </nav>
    )
}

export default Pagination