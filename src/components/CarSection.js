import React, { useState } from 'react';
import CarList from './CarList'; // Assuming you have a component called CarList
import "./CarList.css"
function CarSection(props) {
  const itemPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const rows = props.product.slice(currentPage * itemPerPage, (currentPage + 1) * itemPerPage);
  const numberOfPage = Math.ceil(props.product.length / itemPerPage)
  const pageIndex = Array.from({ length: numberOfPage }, (_, idx) => idx + 1)
  const handlePerChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  let dataToBeSearch = props.searchValue;
  return (
    <div className='cart-Section'>
      {rows.map((row, i) => {
        if (dataToBeSearch === "") {
          return <CarList rows={row} i={i} key={i} />;
        } else if(row.title.toLowerCase().includes(dataToBeSearch.toLowerCase())){
          return <CarList rows={row} i={i} key={i} />;
        }
        return null; // Exclude cars that do not match the search query
      })}
      <div>
        <button disabled={currentPage < 1} onClick={() => handlePerChange(currentPage - 1)}>&lt;</button>
        {pageIndex.slice(Math.max(0, currentPage - 2), Math.min(numberOfPage, currentPage + 1)).map(page => <button onClick={() => handlePerChange(page)} key={page} className={page === currentPage ? "active" : ""}>{page}</button>)}
        <button disabled={currentPage >= numberOfPage - 1} onClick={() => handlePerChange(currentPage + 1)}>&gt;</button>
      </div>
    </div>
  );
}

export default CarSection;