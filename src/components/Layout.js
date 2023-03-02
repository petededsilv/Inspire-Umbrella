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
    <img src="/inspireSmallLogo.svg" alt="inspire logo" style={{maxWidth: '1200px', margin: '10px'}}/>
      <div className="footerLinks mt-5">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Fair Housing Policy</p>

      </div>
        <p className="text-center mt-5 mb-4">Inspire Your Day  © All Rights Reserved</p>
    </footer>
    </div>
  );
}
