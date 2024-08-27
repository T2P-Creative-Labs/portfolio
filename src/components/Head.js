"use client"
import Image from 'next/image'
import TechStack from './Tech-Stack'
import { Black_Ops_One } from 'next/font/google'
import { motion } from 'framer-motion'
import Photo from './Photo'

const BlackOpsOne = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
})

function Head() {

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    return (
        <>
            <div id="home">
                <div className="bg-[#F9F9F9] dark:bg-[#121212] py-24">
                    <div className="container space-y-8">
                        <div className="flex flex-col-reverse gap-2 justify-center lg:flex-row lg:justify-between items-center">
                            <motion.div
                                className="space-y-4 text-center lg:text-start"
                                initial={{ opacity: 0, scale: 0.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="flex items-center justify-center lg:justify-start">
                                    <span className={`text-[#2d2e32] dark:text-white font-bold text-2xl lg:text-5xl ${BlackOpsOne.className}`}>
                                        Full Stack Developer
                                    </span>
                                </div>
                                <div>
                                    <span className="text-[#86888c] dark:text-[##7a7a7a] font-mono">
                                        Hello, I&apos;m Tuan Phuong, an enthusiastic Full Stack Developer based in Hanoi, Vietnam. I am proficient in Vietnamese, Japanese, and English.📍
                                    </span>
                                </div>
                                <div className='flex flex-row items-center justify-center items-center gap-3 font-mono'>
                                    <a href="/pdf/cv_english.pdf" target="_blank">
                                        <button className="bg-[#148BFB] border-[#f9f9f9] hover:bg-[#f9f9f9] hover:text-black border-2 hover:border-[#148BFB] dark:bg-[#bb86fc] dark:hover:text-[#fff] dark:text-black dark:border-[#bb86fc] dark:border-2 dark:hover:bg-[#121212] text-white hover:bg-[#148bfbd2] rounded p-2 px-4 transition duration-700 font-bold">
                                            CV(EN)
                                        </button>
                                    </a>
                                    <a href="/pdf/cv_japanese.pdf" target="_blank">
                                        <button className="bg-[#148BFB] border-[#f9f9f9] hover:bg-[#f9f9f9] hover:text-black border-2 hover:border-[#148BFB] dark:bg-[#bb86fc] dark:hover:text-[#fff] dark:text-black dark:border-[#bb86fc] dark:border-2 dark:hover:bg-[#121212] text-white hover:bg-[#148bfbd2] rounded p-2 px-4 transition duration-700 font-bold">
                                            CV(JA)
                                        </button>
                                    </a>
                                    <button onClick={() => { scrollToSection('contact') }} className="hover:border-black border-2 border-white hover:bg-[#f9f9f9] dark:hover:text-white dark:text-black dark:border-[#fff] dark:border-2 dark:hover:bg-[#121212] bg-[#ffff] text-[#148bfbd2] hover:text-black rounded p-2 px-4 transition duration-700 ease-in-out font-bold">
                                        SAY HELLO
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, scale: 0.1 }}
                                animate={{ scale: 1, opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Photo />
                            </motion.div>
                        </div>
                        <TechStack />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head
