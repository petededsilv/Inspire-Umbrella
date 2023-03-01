import React from "react";
import Navbar from "./Navbar"
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="Layout">
        <Navbar />
        <div className="content">
            { children }
        </div>
    <footer>
        <p>footer</p>
    </footer>
    </div>
  );
}
