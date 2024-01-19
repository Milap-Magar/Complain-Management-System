import React from "react";
import logo from "../assets/logo.jpg";
import Button from "./A-Componenets/Button";
import "./style.css";

const Dashboard = () => {
  return (
    <>
      <div className="flex bg-slate-200 h-screen w-full">
        <div className="flex flex-col h-screen p-3 bg-sky-200 shadow-sky-700 shadow-2xl w-60">
          <figure>
            <img
              src={logo}
              alt="logo/image"
              className={`logo w-full h-[10vh]`}
            />
          </figure>
          <div className="space-y-10">
            <div className="py-6 px-4 flex justify-center items-center">
              <h2 className="text-xl font-bold">
                <a href="#">Dashboard</a>
              </h2>
            </div>
            <div className="flex-1">
              <ul className="py-1 px-3 space-y-5 text-sm flex flex-col justify-start items-center">
                <li className="rounded-sm">
                  <a href="#" className="flex items-center p-2 space-x-3">
                    <Button />
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span>Home</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Settings</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center py-8">
            <h6>Patan Multiple Campus</h6>
            <h2 className="text-3xl text-slate-700">
              Complain Management System
            </h2>
          </div>
          <div className="grid grid-cols-1 m-4 gap-4 lg:grid-cols-3">
            <div className="w-full  px-4 py-5 bg-sky-200 rounded-lg shadow-lg shadow-amber-200">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Complaints
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                120+
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-sky-200 rounded-lg shadow-lg shadow-amber-200">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Users
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                90+
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-sky-200 rounded-lg shadow-lg shadow-amber-200">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Resolved
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                20
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
