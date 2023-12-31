import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-bg">
      <Link
        to={`/`}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <div className="logo">StockRadars</div>
      </Link>

      <div className="menu">
        <Link
          to={`/`}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <div className="home">Home</div>
        </Link>
        <Link to={`/register`}>
          <div>Register</div>
        </Link>
      </div>
    </div>
  );
}
