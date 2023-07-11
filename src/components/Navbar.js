import React, { useEffect } from "react";

export default function Navbar(props) {
  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");

    const handleClick = () => {
      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    };

    btn.addEventListener('click', handleClick);

    return () => {
      btn.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array ensures the effect is only run once on mount

  return (
    <nav className="relative container shadow-2xl mx-auto p-6">
      <div className=" laptop:flex items-center  laptop:justify-between">
        <div className="text-red-500 float-left laptop:mx-2 text-2xl">{props.title}</div>
        <div className="hidden laptop:inline laptop:text-center text-blue-500 font-bold space-x-6">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Services</a>
        </div>
        <div className="flow-root">
            <a href="/" className="p-3 px-6 float-right text-white bg-red-500 rounded-full self-baseline hidden laptop:block">
            Get Started
          </a>
          
            <button id="menu-btn" className="hamburger py-1.5 cursor-pointer ml-auto float-right  laptop:hidden">
              <div className="line hamburger-top my-1 bg-black"></div>
              <div className="line hamburger-middle my-1 bg-black"></div>
              <div className="line hamburger-bottom my-1 bg-black"></div>
            </button>
          
        </div>
        <div className="laptop:hidden">
          <div id="menu" className="text-xl hidden open bg-blue-100 absolute flex-col items-center self-end py-8 mt-14 space-y-6 font-bold left-6 right-6 drop-shadow-md">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Services</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
