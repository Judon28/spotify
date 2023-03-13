import React from "react";
import { GiColdHeart, GiGuitar, GiTrumpet } from "react-icons/gi";
import { HiStar  } from "react-icons/hi";
import { IoIosMusicalNote } from "react-icons/io";
import { CgPiano } from "react-icons/cg";
import nick from "./nicki.png";

export default function LeftSidebar() {
  return (
    <div className="lsb-container">
      <div className="title1">
        <h3>Shortcuts</h3>
      </div>

      <div className="shortcuts">
        <div className="sc">
          <div className="s1">
            <GiColdHeart color="rgb(121, 232, 219)" />
            <h6>Chill Hits</h6>
          </div>
  
          <div className="s2">
            <HiStar color ="gold"/>
            <h6>Hop</h6>
          </div>

        </div>

        <div className="sc">
          <div className="s3">
            <GiGuitar color="red"/>
            <h6>Accoustic</h6>
          </div>
  
          <div className="s4">
            <IoIosMusicalNote />
            <h6>Indie Pop</h6>
          </div>

        </div>

        <div className="sc">
          <div className="s5">
            <CgPiano />
            <h6>Piano Blues</h6>
          </div>
  
          <div className="s6">
            <GiTrumpet color="gold"/>
            <h6>Jazz</h6>
          </div>

        </div>

        
      </div>

      <div className="title2">
        <h3>Fav Artist</h3>
      </div>

      <div className="artists">
        <div className="a1">
          <img src="{nick}"/>
          <div className="txt">
            <h5>Taylor Swift</h5>
            <h6 className="art">196 songs in library</h6>
          </div>

          <div className="di-con">
            <div className="di"></div>
            <div className="di"></div>
          </div>
          
        </div>

        <div className="a1">
          <img src="{nicki}"/>
          <div className="txt">
            <h5>Kanye West</h5>
            <h6 className="art">124 songs in library</h6>
          </div>

          <div className="di-con">
            <div className="di"></div>
            <div className="di"></div>
          </div>
          
        </div>

        <div className="a1">
          <img src="{nicki}"/>
          <div className="txt">
            <h5>Drake</h5>
            <h6 className="art">50 songs in library</h6>
          </div>
          
          <div className="di-con">
            <div className="di"></div>
            <div className="di"></div>
          </div>
          
          
        </div>

        <div className="a1">
          <img src="{nicki}"/>
          <div className="txt">
            <h5>Billie Ellish</h5>
            <h6 className="art">15 songs in library</h6>
          </div>
          
          <div className="di-con">
            <div className="di"></div>
            <div className="di"></div>
          </div>
          
          
        </div>
        
        
      </div>

      <div className="left-btm">
        <div className="btm-pic">

          <img src="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg" width="235px" height="250px"/>
        
        </div>

        <div className="musician">
          <h4>Torisetsu</h4>
          <h5 className="tt1">Kana Nishino</h5>
        
        </div>
      </div>
      
    </div>
         
  );
}