import React from 'react'
import { Route, Routes, Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <section id="topbar" class="topbar d-flex align-items-center">
                <div class="container d-flex justify-content-center justify-content-md-between">
                    <div class="contact-info d-flex align-items-center">
                        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                    </div>
                    <div class="social-links d-none d-md-flex align-items-center">
                        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </section>

            <header id="header" class="header d-flex align-items-center">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" class="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <h1>ConsoleLog<span>.</span></h1>
                    </a>
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/">Team</Link></li>
                            <li><Link to="/blogs">Blog</Link></li>
 
                            {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li> */}
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>


        </>
    )
}

export default Header