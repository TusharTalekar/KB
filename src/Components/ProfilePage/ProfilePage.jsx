import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import "./ProfilePage.css";

export default function ProfilePage({userInfo}) {
  return (
    <div>
       <div className="flex items-center justify-center min-h-screen bg-yellow-400">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center">
        <img
          src={`${userInfo["userName"]["profileImage"]}`}
          alt="Profile Logo"
          className="w-20 mx-auto mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800">Name : {userInfo["userName"]["name"]}</h2>
        <p className="text-gray-600">Phone : {userInfo["userName"]["phoneNo"]}</p>
        <p className="text-gray-600 mb-4">Address : {userInfo["userName"]["address"]}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600"><Link to="/profile/edit">Edit Profile</Link></button>
        
        <div className="flex justify-around mt-6">
          <div className="text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Cart" className="w-16 mx-auto" />
            <p className="text-gray-700 mt-2">View My Cart</p>
          </div>
          {/* <div className="text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/929/929564.png" alt="Wallet" className="w-16 mx-auto" />
            <p className="text-gray-700 mt-2">My Wallet</p>
          </div> */}
        </div>
        
        <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full mt-6 hover:bg-red-600">Logout</button>
      </div>
    </div>
    </div>
  )
}
