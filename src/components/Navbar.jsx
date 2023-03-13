import React from "react";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import {  CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-arrows">
        <RxArrowLeft />
        <RxArrowRight/>
      </div>

      <div className="search-bar">
        <CiSearch />
        <input type="text" placeholder="Search for artist,songs and..."/>
      </div>
    
    </div>
         
  );
}