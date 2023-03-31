import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./component/Navbar";
import SectionComponent from "./component/Section";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
        <SectionComponent />
      </div>
    </>
  );
}

export default App;
