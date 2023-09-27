import "../styles/CompanyList.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Item from "./Item";

export default function CompanyList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    axios.get("https://stockradars.co/assignment/data.php").then((response) => {
      setData(response.data);
      setTotalPages(Math.ceil(response.data.length / itemsPerPage));
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [search, setSearch] = useState("");

  const filteredNames = data.filter((name) =>
    name.N_fullname.trim().toLowerCase().includes(search.trim().toLowerCase())
  );

  let subset = filteredNames;

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  subset = filteredNames.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="content">
      <div className="title">Company List with Market Capitalization</div>

      <input
        className="search"
        type="text"
        placeholder="&#xF002;  Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(0);
        }}
        style={{ fontFamily: "Poppins, FontAwesome" }}
      />

      {subset.map((item, id) => (
        <Item key={id} item={item} id={item.N_name} />
      ))}

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        selectedPageRel={currentPage}
      />
    </div>
  );
}
