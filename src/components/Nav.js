"use client"

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop-100,
                behavior: 'smooth'
            });
        }
    }

    return (
        <>
            <motion.div
                className="bg-[#ffffff] dark:bg-[#2d2e32] rounded-b-2xl z-30 fixed top-0 right-0 left-0 shadow-2xl py-5"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="hidden lg:block">
                    <div className="flex justify-between items-center px-8">
                        <div>
                            <span className={`text-black dark:text-[#fff] font-extrabold`}>TuanPhuong.Dev</span>
                        </div>
                        <div className="text-[#89797F] dark:text-white flex gap-8 font-semibold">
                            <motion.button
                                initial={{ opacity: 0, x: -5000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                                onClick={() => scrollToSection('home')}
                                className="hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Home
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, x: -5000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.0 }}
                                onClick={() => scrollToSection('about')}
                                className="hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                About
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, x: -5000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => { scrollToSection('project') }}
                                className="hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Portfolio
                            </motion.button>
                            <motion.button
                                initial={{ opacity: 0, x: -5000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => { scrollToSection('contact') }}
                                className="hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Contact
                            </motion.button>
                            <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark"), setOpen(!open) }}>
                                <svg className={`transition duration-700 ${theme === "dark" ? "rotate-180" : "rotate-0"}`} width="35px" height="35px" viewBox="0 0 24 24" fill={theme === "light" ? "#000" : "#fff"} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill={theme === "light" ? "#000" : "#fff"} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill={theme === "light" ? "#000" : "#fff"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between px-4">
                        <span className={`text-black dark:text-[#fff] font-extrabold`}>TuanPhuong.Dev</span>
                        <button onClick={() => { setOpen(!open) }}>
                            <svg className="dark:hidden block" fill="" width="28px" height="28px" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg"><path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" /><path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" /><path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" /></svg>
                            <svg className="dark:block hidden" fill="#bb86fc" width="28px" height="28px" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg"><path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" /><path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" /><path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" /></svg>
                        </button>
                    </div>
                    <motion.div
                        className={`fixed inset-0 flex items-center justify-center bg-white dark:bg-[#2d2e32] duration-700 transition ${open == true ? "translate-x-0" : "translate-x-full"}`}
                        initial={{ x: "100%" }}
                        animate={{ x: open ? "0%" : "100%" }}
                        transition={{ duration: 0.2 }}
                    >
                        <button onClick={() => { setOpen(!open) }} className="absolute top-4 right-4 dark:text-[#bb86fc] text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="text-black dark:text-[#fff] flex flex-col items-center gap-12 text-3xl font-bold">
                            <button onClick={() => { scrollToSection('home'), setOpen(!open) }} className="hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">Home</button>
                            <button onClick={() => { scrollToSection('about'), setOpen(!open) }} className="hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">About</button>
                            <button onClick={() => { scrollToSection('project'), setOpen(!open) }} className="hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">Portfolio</button>
                            <button onClick={() => { scrollToSection('contact'), setOpen(!open) }} className="hover:text-[#148BFB] transition hover:dark:text-[#bb86fc] duration-700">Contact</button>
                            <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark"), setOpen(!open) }}>
                                <svg className={`transition duration-700 ${theme === "dark" ? "rotate-180" : "rotate-0"}`} width="50px" height="50px" viewBox="0 0 24 24" fill={theme === "light" ? "#000" : "#fff"} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill={theme === "light" ? "#000" : "#fff"} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill={theme === "light" ? "#000" : "#fff"} />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
