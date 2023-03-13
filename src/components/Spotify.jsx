import React, {useEffect} from "react";
import {useStateProvider} from "../other/StateProvider";
import {reducerCases} from "../other/Constants";
import Footer from "./Footer";
import Body from "./Body";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import LeftSidebar from "./LeftSidebar";
import './Spotify.css';
import axios from "axios";


export default function Spotify() {
  /*const [{token }, dispatch] = useStateProvider();

  useEffect(() => {
    const getUserInfo= async () => {
      const {data} = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
      });
      const userInfo= {
        userId: data.id,
        userName: data.display_name,
    };  
    dispatch({ type: reducerCases.SET_USER, userInfo})
    };
    getUserInfo();
  }, [dispatch, token]);*/
  
  return( 
    <div className= "container">
      <div className="spotify-body">
        
        <Sidebar />
        <div className="body">
          <div>
            <Navbar />
          </div>
          
          <div className="body-contents">
            <Body />
          </div>
        </div>

        <div className="left">
          <LeftSidebar />
        </div>
      
      </div>

      
    </div>
  )
}