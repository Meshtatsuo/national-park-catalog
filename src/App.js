import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

//import pages
import Landing from "./pages/Landing";
import Browse from "./pages/Browse";
import SingleView from "./pages/SingleView";
import About from "./pages/About";
//import components
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-green-900 w-full m-auto">
      <Router>
        <div className="container m-auto">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/about" element={<About />} />
            <Route path="/view/:id" element={<SingleView />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
