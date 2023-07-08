import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes ,Route, Link } from 'react-router-dom';
import SignUp from './Signup';


function App() {

  function geoFindMe(): void {
    const status: HTMLElement | null = document.querySelector("#status");
    const mapLink: HTMLAnchorElement | null = document.querySelector("#map-link");
  
    if (mapLink) {
      mapLink.href = "";
      mapLink.textContent = "";
    }
  
    function success(position: GeolocationPosition): void {
      const latitude: number = position.coords.latitude;
      const longitude: number = position.coords.longitude;
  
      if (status) {
        status.textContent = "";
      }
  
      if (mapLink) {
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      }
    }
  
    function error(): void {
      if (status) {
        status.textContent = "Unable to retrieve your location";
      }
    }
  
    if (!navigator.geolocation) {
      if (status) {
        status.textContent = "Geolocation is not supported by your browser";
      }
    } else {
      if (status) {
        status.textContent = "Locating…";
      }
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  
  const findMeButton: HTMLButtonElement | null = document.querySelector("#find-me");
  if (findMeButton) {
    findMeButton.addEventListener("click", geoFindMe);
  }
  
  return (
    <div className="App">
      <button id="find-me" onClick={geoFindMe}>
        Find My Location
      </button>
      <p id="status">Click the button to get your location</p>
      <a id="map-link" target="_blank" rel="noopener noreferrer"></a>
      <Link to="/sign-up" target="_blank">Open New Tab</Link>
    </div>
  );
}

export default App;
