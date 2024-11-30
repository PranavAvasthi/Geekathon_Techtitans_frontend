import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase-config";

const Sidebar = () => {
  const navigate=useNavigate()
  async function handleLogout(){
    signOut(auth)
  .then(() => {
    console.log("User signed out successfully.");
    navigate('/login')
  })
  .catch((error) => {
    console.error("Error signing out:", error);
  });
  }

  return (
    <div className="flex w-full min-h-full flex-col bg-[#1D232C] text-white justify-between rounded-xl p-2 ">
      <div>
        <div className="flex gap-2">
          <img
            src="https://www.istockphoto.com/illustrations/artificial-intelligence-logo"
            alt="Artificial Intelligence Logo"
            className="h-[50px] w-[50px] rounded-xl"
          ></img>
          <div className="w-full text-xl text-left text-[#586A84] py-4 px-4  hover:text-sky-400 hover:bg-gray-800 transition-all duration-200 mb-2 ">
            <span>Name</span>
          </div>
        </div>

        <div className="w-full text-[18px] text-left text-[#DDE1E8] py-4 px-4 border-b border-gray-700 hover:text-sky-400 hover:bg-gray-800 transition-all duration-200 flex flex-row items-center gap-2">
        <MdSpaceDashboard color="[#DDE1E8]" size={20}/>
          <span>Dashboard</span>
        </div>
        <div className="w-full text-[18px] text-left text-[#DDE1E8] py-4 px-4 border-b border-gray-700 hover:text-sky-400 hover:bg-gray-800 transition-all duration-200 flex flex-row items-center gap-2">
        <IoChatbox color="[#DDE1E8]" size={20}/>

          <span>Chat</span>
        </div>
        <div className="w-full text-[18px] text-left text-[#DDE1E8] py-4 px-4 border-b border-gray-700 hover:text-sky-400 hover:bg-gray-800 transition-all duration-200 flex flex-row items-center gap-2">
        <IoIosNotifications color="[#DDE1E8]" size={26}/>
          <span>Notification</span>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button onClick={handleLogout} className="w-[85%] text-[18px] text-left text-[#DDE1E8] py-3 px-2 border-b border-gray-700 hover:text-sky-400 hover:bg-gray-800 transition-all duration-200 bg-[#0077E4] rounded-2xl flex justify-center items-center">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;