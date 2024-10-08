"use client";
import { useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SignIn } from "./sign-in";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Twitch } from "lucide-react";

const Countdown = dynamic(() => import("./countdown"), { ssr: false });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="p-4 flex justify-between items-center">
      {/* AOM.gg */}
      <div className="flex items-center space-x-4">
        <Link
          href={"/"}
          className="cursor-pointer hover:underline hover:text-primary"
        >
          <Image
            src="/aom-gg-logo.png"
            width={175}
            height={175}
            alt="AoM.gg"
            priority
          />
        </Link>
        {/* Desktop Nav Menu */}
        <NavigationMenu className="w-full sm:w-auto hidden sm:flex sm:items-center ">
          <NavigationMenuList className="flex flex-col sm:flex-row items-center sm:space-x-4">
            {/* Recs */}
            <NavigationMenuItem className="text-center sm:text-left">
              <Link
                href={"/recs"}
                className="cursor-pointer text-center hover:underline hover:text-primary text-2xl font-medium leading-tight"
              >
                <p>Recorded</p>
                <p>Games</p>
              </Link>
            </NavigationMenuItem>
            {/* Seperator */}
            <div className="hidden sm:block h-10 w-0.5 bg-gray-400"></div>
            {/* Resources */}
            <NavigationMenuItem className="text-center sm:text-left">
              <Link
                href={"/resources"}
                className="cursor-pointer text-center hover:underline hover:text-primary text-2xl font-medium leading-tight"
              >
                <p>Resources</p>
              </Link>
            </NavigationMenuItem>
            {/* Seperator */}
            <div className="hidden sm:block h-10 w-0.5 bg-gray-400"></div>
            <NavigationMenuItem className="text-center sm:text-left">
              <Link
                href="https://discord.gg/Um8MZju4CK"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordLogoIcon className="w-8 h-8 text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-800" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-center sm:text-left">
              <Link
                href="https://www.twitch.tv/fitzbro/videos"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitch className="w-8 h-8 text-purple-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-purple-700" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-center sm:text-left">
              <Link
                href="https://ko-fi.com/fitzbro"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/kofi_button_blue.png"
                  width={200}
                  height={200}
                  alt="Ko-fi"
                  priority
                  className=""
                />
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden sm:flex sm:items-center w-full sm:w-auto">
        {/* Countdown */}
        {/* <div className="flex justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0 sm:pr-6">
          <Countdown
            targetDate={"2024-09-04T17:00:00Z"}
            title={"Retold Official Launch"}
          />
        </div> */}
        {/* Sign In */}
        <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end w-full sm:w-auto">
          <SignIn />
        </div>
      </div>

      {/* TODO - move mobile nav to its own component */}
      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-30 flex transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } justify-end`}
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeMenu}
        ></div>
        <div className="relative flex flex-col bg-card w-64 max-w-xs shadow-xl transition-transform transform translate-x-0 sm:hidden">
          <button
            className="self-end p-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-4 p-6">
            <div className="mx-auto">
              <SignIn />
            </div>
            <Link
              href={"/"}
              className="cursor-pointer hover:underline hover:text-primary text-2xl font-medium leading-tight"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href={"/recs"}
              className="cursor-pointer hover:underline hover:text-primary text-2xl font-medium leading-tight"
              onClick={closeMenu}
            >
              Replays
            </Link>
            <Link
              href={"/resources"}
              className="cursor-pointer hover:underline hover:text-primary text-2xl font-medium leading-tight"
              onClick={closeMenu}
            >
              Resources
            </Link>
            <Link
              href="https://discord.gg/Um8MZju4CK"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordLogoIcon className="w-8 h-8 text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-800" />
            </Link>
            <Link
              href="https://www.twitch.tv/fitzbro/videos"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitch className="w-8 h-8 text-purple-500 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-purple-700" />
            </Link>
            <Link
              href="https://ko-fi.com/fitzbro"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/kofi_bg_tag_dark.png"
                width={100}
                height={100}
                alt="Ko-fi"
                priority
                className=""
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
