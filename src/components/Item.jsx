/* eslint-disable react/prop-types */
import "../styles/Item.css";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { item, id } = props;

  return (
    <div className="list">
      <div className="detail">
        <div>
          <Link to={`/detail/${id.toLowerCase()}`} state={{ item: item }}>
            <h2>{item.N_fullname}</h2>
          </Link>

          <p>
            <span>Business Type:</span>{" "}
            {item.N_BUSINESS_TYPE_E.substring(0, 101)}
            {item.N_BUSINESS_TYPE_E.length > 101 ? "..." : ""}
          </p>
          <p>
            <span>Market Capitalization: </span>
            {item.marketcap == null
              ? "- "
              : item.marketcap.toLocaleString()}{" "}
            Baht
          </p>
        </div>
      </div>
    </div>
  );
}
