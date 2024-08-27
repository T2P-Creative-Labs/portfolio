"use client"
import { Black_Ops_One } from 'next/font/google'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectArticle from './ProjectArticle'

const BlackOpsOne = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
})

export default function Project() {
    const [dataProject, setDataProject] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch("/json/project.json")
            const data = await response.json()
            setDataProject(data)
        }
        fetchdata()
    }, [])

    const titleRef = useRef(null)
    const titleInView = useInView(titleRef, { once: false })

    return (
        <>
            <div id="project" className="bg-[#f9f9f9] dark:bg-[#121212] py-12">
                <div className="container grid grid-flow-row grid-cols-1 gap-6">
                    <motion.span
                        ref={titleRef}
                        initial={{ opacity: 0, x: -200 }}
                        animate={titleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className={`text-[#148BFB] dark:text-[#bb86fc] font-bold font-mono text-4xl text-start ${BlackOpsOne.className}`}
                    >
                        Some Things I&apos;ve Built
                    </motion.span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            dataProject.map((ele, index) => (
                                <ProjectArticle key={index} ele={ele} index={index} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex pt-12 justify-center">
                    <a className="font-mono text-[#148BFB] dark:text-white hover:dark:text-[#bb86fc] hover:dark:border-[#bb86fc] dark:border-white hover:text-[#023e8a] transition duration-500 border-b-2 hover:border-[#023e8a] text-center" target="_blank" href="https://github.com/silcro-123">View the archive</a>
                </div>
            </div>
        </>
    )
}
