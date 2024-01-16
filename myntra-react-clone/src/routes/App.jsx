import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import HomeItem from "../components/HomeItem";
import "../index.css";
import FetchItems from "../components/FetchItems";

function App() {
  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
