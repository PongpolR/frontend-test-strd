/* eslint-disable react/prop-types */
import "../styles/Item.css";

export default function Item(props) {
  const { item } = props;
  console.log(item);

  return (
    <div className="list">
      <div className="detail">
        <div>
          <h2>{item.N_fullname}</h2>
          <p>
            <span>Business Type:</span>{" "}
            {item.N_BUSINESS_TYPE_E.substring(0, 101)}
            {item.N_BUSINESS_TYPE_E.length > 101 ? "..." : ""}
          </p>
          <p>
            <span>Market Capitalization: </span>
            {item.marketcap == null ? "- " : item.marketcap} Baht
          </p>
        </div>
      </div>
    </div>
  );
}
