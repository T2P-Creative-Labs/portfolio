"use client"

import { Black_Ops_One } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BlackOpsOne = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
})

export default function TechStack() {
    const [data, setData] = useState({
        frontEnd: [],
        backEnd: [],
        designe: [],
        infra: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/json/language.json")
            const data = await response.json()
            const { FrontEnd, BackEnd, Designe, Infra } = data
            setData({
                frontEnd: FrontEnd,
                backEnd: BackEnd,
                designe: Designe,
                infra: Infra
            })
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="space-y-12">
                <motion.div
                    className="text-center font-mono"
                    whileHover={{ scale: 1.1 }}
                >
                    <span className={`font-extrabold text-3xl text-[#148BFB] border-b-4 dark:text-[#bb86fc] dark:border-[#bb86fc] border-[#148BFB] ${BlackOpsOne.className}`}>
                        Tech Stack
                    </span>
                </motion.div>
                <div className="flex flex-col gap-6">
                    <motion.div
                        className="flex lg:flex-row flex-col items-center dark:bg-[#2d2e32] bg-white shadow-inner text-center p-6 gap-6 rounded-xl"
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className={`text-center lg:text-right w-36 text-black font-bold dark:text-white text-2xl ${BlackOpsOne.className}`}>Front-End</span>
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:flex items-center justify-center gap-8">
                            {
                                data.frontEnd.map((res, index) => (
                                    <motion.div
                                        key={index}
                                        className='relative'
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <Image className="rounded-md bg-none" src={`/icon/${res.languageImage}`} width={50} height={50} alt={res.languageName} title={res.languageName} />
                                    </motion.div>
                                ))
                            }
                        </div>
                    </motion.div>

                    <motion.div
                        className='flex flex-col lg:flex-row items-center dark:bg-[#2d2e32] bg-white shadow-inner text-center p-6 gap-6 rounded-xl'
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className={`text-center lg:text-right w-36 text-black font-bold dark:text-white text-2xl ${BlackOpsOne.className}`}>Back-End</span>
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:flex items-center justify-center gap-8">
                            {
                                data.backEnd.map((res, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <Image className="rounded-md bg-none cursor-point" src={`/icon/${res.languageImage}`} width={50} height={50} alt={res.languageName} title={res.languageName} />
                                    </motion.div>
                                ))
                            }
                        </div>
                    </motion.div>

                    <motion.div
                        className='flex flex-col lg:flex-row items-center dark:bg-[#2d2e32] bg-white shadow-inner text-center p-6 gap-6 rounded-xl'
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className={`text-center lg:text-right w-36 text-black font-bold dark:text-white text-2xl ${BlackOpsOne.className}`}>Infra</span>
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:flex items-center justify-center gap-8">
                            {
                                data.infra.map((res, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <Image className="rounded-md" src={`/icon/${res.languageImage}`} width={50} height={50} alt={res.languageName} title={res.languageName} />
                                    </motion.div>
                                ))
                            }
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col lg:flex-row items-center dark:bg-[#2d2e32] bg-white shadow-inner text-center p-6 gap-6 rounded-xl"
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className={`text-center lg:text-right w-36 text-black font-bold dark:text-white text-2xl ${BlackOpsOne.className}`}>Designe</span>
                        <div className="grid grid-cols-4 md:grid-cols-6 lg:flex items-center justify-center gap-8">
                            {
                                data.designe.map((res, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <Image className="rounded-md" src={`/icon/${res.languageImage}`} width={50} height={50} alt={res.languageName} title={res.languageName} />
                                    </motion.div>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
