import { useState } from "react";
import { mdiMenu } from '@mdi/js';

export default function Navbar(props) {
  const [mute, setMute] = useState(true);
  const [expand, setExpand] = useState(false);
  return (
    <nav className="bg-transparent flex flex-wrap items-center jutify-between w-full py-4 md:py-0 px-4 text-lg navbar">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div>
          <a href="/">
            <img 
              style={{
                padding: "1rem",
                width: "3.8rem",
                color: "#FC5130"
              }} 
              src="/img/logo.svg" 
              alt="logo" 
            />
          </a>
        </div>
        <div className="object-right"
          onClick={() => {
            setExpand(!expand)
          }}
        >
          <svg className="h-6 w-6 cursor-pointer md:hidden block background fill-gray-300">
            <path d={mdiMenu}/>
          </svg>
        </div>
        <div className={expand ? "w-full md:flex md:items-center md:w-auto text-right" : "hidden w-full md:flex md:items-center md:w-auto text-right"} id="menu">
          <ul
            className="
              text-base text-gray-600
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-red-400 font-extrabold" 
                href="https://discord.gg/g6rZ2VAuz4"
                target="_blank" rel="noopener noreferrer"
              >
                DISCORD
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-red-400 font-extrabold"
                href="https://twitter.com/mb__dao"
                target="_blank" rel="noopener noreferrer"
              >
                TWITTER
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-red-400 font-extrabold"
                href="https://github.com/metaverse-builders-dao"
                target="_blank" rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}