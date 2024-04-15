import { useState } from "react";
import Pagination from ".";
import "./pagination.css";

function PaginationTest() {
  const dummydata = Array.from({ length: 100 }, (_,index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  console.log(dummydata);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1)

  function handlePageChange(currentPage){
    setCurrentPage(currentPage)
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummydata.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentListOfItems, indexOfFirstItem, indexOfLastItem);

  return (
    <div>
        <h1>Pagination</h1>
        <ul className="list-items">
            {
                currentListOfItems.map(listItem=> <li key={listItem.id}>{listItem.name}</li>)
            }
        </ul>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(dummydata.length / itemsPerPage)} onPageChange={handlePageChange}/>

    </div>
  );
}

export default PaginationTest;
