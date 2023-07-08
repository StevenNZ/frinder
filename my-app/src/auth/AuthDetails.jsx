import React, { useEffect, useState } from 'react'
import { auth } from './Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Signin from '../Signin'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return listen()
    },[])

    const userSignOut = () => {
        signOut(auth).then(() => {
            setAuthUser(null)
            console.log("user signed out");
        }).catch(error => console.log(error))
    }

  return (
    <div>
        {authUser 
        ? <><p>{`Hello ${authUser.email} 👋`}</p> 
        <button onClick={userSignOut}>Sign Out</button> </>
            : <Signin/>}
    </div>
  )
}

export default AuthDetails