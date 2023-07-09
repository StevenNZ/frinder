import React, { useEffect, useState } from 'react'
import { auth, db } from './Firebase'
import { ref, child, get } from "firebase/database";
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import Map from '../Map';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [hobbies, setHobbies] = useState([])

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                readData()
            } else {
                setAuthUser(null)
            }
        })
        return listen()
    },[name])

    const userSignOut = () => {
        signOut(auth).then(() => {
            setAuthUser(null)
            setEmail('')
            setPassword('')
            console.log("user signed out");
        }).catch(error => console.log(error))
    }

    const signIn = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
            
            setAuthUser(auth.currentUser);
            readData()
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const readData = () => {
        const dbRef = ref(db);
            get(child(dbRef, auth.currentUser.uid)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());

                const dbResults = snapshot.val()
                setName(dbResults.username)
                setAge(dbResults.age)
                setHobbies([])
                dbResults.hobbies.map((hobby) => {
                    setHobbies((prevHobbies) => [...prevHobbies, hobby.value])
                })
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
      }

  return (
    <div>
        {authUser 
        ? <>
          <p>{`Hello ${name} 👋`}</p> 
          <button onClick={userSignOut}>Sign Out</button> 
          <Map/>
          </>
            : <div>
            <h1>Sign In</h1>
            <form onSubmit={signIn}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Sign In</button>
            </form>
          </div>}
    </div>
  )
}

export default AuthDetails