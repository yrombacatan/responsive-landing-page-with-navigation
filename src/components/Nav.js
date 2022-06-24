import React, { useState, useRef } from "react";

import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconClose from "../images/icon-close-menu.svg";

import iconTodo from "../images/icon-todo.svg";
import iconCalendar from "../images/icon-calendar.svg";
import iconReminders from "../images/icon-reminders.svg";
import iconPlanning from "../images/icon-planning.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";

const Nav = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenTodo, setOpenTodo] = useState(false);
  const [isOpenCompany, setOpenCompany] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  return (
    // Nav start
    <nav className="flex justify-between items-center p-5  text-base text-mediumgray font-medium">
      {/* Logo */}
      <div>
        <img alt="logo" src={logo} className="mt-2" />
      </div>

      {/* MenuBar sm-only */}
      <div className="md:hidden">
        <button onClick={() => setOpenMenu((prev) => !prev)}>
          <img src={iconMenu} alt="Menu" />
        </button>
      </div>

      {/* Nav content fixed on sm screen */}
      <div
        className={`fixed w-72 top-0 z-50 min-h-screen bg-almostwhite p-5 shadow-2xl transition-all ${
          isOpenMenu
            ? "right-0 before:contents-['*'] before:absolute before:w-screen before:min-h-screen before:bg-shade before:right-full before:top-0 before:opacity-50"
            : "-right-full"
        } md:relative md:right-0 md:w-full md:h-10 md:shadow-none md:transition-none md:before:bg-almostwhite md:p-0 md:min-h-0`}
      >
        <div className="md:flex md:items-center">
          <div className="md:ml-10 lg:ml-20">
            {/* Nav List */}
            <ul className="flex flex-col gap-5 md:flex-row md:gap-5 lg:gap-16">
              {/* Nav close button sm-only*/}
              <li className="flex justify-end md:hidden">
                <button onClick={() => setOpenMenu((prev) => !prev)}>
                  <img src={iconClose} alt="Close" />
                </button>
              </li>

              {/* Todos */}
              <li className="md:relative">
                <button
                  onClick={() => {
                    setOpenTodo((prev) => !prev);
                    setOpenCompany(false);
                  }}
                  className="w-full text-left flex items-center gap-5 hover:text-almostblack md:text-center md:gap-2"
                >
                  <span>Features</span>
                  <img src={isOpenTodo ? iconArrowUp : iconArrowDown} />
                </button>
                <div
                  className={`overflow-hidden transition-all md:absolute md:w-56 md:rounded-lg md:bg-white ${
                    isOpenTodo ? "mt-5 md:p-5 max-h-96" : "max-h-0"
                  }`}
                >
                  {/* Todos sub menu */}
                  <ul className="pl-10 flex flex-col gap-5 md:pl-0" ref={ref1}>
                    <li>
                      <button className="w-full flex gap-2 items-center">
                        <img src={iconTodo} />
                        <span>Todo List</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full flex gap-2 items-center">
                        <img src={iconCalendar} />
                        <span>Calendar</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full flex gap-2 items-center">
                        <img src={iconReminders} />
                        <span>Reminders</span>
                      </button>
                    </li>
                    <li>
                      <button className="w-full flex gap-2 items-center">
                        <img src={iconPlanning} />
                        <span>Planning</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Company */}
              <li className="md:relative">
                <button
                  onClick={() => {
                    setOpenCompany((prev) => !prev);
                    setOpenTodo(false);
                  }}
                  className="w-full text-left flex items-center gap-5 hover:text-almostblack md:text-center md:gap-2"
                >
                  <span>Company</span>
                  <img src={isOpenCompany ? iconArrowUp : iconArrowDown} />
                </button>
                <div
                  className={`overflow-hidden transition-all md:absolute md:w-56 md:rounded-lg md:bg-white ${
                    isOpenCompany ? "mt-5 md:p-5 max-h-96" : "max-h-0"
                  }`}
                >
                  {/* Company submenu */}
                  <ul className="pl-10 flex flex-col gap-5 md:pl-0" ref={ref2}>
                    <li>
                      <button className="block w-full text-left">
                        History
                      </button>
                    </li>
                    <li>
                      <button className="block w-full text-left">
                        Our Team
                      </button>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </li>
              {/* Other menu */}
              <li>
                <button className="block w-full text-left hover:text-almostblack">
                  Careers
                </button>
              </li>
              <li>
                <button className="block w-full text-left hover:text-almostblack">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-col gap-5 md:flex-row md:mt-0 md:ml-auto md:gap-5 lg:gap-16">
            <button className="hover:text-almostblack">Login</button>
            <button className="p-2 rounded-2xl border-2 border-slate-500 md:px-5 hover:text-almostblack hover:border-almostblack">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
