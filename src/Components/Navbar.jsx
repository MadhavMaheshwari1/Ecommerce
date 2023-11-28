import React from 'react';

function Navbar() {
    return (
        <div className="navBar border-b-2 border-b-gray-100 border-b-solid w-full sticky top-0 bg-white">
            <div className='container flex items-center justify-between h-[130px] m-auto'>
                <div class="Logo">
                    <a href="#">
                        <img class="h-[80px]" src="/Images/Shoppily Logo.svg" alt="" />
                    </a>
                </div>

                <div class="flex gap-5">
                    <a href="#" class="hover:underline transition-duration-500 transition-timing-function-ease">CATEGORIES</a>
                    <a href="#" class="hover:underline transition-duration-500 transition-timing-function-ease">PRODUCT PAGE</a>
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