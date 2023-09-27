/* eslint-disable react/prop-types */
import "../styles/Detail.css";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const { item } = location.state;
  console.log(item);
  return (
    <div className="container">
      <div className="com-detail">
        <h1 className="com-name">{item.N_fullname}</h1>
        <div>
          <span>Short Name: </span>
          {item.N_shortname != null ? `${item.N_shortname} - ` : ""}{" "}
          {item.N_name}
        </div>
        <div>
          <span>Business Type: </span>
          {item.N_BUSINESS_TYPE_E}
        </div>
        <div>
          <span>Market Capitalization: </span>
          {item.marketcap == null
            ? "-"
            : `${item.marketcap.toLocaleString()} Baht`}
        </div>
        <div>
          <span>Website: </span>
          {item.N_URL.includes("http") ? (
            <a href={item.N_URL} target="blank">
              {item.N_URL}
            </a>
          ) : (
            <a href={`//${item.N_URL}`} target="blank">
              {item.N_URL}
            </a>
          )}{" "}
        </div>
      </div>
    </div>
  );
}
