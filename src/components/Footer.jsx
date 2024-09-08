import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l5 5L22 4" />
                </svg>
                <span>Tel: +971 56 5969 600</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l5 5L22 4" />
                </svg>
                <span>Fax: +971 56 5969 600</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l5 5L22 4" />
                </svg>
                <span>Mobile: +971 56 5969 600</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l5 5L22 4" />
                </svg>
                <a href="mailto:lindazhang@kehuafloors.com" className="hover:underline">E-mail: adraisedflooring@gmail.com</a>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l5 5L22 4" />
                </svg>
                <a href="skype:1737868016@qq.com" className="hover:underline">Skype: 1737868016@qq.com</a>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l5 5L22 4" />
                </svg>
                <span>Add.: (113 - Jabal Ali Industrial Area 1 ), Dubai , United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>

        
      </div>
    </Section>
  );
};

export default Footer;
