import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AuthDetails from "./auth/AuthDetails";
import { auth, db } from "./auth/Firebase";
import { set, ref, update, push, child } from "firebase/database";

function App() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  let match1 = false;
  let match2 = false;
  const match3 = false;
  const match4 = false;

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

  function findCommonElements<T>(array1: T[], array2: T[]): boolean {
    const commonElements: T[] = array1.filter((item) => array2.includes(item));
    if (commonElements.length > 0) {
      console.log(true);
    }
    return true;
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

  function toggleModalWindow(){
    const ping = document.getElementById("ping");
    ping?.classList.toggle("invisible");
    console.log(ping?.classList)
  };

  // Example usage of latitude and longitude
  function handleButtonClick(): void {
    geoFindMe();

    const dbRef = ref(db, auth.currentUser?.uid + "/dist");

    update(dbRef, { latitude: latitude, longitude: longitude })
      .then(() => {
        console.log("Data updated successfully");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });

    if (latitude !== null && longitude !== null) {
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      // Call any functions or perform actions with latitude and longitude here
      // For example, you can calculate distance using the calculateDistance function

      const array1: string[] = ["Runing", "Music", "Cooking"];
      const array2: string[] = ["Music", "Cooking", "Gaming"];
      const array3: string[] = ["Bowling", "Yoga", "Gaming"];

      const distance = calculateDistance(
        latitude,
        longitude,
        -36.85266445831981,
        174.77014361986554
      );

      const commonElements: boolean = findCommonElements(array1, array2);

      if (distance < 20 && commonElements == true) {
        toggleModalWindow()
      }

      const distance1 = calculateDistance(
        latitude,
        longitude,
        -168.85266445831981,
        14.77014361986554
      );

      const commonElements1: boolean = findCommonElements(array1, array3);

      if (distance1 < 20 && commonElements1 == true) {
        match2 = true;
      }

      console.log("Distance:", distance);
    }
  }

  return (
    <div className="App">
      <AuthDetails />
      <button className="TouchBtn" id="find-me" onClick={handleButtonClick}>
        Touch Grass
      </button>
      <button className="SignUp">
        <Link to="/sign-up" target="_blank" >
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default App;

