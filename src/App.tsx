import "./App.css";
import Data from "./component/Data";
import Explore from "./component/Explore";
import { motion } from "framer-motion";

import TopItems from "./component/TopItems";
import bg from "./component/gettyimages-1471824251-612x612.jpg";
import Experience from "./component/Experience";
function App() {
  return (
    <>
      <div className="page">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">Panto</h1>
          <ul className="nav-links">
            <li>Furniture</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <div className="cart">
            👜<span className="badge">0</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Make Your Interior More <br /> Minimalistic & Modern
          </motion.h2>

          <p>
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed.
          </p>

          <div className="search-box">
            <input placeholder="Search furniture" />
            <button>🔍</button>
          </div>

          <img className="hero-image" src={bg} alt="Sofa" />
        </section>

        {/* Why Section */}
        <Data />
        <TopItems />
        <Experience/>
        <Explore />
      </div>
    </>
  );
}

export default App;
