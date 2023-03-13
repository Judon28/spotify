import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = () =>{
    const clientId = "50437326eb1b40cc883bc2d7e378cc78";
    const redirectUrl= "https://MusicApp.judon28.repl.co";
    const apiUrl= "https://accounts.spotify.com/authorize";
    const scope= [ "user-read-email", "user-read-private", "user-modify-playback-state", "user-read-playback-state", "user-read-currently-playing", "user-read-recently-played", "user-read-playback-position", "user-top-read",];
    
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join( " "
  )}&response_type=token&show_daialog=true`;
  };
  
  return <Container>
    <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotify"/>
    <button onClick={handleClick}>Connect Spotify</button>
  </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 97vh;
  width: 100%;
  background-color: black;
  gap: 5rem;
  img{
    height: 50vh;
  }
  button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;