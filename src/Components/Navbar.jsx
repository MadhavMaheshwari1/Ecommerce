import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Categories from './Categories';
import HomePage from '../Pages/HomePage';

function Navbar() {
    return (
        <div className="navBar shadow-sm w-full sticky top-0 bg-white z-50">
            <div className='container flex items-center justify-between h-[130px] m-auto'>
                <div class="Logo">
                    <Link to="/">
                        <img class="h-[80px]" src="/Images/Shoppily Logo.svg" alt="" />
                    </Link>
                </div>

                <div class="flex gap-5">
                    <Link to="/Categories" class="hover:underline transition-duration-500 transition-timing-function-ease">CATEGORIES</Link>
                    <Link to="" class="hover:underline transition-duration-500 transition-timing-function-ease">PRODUCT PAGE</Link>
                    <div>
                        <a href="#">
                            <img class="h-[22px]" src="/Images/Cart.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;