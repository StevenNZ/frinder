import React, { useState } from "react";
import "./App.css";

function App() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  function calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // distance in meters
    return d;
  }

  function geoFindMe(): void {
    const status: HTMLElement | null = document.querySelector("#status");
    const mapLink: HTMLAnchorElement | null =
      document.querySelector("#map-link");

    if (mapLink) {
      mapLink.href = "";
      mapLink.textContent = "";
    }

    function success(position: GeolocationPosition): void {
      const latitude: number = position.coords.latitude;
      const longitude: number = position.coords.longitude;

      setLatitude(latitude);
      setLongitude(longitude);

      if (status) {
        status.textContent = "";
      }

      if (mapLink) {
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        console.log(latitude, longitude);
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

  // Example usage of latitude and longitude
  function handleButtonClick(): void {
    geoFindMe();

    if (latitude !== null && longitude !== null) {
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      // Call any functions or perform actions with latitude and longitude here
      // For example, you can calculate distance using the calculateDistance function
      const distance = calculateDistance(
        latitude,
        longitude,
        -36.85266445831981,
        174.77014361986554
      );
      console.log("Distance:", distance);
    }
  }

  return (
    <div className="App">
      <button id="find-me" onClick={handleButtonClick}>
        Touch Grass
      </button>
      <p id="status">Click the button to get your location</p>
      <a id="map-link" target="_blank" rel="noopener noreferrer"></a>
      <iframe
        title="Map"
        width="100%"
        height="250"
        frameBorder={0}
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyB3we59Q0GEIedl8pE7jO9zeBSn9_OS5Z4&q=places+near+University+of+Auckland&center=-36.8526098, 174.7702446&zoom=15"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
