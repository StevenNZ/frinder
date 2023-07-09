import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from 'firebase/auth'
import { auth, db } from './auth/Firebase';
import { set, ref } from 'firebase/database';
import Select from 'react-select'



const Signup = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hobbies, setHobbies] = useState('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        set(ref(db, auth.currentUser.uid), {
          email: email,
          username: name,
          age: age,
          hobbies: hobbies
        });

        signOut(auth).then(() => {
          console.log("user signed out");
      }).catch(error => console.log(error))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const options = [
    { value: 'reading', label: 'Reading' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'bowling', label: 'Bowling' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'music', label: 'Music' },
    { value: 'running', label: 'Running' }
  ]

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={signUp}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type='number'
            id="age"
            min={1}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <Select
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e) =>
            setHobbies(e)
          }
          required
  />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;