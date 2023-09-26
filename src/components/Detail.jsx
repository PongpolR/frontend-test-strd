/* eslint-disable react/prop-types */
import "../styles/Detail.css";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const { item } = location.state;
  console.log(item);
  return (
    <div className="test1">
      <div className="test">{item.N_fullname}</div>
      <div className="test">{item.N_BUSINESS_TYPE_E}</div>
      <div className="test">{item.N_URL}</div>
      <div className="test">{item.marketcap}</div>
    </div>
  );
}
