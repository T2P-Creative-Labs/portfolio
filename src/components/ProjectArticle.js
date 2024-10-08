import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ProjectArticle({ ele, index }) {
    const articleRef = useRef(null)
    const articleInView = useInView(articleRef, { once: false })

    return (
        <motion.article
            ref={articleRef}
            initial={{ opacity: 0, x: 100 }}
            animate={articleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-third p-6 font-mono rounded-md dark:bg-[#3c4042] bg-[#ffffff]"
        >
            <div className="flex gap-6 justify-between items-center mb-4">
                <div className="text-main">
                    <svg className="text-[#148bfb] dark:text-[#bb86fc]" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex items-center gap-4">
                    <a className="flex hover:text-main transition-all" rel="noopener noreferrer" target="_blank" href={ele.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white hover:dark:text-[#bb86fc] hover:text-[#148bfb] transition duration-500" role="img" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a className="flex hover:text-main transition-all" rel="noopener noreferrer" target="_blank" href={ele.vercal}>
                        <svg className="text-black dark:text-white hover:dark:text-[#bb86fc] hover:text-[#148bfb] transition duration-500" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold dark:text-white text-black text-xl">{ele.title}</h3>
                <div className="text-[#8b8b8d] text-xs mb-4">
                    {ele.description.split('.').map((sentence, index) => (
                        <span key={index} className="block mb-2">{sentence.trim()}.</span>
                    ))}
                </div>
                <ul className="flex flex-wrap gap-3 text-xs">
                    {ele.languageBuild.map((lang, index) => (
                        <li key={index} className="whitespace-nowrap bg-[#148bfb] dark:bg-[#bb86fc] py-1 px-3 rounded-md">{lang}</li>
                    ))}
                </ul>
            </div>
        </motion.article>
    )
}

export default ProjectArticle
