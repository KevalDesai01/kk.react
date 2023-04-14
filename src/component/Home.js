import React from "react";

import Navbar from "./NAvbar";


const Home = (props) => {
  return (
    <div>
        <Navbar/>
        <div className="home">
            <h1>Home {props.name}</h1>
        </div>



    </div>
  )
}

export default Home;