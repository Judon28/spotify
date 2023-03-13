import React, {useEffect} from "react";
import {useStateProvider} from "../other/StateProvider";
import { ImFire } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

export default function Body() {
  const [{token, selectedPlaylistId}, dispatch] = useStateProvider();
  useEffect(() =>{
    const getInitialPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },    
      } 
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a") 
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({track}) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      console.log(selectedPlaylist);
      console.log(response.data);
    };
    getInitialPlaylist();
  }, [token, dispatch])
  
  return( 
    <div className="body-container">

      <div className="top">
        <div className="rt-top">
          <div className="rt1">
            <h5>Whats Hot</h5>
            <ImFire color="orange" />
          </div>

          <div className="rt2">
            <h1>Trending</h1>
          </div>
        </div>

        <div className="lt-top">
          <h5>More</h5>
          <IoIosArrowForward />
        </div>
      
      </div>

      <div className="middle">
      
      </div>

      <div className="bottom">
        <div className="bt-top">
          <div className="bt-rt">
            <h1>My Playlist</h1>
          </div>
          
          <div className="bt-lt">
            <h5>Show all</h5>
          </div>
        </div>
      </div>
    
    </div>
        
  );
}