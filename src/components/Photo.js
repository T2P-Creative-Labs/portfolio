import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from "next-themes";


export default function Photo() {
  const { theme } = useTheme();
  console.log(theme)
  return(
    <div className="relative w-[306px] h-[306px]">
      <Image className="absolute rounded-full overflow-hidden" src="/image/profile.png" width={300} height={300} alt="profile" />
      <motion.svg
        className="w-[304px] relative"
        fill="transparent"
        viewBox={`0 0 304 304`}
        xmlns={`http://www.w3.org/2000/svg`}
      >
        <motion.circle
          cx={151}
          cy={151}
          r={150}
          stroke={`${theme == "dark" ? '#bb86fc' : '#148bfb'}`}
          strokeWidth={4}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          initial={{ strokeDasharray: "24 10 0 0"}} 
          animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 92", "4 250 22 22"] }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
        </motion.circle>
      </motion.svg>
    </div>
  )
}
