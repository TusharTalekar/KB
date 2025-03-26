import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import "./ProfilePageEdit.css";

export default function ProfilePageEdit() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "John Doe",
      email: "johndoe@example.com",
      phone: "+123456789",
      address: "123 Street, City",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsEditing(false);
    };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-yellow-400">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center">
        {
        // isEditing ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">User Information</h2>
            <label className="block text-left font-semibold">Upload Profile Photo</label>
            <input type="file" className="mb-4 w-full" />
            <label className="block text-left font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-3"
            />
            <label className="block text-left font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-3"
            />
            <label className="block text-left font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-3"
            />
            <label className="block text-left font-semibold">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-4"
            ></textarea>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600"><Link to="/profile">Submit</Link></button>
          </form>
        // ) : (
        //   <>
        //     <img
        //       src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        //       alt="React Logo"
        //       className="w-20 mx-auto mb-4"
        //     />
        //     <h2 className="text-lg font-semibold text-gray-800">{formData.fullName}</h2>
        //     <p className="text-gray-600">Phone: {formData.phone}</p>
        //     <p className="text-gray-600 mb-4">Address: {formData.address}</p>
        //     <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600">Edit Profile</button>
        //     <div className="flex justify-around mt-6">
        //       <div className="text-center">
        //         <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Cart" className="w-16 mx-auto" />
        //         <p className="text-gray-700 mt-2">View My Cart</p>
        //       </div>
        //       <div className="text-center">
        //         <img src="https://cdn-icons-png.flaticon.com/128/929/929564.png" alt="Wallet" className="w-16 mx-auto" />
        //         <p className="text-gray-700 mt-2">My Wallet</p>
        //       </div>
        //     </div>
        //     <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full mt-6 hover:bg-red-600">Logout</button>
        //   </>
        // )
        }
      </div>
    </div>
    </div>
  )
}
