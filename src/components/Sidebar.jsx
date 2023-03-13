import React from "react";
import { MdHomeFilled, MdOutlineDynamicFeed, MdTrendingUp, MdOutlineCalendarMonth, MdEmojiEvents, MdFavoriteBorder, MdOutlineStarBorder } from "react-icons/md";
import { AiOutlineWindows } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import logo from "./logo.png";
import Playlists from "./Playlists";


export default function Sidebar() {
  return (
    <div className="side-container">
      <div className="side-contents">
        <div className="image1"> 
          <img/>
        </div>
  
        <div className="image2"> 
          <img src={logo}/>
        </div>
  
        <div className="links">
          <ul>
            <li>
              <MdHomeFilled/>
              <span>Home</span>
            </li>
            <li>
              <MdTrendingUp/>
              <span>Trends</span>
            </li>
            <li>
              <MdOutlineDynamicFeed/>
              <span>Feeds</span>
            </li>
          </ul>
        </div>
  
        <div className="link2">
          <h6>Discover</h6>
          <ul>
            <li>
              <AiOutlineWindows/>
              <span>New and Notable</span>
            </li>
            <li>
              <MdOutlineCalendarMonth/>
              <span>Release Calendar</span>
            </li>
            <li>
              <MdEmojiEvents/>
              <span>Events</span>
            </li>
          </ul>
        </div>
  
        <div className="link3">
          <h6>Your Collection</h6>
          
          <ul>
            <li>
              <MdFavoriteBorder/>
              <span>Favourite Songs</span>
            </li>
            <li>
              <IoIosPeople/>
              <span>Artist</span>
            </li>
            <li>
              <MdOutlineStarBorder/>
              <Playlists />
            </li>
          </ul>
        </div>
  
        

      </div>  

      <div className="foot">
        <div>
          <img/>
        </div>

        <div>
          Ceptari Tyas
        </div>
      </div>
    </div>
  );
}