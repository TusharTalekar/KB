import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import React from 'react';
import "./Signin.css";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-200 p-6">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center">
      <h2 className="text-2xl font-bold mb-4">Sign-In</h2>
      <form className="flex flex-col gap-4">
        <div className="text-left">
          <label className="block text-gray-700 text-sm font-semibold">Email or mobile phone number</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="text-left">
          <label className="block text-gray-700 text-sm font-semibold">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <button className="bg-yellow-500 text-black font-semibold py-2 rounded-lg border border-black hover:bg-yellow-600">
          Sign In
        </button>
      </form>
      <div className="mt-4 text-sm">
        New User?
         <div className="text-blue-600 hover:underline">
        <Link to="/signup" >
            Create your account
         </Link>
         </div>
      </div>
    </div>
  </div>
  )
}
