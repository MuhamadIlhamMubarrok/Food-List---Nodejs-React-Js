import React, { useState } from "react";
import image from "../../images/gambar.png";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as making an API call.

    // For example, you can use the email and password state variables.
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className=" mt-[100px]">
      <div className="row justify-center">
        <div className="flex justify-center">
          <div className="shadow-2xl bg-gray-900 text-center flex flex-row rounded-[20px]" style={{ height: "500px", width: "1000px" }}>
            <div className="">
              <img className="rounded-s-[20px]" src={image} alt="Gambar" />
            </div>
            <div className="flex mx-auto items-center">
              <form onSubmit={handleSubmit}>
                <div className=" flex flex-col justify-center">
                  <h2 className="text-center font-bold text-[40px] mb-[30px] text-white">Welcome Back</h2>
                  <div className=" mx-[20px] mb-[10px] flex flex-col">
                    <label htmlFor="email" className=" font-semibold text-start mb-[3px] text-white">
                      Email Address
                    </label>
                    <div className="">
                      <input type="email" className=" rounded-full h-[40px] w-full" id="email" value={email} onChange={handleEmailChange} required autoFocus />
                    </div>
                  </div>
                  <div className=" mx-[20px] flex flex-col mb-[10px]">
                    <label htmlFor="password" className=" font-semibold  mb-[3px] text-start text-white">
                      Password
                    </label>
                    <div>
                      <input type="password" className=" rounded-full h-[40px] w-[400px]" id="password" value={password} onChange={handlePasswordChange} required />
                    </div>
                  </div>
                  <Link to="/register">
                    <p className="text-[#00D8FF] text-start mb-[30px] ml-[20px]">Lets Register Now !</p>
                  </Link>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[400px] ml-[20px]"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
