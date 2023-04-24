import React from 'react'
import ReactPaginate from 'react-paginate';
export default function StudentPagination() {
    const handlePageClick =()=>{
       console.log("clicked")
    }
  return (
    <ReactPaginate
    previousLabel={'<<'}
    nextLabel={'>>'}
    pageCount={'20'}
    breakLabel={'...'}
    marginPagesDisplayed={'2'}
    pageRangeDisplayed={'1'}
    onPageChange={handlePageClick}/>
  )
}

