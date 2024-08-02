import React, { useState } from "react";
import Input_Field from "../components/Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config/index";
import { useDispatch, useSelector } from "react-redux";
import { theme_toggle_dynamic } from "../store/slices/theme_slice";

const Signup = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const theme_mode = useSelector(data => data.theme.theme_mode)
  const change_handle = (e) => {
    const { value, id } = e.target;
    setData({ ...data, [id]: value });
  };

  const submit_handle = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
      });
  };

  return (
    <div className={`h-[100dvh] grid place-items-center px-3`}>
      <button onClick={() => dispatch(theme_toggle_dynamic())}>Mode</button>
      <form
        style={{backgroundColor : theme_mode}}
        onSubmit={submit_handle}
        className="bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2 gap-5"
      >
        <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
          <h1>SIGNUP</h1>
        </div>


        <div className="col-span-2 md:col-span-1">
          <Input_Field
            id="first_name"
            type="text"
            required={true}
            onChange={change_handle}
            placeholder="First Name"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input_Field
            id="last_name"
            type="text"
            required={true}
            onChange={change_handle}
            placeholder="Last Name"
          />
        </div>

        <div className="col-span-2">
          <Input_Field
            id="username"
            type="text"
            required={true}
            onChange={change_handle}
            placeholder="Username"
          />
        </div>
        <div className="col-span-2">
          <Input_Field
            id="phone_number"
            type="number"
            required={true}
            onChange={change_handle}
            placeholder="Phone Number"
          />
        </div>
        <div className="col-span-2">
          <Input_Field
            id="email"
            type="email"
            required={true}
            onChange={change_handle}
            placeholder="Email Address"
          />
        </div>
        <div className="col-span-2">
          <Input_Field
            id="password"
            required={true}
            onChange={change_handle}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="col-span-2">
          <Custom_Button type="submit">Signup</Custom_Button>
        </div>
        <div className="col-span-2 space-x-1 text-center">
          <span>Already have an account </span>
          <Link to="/login" className="underline text-primary_color">
            Login now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

