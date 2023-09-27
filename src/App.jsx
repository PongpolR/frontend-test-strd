import "./App.css";
import Navbar from "./components/Navbar";
import CompanyList from "./components/CompanyList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";
import Register from "./components/Register";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: "50px",
  transition: transitions.SCALE,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
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
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Register />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
