import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../../Assets/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Utilities/Firebase/firebase.init";
import { signOut } from "firebase/auth";

const NavBar = ({ home, root }) => {
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    return (
        <nav className={`flex justify-between container items-center mx-auto py-[30px] bg-white ${(root || home) && "px-10"}`}>
            <Link to="/">
                <img className="w-48" src={Logo} alt="" />
            </Link>

            <ul className="flex gap-10 uppercase font-semibold">
                <li className="hover:text-primary transition">
                    <NavLink style={({ isActive }) => (isActive ? { color: "#F58229" } : undefined)} to="/">
                        Home
                    </NavLink>
                </li>
                <li className="hover:text-primary transition">
                    <NavLink style={({ isActive }) => (isActive ? { color: "#F58229" } : undefined)} to="/about">
                        About Us
                    </NavLink>
                </li>
                <li className="hover:text-primary transition">
                    <NavLink style={({ isActive }) => (isActive ? { color: "#F58229" } : undefined)} to="/accommodation">
                        Accommodation
                    </NavLink>
                </li>
                <li className="hover:text-primary transition">
                    <NavLink style={({ isActive }) => (isActive ? { color: "#F58229" } : undefined)} to="/gallery">
                        Gallery
                    </NavLink>
                </li>
                <li className="hover:text-primary transition">
                    <NavLink style={({ isActive }) => (isActive ? { color: "#F58229" } : undefined)} to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li className="hover:text-primary transition">
                    <NavLink style={({ isActive }) => (isActive ? { color: "#F58229" } : undefined)} to="/manage-hotel/update">
                        Manage Hotel
                    </NavLink>
                </li>
                <li className="text-primary">
                    <NavLink onClick={() => (user ? signOut(auth) : navigate("/login"))} style={({ isActive }) => (isActive ? { color: "#F58229" } : undefined)} to="/login">
                        {user?.displayName != null ? `Sign Out (${user?.displayName})` : "Login"}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
