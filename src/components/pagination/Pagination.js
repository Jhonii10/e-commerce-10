import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";



const Pagination = ({currentPage,setCurrentPage,productsPerPage,totalProducts}) => {
     
    const pageNumbers = [];
    const totalPages = totalProducts / productsPerPage

  
    // limit the page number show

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    // paginate
    const paginate = (pageNumbers)=>{
        setCurrentPage(pageNumbers)
    } 

    // GO to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    // Show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  // GO to prev page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    // Show prev set of pageNumbers
    if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
    
    for (let index = 1; index <= Math.ceil(totalProducts / productsPerPage ); index++) {
        
        pageNumbers.push(index);

        
    }


    return (
        <PaginationContainer>
            <li 
            onClick={paginatePrev}
            className={currentPage === pageNumbers[0] ? 'hidden' : null}
            ><FaArrowLeft /></li>
            {
                pageNumbers.map((number)=>{

                    if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
                         return(
                        <li 
                            key={number}
                            onClick={()=>paginate(number)}
                            className={currentPage === number ? 'active' :null}
                        >
                            {number}
                        </li>
                        );

                    }else{
                        return null
                    }

                    
                })
            }
            <li 
            onClick={paginateNext}
            className={currentPage === pageNumbers.length ? 'hidden' : null}
            ><FaArrowRight /></li>
            <p>
                <b className='page'>{`Pagina  ${currentPage}`}</b>
                <span> de </span>
                <b>{Math.ceil(totalPages)}</b>

            </p>
            
        </PaginationContainer>
    );
}

export default Pagination;


const PaginationContainer = styled.ul`

  list-style: none;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  .hidden {
    display: none;
  }

  li {
    font-size: 1rem;
    border: 1px solid #ccc;
    min-width: 3rem;
    height: 3rem;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
  }
  p {
    margin-left: 1rem;
    .page {
      color: #8e0808;
    }
  }

.active {
  background-color: #8e0808;
  color: #fff;
}



`;
