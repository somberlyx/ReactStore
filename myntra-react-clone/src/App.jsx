import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeItem from "./components/HomeItem";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="items-container">
          <HomeItem />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
