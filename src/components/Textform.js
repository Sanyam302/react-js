import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("Enter Text here");

  const handleUpClick = (event) => {
    event.preventDefault(); // Prevent form submission reload
    setText("Sign up");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    props.showAlert("Converted to uppercase!", "success");
  };

  return (
    <>
      <div className={`flex justify-center items-center h-screen bg-${props.mode}`}>
        <form className={`bg-${props.mode} p-6 rounded shadow-md w-full max-w-sm`}>
          <h2 className={`text-2xl font-bold mb-6 text-${props.textform}`}>{text}</h2>

          <div className="mb-4">
            <label className={`block text-${props.textform} text-sm font-bold mb-2`} htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
          </div>

          <div className="mb-4">
            <label className={`block text-${props.textform} text-sm font-bold mb-2`} htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
          </div>

          <div className="mb-4">
            <label className={`block text-${props.textform} text-sm font-bold mb-2`} htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" onChange={handleOnChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
          </div>

          <div className="mb-6">
            <label className={`block text-${props.textform} text-sm font-bold mb-2`} htmlFor="confirm_password">Confirm Password</label>
            <input id="confirm_password" type="password" placeholder="Confirm your password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
          </div>

          <button type="submit" onClick={handleUpClick} className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </>
  );
}
