import React from "react";
import TextShpere from "./Wheel";

const Home = () =>{
    return(
        <>
        <div className="home">
      <div className="hey_iam">Hey, I'm </div>
      <div className="my_detail">
      <div className="myName">
        <p>Prajwal</p>
        <p>Lokhande</p>
      </div>
      <div className="Myintro">
        <TextShpere className="vector1"/>
      </div>
      </div>
      </div>
        </>
    )
}
export default Home;