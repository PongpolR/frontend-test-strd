import "../styles/CompanyList.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Item from "./Item";

export default function CompanyList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    // const response = await fetch("https://stockradars.co/assignment/data.php");
    // const data = await response.json();
    // setData(data);
    axios.get("https://stockradars.co/assignment/data.php").then((response) => {
      setData(response.data);
      setTotalPages(Math.ceil(response.data.length / itemsPerPage));
    });
  }

  useEffect(() => {
    // const fetchDataList = async () => {
    //   await fetchData();
    // };
    // fetchDataList();

    // axios.get("https://stockradars.co/assignment/data.php").then((response) => {
    //   setData(response.data);
    //   setTotalPages(Math.ceil(response.data.length / itemsPerPage));
    // });

    fetchData();
  }, []);

  function searchList(e) {
    setCurrentPage(0);
    console.log(e);
    let find = data.filter((item) => {
      return item.N_fullname.includes(e);
    });
    console.log(find);
    setData(find);
    setTotalPages(Math.ceil(data.length / itemsPerPage));

    if (e === "") fetchData();
  }

  // console.log(data);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // const [search1, setSearch1] = useState();

  return (
    <div className="content">
      <div className="title">List Company With Market Capitalization</div>

      <input
        className="search"
        type="text"
        placeholder="&#xF002;  Search"
        // value={(e) => e.target.value}
        onChange={(e) => searchList(e.target.value)}
        style={{ fontFamily: "Poppins, FontAwesome" }}
      />

      {/* <div className="list">
        {data.map((item, id) => {
          return <div key={id}>{item.N_fullname}</div>;
        })}
      </div> */}
      {/* <MDBDataTable striped bordered small data={test} /> */}

      {subset.map((item, id) => (
        // <div className="item" key={item.id}>
        //   {item.N_fullname}
        // </div>
        <Item key={id} item={item} />
      ))}

      {/* <ReactPaginate
        breakLabel="..."
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        previousLabel={"<"}
        nextLabel={">"}
      /> */}

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
