import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { useRef } from "react";
import "./Home.css";

const Home = (props) => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="font-sans" style={{position:"relative"}}>
            <nav className="navbar flex justify-between items-center p-4 shadow-md sticky top-0 left-0 ">
                <div className="font-bold text-xl">KB</div>
                <div className="space-x-4">
                    <Link to="/" onClick={() => {homeRef.current?.scrollIntoView({ behavior: "smooth" })}}>HOME</Link>
                    <Link to="/" onClick={() => {aboutRef.current?.scrollIntoView({ behavior: "smooth" })}}>About us</Link>
                    <Link to="/" onClick={() => {contactRef.current?.scrollIntoView({ behavior: "smooth" })}}>Contact us</Link>
                    <Link to="/profile" >Profile</Link>
                    <Link to="/signin">Login</Link>
                </div>
            </nav>
            <header className="text-center py-16 bg-yellow-300" ref={homeRef}>
                <h1 className="text-3xl font-bold">Welcome to our online Website</h1>
                <p>Buy or sell any second-han  d item</p>
            </header>
            <section className="py-8 bg-yellow-300 flex justify-center space-x-4">
                {props.categories.map((category) => (
                    <Link to={`/category/${category.name}`} key={category.name} className="bg-white p-4 rounded shadow-md w-40 text-center">
                        <img src={category.image} alt={category.name} className="h-40 w-full object-cover mb-2" />
                        <p>{category.name}</p>
                    </Link>
                ))}
            </section>

            {/* About Us Section */}
            <section id="about" className="py-16 px-8 bg-yellow-200 text-center" ref={aboutRef}>
                <h2 className="text-2xl font-bold">About us</h2>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    accusamus magnam sequi ex neque dolores facilis aut libero nisi doloremque.
                </p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-8 bg-gray-200 flex justify-center" ref={contactRef}>
                <div className="bg-white p-6 rounded shadow-md w-80">
                    <h3 className="text-lg font-bold mb-2">Contact</h3>
                    <p className="text-sm mb-4">We reply within 2 working days</p>
                    <input type="text" placeholder="Full Name" className="w-full p-2 border mb-2" />
                    <textarea placeholder="Enter your query" className="w-full p-2 border mb-2"></textarea>
                    <button className="w-full bg-black text-white p-2 rounded">Submit</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center p-4 bg-gray-800 text-white">Copyright</footer>
        </div>
    );
};

export default Home;
