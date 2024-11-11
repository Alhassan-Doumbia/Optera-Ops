import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import OverView from "./view/OverView";
function Playground() {
  return (
    <div className="w-svw h-svh items-center justify-center">
      <section className="w-[500px] min-h-[300px] h-fit bg-blue-600">
            <Navbar></Navbar>
            <OverView></OverView>
      </section>
    </div>
  );
}

export default Playground;

