import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10  bg-gray-900 text-white">
      <div className="container ml-10 mx-auto px-6">
        {/* Dubai Contact Information */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-yellow-400">
            Dubai Office Contact Information
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <span>Tel: +971 56 5969 600</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <span>Fax: +971 56 5969 600</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <span>Mobile: +971 56 5969 600</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <a href="mailto:adraisedflooring@gmail.com" className="hover:underline">
                E-mail: adraisedflooring@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <a href="skype:1737868016@qq.com" className="hover:underline">
                Skype: 1737868016@qq.com
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <Link to="/" className="hover:underline">
                Add.: (113 - Jabal Ali Industrial Area 1), Dubai, United Arab Emirates
              </Link>
            </li>
          </ul>
        </div>

        {/* Previous Contact Information */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-yellow-400">
            Previous Office Contact Information
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <span>Tel: +86 312 8613 555</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <span>Fax: +86 312 8678 751</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <span>Mobile: +86 155 3220 1529</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <a href="mailto:lindazhang@kehuafloors.com" className="hover:underline">
                E-mail: lindazhang@kehuafloors.com
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <a href="skype:1737868016@qq.com" className="hover:underline">
                Skype: 1737868016@qq.com
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l5 5L22 4"
                />
              </svg>
              <span>
                Add.: (Small and medium-sized industrial park) Shuangfeng road,
                Xushui district, Baoding City, Hebei Province, China
              </span>
            </li>
          </ul>
        </div>

        {/* Official Website Buttons */}
        <div className="text-center md:text-left mb-10">
          <h2 className="text-lg font-semibold mb-4 text-yellow-400">Visit Us Online</h2>
          <a
            href="https://www.kehuafloors.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-400 transition mb-4"
          >
            Our China Office Official Website
          </a>
          <a
            href="https://www.khraisedfloor.com/project/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-400 transition"
          >
            Our Singapore Branch Office Website 
          </a>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h2>
          {/* This section I do wrong and just put here for reference  */}
          {/* <div className="flex justify-center md:justify-start space-x-4">
            {socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
              </a>
            ))}
          </div> */}

<div className="flex justify-center md:justify-start space-x-4">
  {socials.map((social, index) => (
    <a
      key={index}
      href={social.url}  // Corrected from social.link to social.url
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={social.iconUrl}  // Corrected from social.icon to social.iconUrl
        alt={social.title}    // Using social.title for alt text
        className="w-6 h-6"
      />
    </a>
  ))}
</div>

          
        </div>
      </div>
    </Section>
  );
};

export default Footer;
