import "./App.css";
import Navbar from "./components/Navbar";
import CompanyList from "./components/CompanyList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    // <div className="app">
    //   <Navbar />
    //   <CompanyList />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <CompanyList />
            </>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <>
              <Navbar />
              <Detail />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
