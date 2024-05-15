import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footermeal from "./components/Footermeal";
import Navigationabar from "./components/Navigationabar";
import Nav from "./components/Nav";
import Sectiona from "./components/Sectiona";
import Sectionb from "./components/Sectionb";

function App() {
  return (
    <div className="App">
      <section className="">
        <Navigationabar />
        <Nav />
      </section>
      <Routes>
        <Route path="/" element={<Sectiona />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Sectionb />} />
      </Routes>
      <section className=""></section>
      <section className=""></section>
      <section className=""></section>
      <section className=""></section>
      <section className="">
        <Footermeal />
      </section>
    </div>
  );
}

export default App;
