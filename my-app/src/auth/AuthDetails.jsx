import React, { useEffect, useState } from "react";
import { auth, db } from "./Firebase";
import { ref, child, get } from "firebase/database";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import Map from "../Map";
import "./Auth.css";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        readData();
      } else {
        setAuthUser(null);
      }
    });
    return listen();
  }, [name]);

  function toggleModalWindow() {
    const ping = document.getElementById("ping");
    ping?.classList.toggle("invisible");
    console.log(ping?.classList);
  }

    const userSignOut = () => {
        signOut(auth).then(() => {
            setAuthUser(null)
            setEmail('')
            setPassword('')
            console.log("user signed out");
        }).catch(error => console.log(error))
      toggleModalWindow();
    }

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        setAuthUser(auth.currentUser);
        readData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const readData = () => {
    const dbRef = ref(db);
    get(child(dbRef, auth.currentUser.uid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());

          const dbResults = snapshot.val();
          setName(dbResults.username);
          setAge(dbResults.age);
          setHobbies([]);
          dbResults.hobbies.map((hobby) => {
            setHobbies((prevHobbies) => [...prevHobbies, hobby.value]);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Hello ${name} 👋`}</p>
          <button id="SignOut" onClick={userSignOut}>
            Sign Out
          </button>
          <Map />
        </>
      ) : (
        <div>
          <h1 className="SIN">Sign In</h1>
          <form onSubmit={signIn}>
            <div className="emailEntry">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="passEntry">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="signIn" type="submit">
              Sign In
            </button>
          </form>
        </div>
      )}

      <div id="ping" className="invisible">
        <h1>You pinged with Betty Lin! Check out your pings!</h1>
      </div>
    </div>
  );
};

export default AuthDetails;
