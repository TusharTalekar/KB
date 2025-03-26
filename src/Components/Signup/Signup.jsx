import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-200 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <form className="flex flex-col gap-4">
          <div className="text-left">
            <label className="block text-gray-700 text-sm font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-700 text-sm font-semibold">Email</label>
            <input
              type="email"
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
            Create Account
          </button>
        </form>
        <div className="mt-4 text-sm">
          Already have an account?
            <Link to='/signin'>
           <div  className="text-blue-600 hover:underline">
            Sign In
            </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
