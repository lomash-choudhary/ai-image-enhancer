import { useState } from "react";
import { Home } from "./components/Home";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/*
  things we need in the ui
  1. image uploading options the things from where we will upload the image
  2. a box where we can preview our uploaded image
  3. a box where we can view the enhanced image
*/

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="font-bold text-5xl text-gray-800 mb-2">
            AI Image Enhancer
          </h1>
          <p className="text-xl text-gray-500">
            Upload Your image and enhance it using AI for free!!!
          </p>
        </div>
        <Home />
        <div className="text-2xl text-gray-600 mt-6 flex items-center gap-6">
          <div>Made With ❤️ By Lomash Choudhary </div>
          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/lomash-choudhary" target="__blank">
              <FaGithub className="cursor-pointer hover:text-gray-800 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/lomash-choudhary/" target="__blank">
              <FaLinkedin className="cursor-pointer hover:text-blue-700 transition-all"/>
            </a>
            <a href="https://x.com/lomashonly" target="__blank">
              <FaXTwitter className="cursor-pointer hover:text-gray-800 transition-all"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
