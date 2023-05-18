import React from 'react'
import "./landing.css";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Header from "../../Components/Header/Header";
import Stories from "../Story/Story";
import { Outlet } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
        <div className="landing-container">
            <div className="sidenav">
                <Sidenav />
            </div>
            <div className="content-container">
                <Header />
                <Stories />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}
