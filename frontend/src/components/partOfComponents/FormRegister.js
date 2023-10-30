import React, { useState } from "react";
import image from "../../images/gambar.png";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as making an API call.

    // For example, you can use the email and password state variables.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="mt-[100px]">
      <div className="flex justify-center">
        <div className="shadow-xl bg-gray-900 text-center flex flex-row rounded-[20px]" style={{ height: "500px", width: "1000px" }}>
          <div>
            <img className="rounded-l-[20px]" src={image} alt="Gambar" />
          </div>
          <div className="flex mx-auto items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center">
                <h2 className="text-center font-bold text-4xl mb-5 text-white">Register Now</h2>
                <div className=" mx-[20px] flex flex-col mb-[10px]">
                  <label htmlFor="name" className=" font-semibold  mb-[3px] text-start text-white">
                    Name
                  </label>
                  <div>
                    <input type="name" className=" rounded-full h-[40px] w-[400px]" id="name" value={name} onChange={handlePasswordChange} required />
                  </div>
                </div>
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
                <div className=" mx-[20px] flex flex-col mb-[10px]">
                  <label htmlFor="confirm_Password" className=" font-semibold  mb-[3px] text-start text-white">
                    Confirm Password
                  </label>
                  <div>
                    <input type="password" className=" rounded-full h-[40px] w-[400px]" id="confirm_Password" value={confirmPassword} onChange={handlePasswordChange} required />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-5 w-[400px] mt-[20px]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
