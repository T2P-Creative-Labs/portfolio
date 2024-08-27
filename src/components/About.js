"use client"
import { useRef } from 'react'
import Image from 'next/image'
import { Black_Ops_One } from 'next/font/google'
import { motion, useInView } from 'framer-motion'

const BlackOpsOne = Black_Ops_One({
    weight: '400',
    subsets: ['latin'],
})

export default function About() {
    const aboutRef = useRef(null)
    const aboutInView = useInView(aboutRef, { once: false })
    return (
        <div id="about" className='bg-[#ffffff] dark:bg-[#121212] py-12'>
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start">
                <motion.div 
                    className="flex justify-center"
                    ref={aboutRef}
                    initial={{ opacity: 0, x: -400 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <div className='relative'>
                        <Image className="dark:hidden block rounded-md" src="/image/aboutImageWhite.png" width={1000} height={1000} alt="About" />
                        <Image className="dark:block hidden rounded-md" src="/image/aboutImageDark.png" width={1000} height={1000} alt="About" />
                        <div className='hidden lg:block absolute -bottom-8 -right-8'>
                            <Image className="dark:hidden block circle-animation shadow-2xl rounded-full bottom-0 left-0" src="/image/CerclaImage.png" width={150} height={150} alt="About" />
                            <Image className="dark:block hidden circle-animation shadow-2xl rounded-full bottom-0 left-0" src="/image/CerclaImageDark.png" width={150} height={150} alt="About" />
                            <Image className='absolute inset-[50px]' src="icon/dev.svg" width={50} height={50} alt="dev" />
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className='text-black flex flex-col gap-4 font-mono'
                    ref={aboutRef}
                    initial={{ opacity: 0, x: 400 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <div className='flex flex-col gap-4 text-center lg:text-start'>
                        <span className={`text-[#148BFB] dark:text-[#bb86fc] font-bold text-3xl font-mono capitalize ${BlackOpsOne.className}`}>About Me</span>
                        <span className={`font-bold text-lg text-center lg:text-justify dark:text-[#fff]`}>Hello, I&apos;m Tuan Phuong, an enthusiastic Full Stack Developer based in Hanoi, Vietnam. I am proficient in Vietnamese, Japanese, and English 🏡.</span>
                    </div>
                    <div className={`text-[#606368] text-sm font-semibold text-center lg:text-justify`}>
                        <span className="block mb-4">A highly skilled Full Stack Developer with extensive experience in front-end and back-end technologies.</span>
                        <span className="block mb-4">Proficient in creating dynamic and responsive web applications using modern frameworks like Next.js and React, along with a strong command of HTML and Tailwind CSS.</span>
                        <span className="block mb-4">On the back-end, adept at building robust and scalable services using Ruby and Node.js. Well-versed in cloud infrastructure with hands-on experience in AWS and GCP, and proficient in CI/CD processes using GitLab Flow and GitHub Actions.</span>
                        <span className="block mb-4">A problem-solver with a keen eye for detail, committed to delivering high-quality code and innovative solutions. 🚀</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
