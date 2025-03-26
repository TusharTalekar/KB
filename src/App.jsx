import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import Signin from "./Components/Signin/Signin.jsx";
import Home from "./Components/Home/Home.jsx";
import CategoryPage from "./Components/CategoryPage/CategoryPage.jsx";
import ItemPage from "./Components/ItemPage/ItemPage.jsx";
import SignUp from "./Components/Signup/Signup.jsx";
import ProfilePage from "./Components/ProfilePage/ProfilePage.jsx";
import ProfilePageEdit from "./Components/ProfilePage/ProfilePageEdit.jsx";
import "./App.css";

const userInfo = {
  userName : {name : "Joe",profileImage :"./vite.svg",phoneNo:"34123490",address:"sjdnsdkl"}
}

const categories = [
  { name: "Books", image: "category1.png" },
  { name: "Electronics", image: "category2.png" },
  { name: "Clothing", image: "category3.png" },
  { name: "Furniture", image: "category4.png" }
];

const products = {
  // Books: [
  //   { name: "Dopamine Detox", price: "$70", image: "/dopamine_detox.png" },
  //   { name: "Physics H C Verma", price: "$90", image: "/physics_hc_verma.png" },
  //   { name: "Radheya", price: "$35", image: "/radheya.png" },
  //   { name: "Chemistry", price: "$80", image: "/chemistry.png" }
  // ]
  Books: {
    Dopamine_Detox : { name: "Dopamine Detox", price: "$70", image: "/dopamine_detox.png" },
    Physics_H_C_Verma : { name: "Physics H C Verma", price: "$90", image: "/physics_hc_verma.png" },
    Radheya : { name: "Radheya", price: "$35", image: "/radheya.png" },
    Chemistry : { name: "Chemistry", price: "$80", image: "/chemistry.png" }
  }

};

const App = () => {
  return (
    <>
      {/* <Home categories={categories} /> */}
      <Router>
        <Routes>
          {/* // <Route path="/" element={<Protectfuncrion>    <Home categories={categories}/>   </Protectfuncrion>}/>
          */}

          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/category/:categoryName" element={<CategoryPage products={products} />} />
          <Route path="/:categoryName/:productName" element={ <ItemPage products={products} /> }></Route>
          <Route path="/signin" element={ <Signin />}></Route>
          <Route path="/signup" element={ <SignUp />}></Route>
          <Route path="/profile" element={ <ProfilePage userInfo={userInfo} />} ></Route>
          <Route path="/profile/edit" element={ <ProfilePageEdit  />} ></Route>

        </Routes>
      </Router>
    </>
  );
};

export default App;
