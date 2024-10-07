import {motion} from 'framer-motion'

import { styles } from '../styles'

import { ComputersCanvas } from './canvas'

import "../components/center.css";

const Hero = () => {
  return (
    <div className="movileview">
    <section className="relative">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">

        <div className=" w-5 h-5 rounded-full bg-[#915eff]"/>

        <div className="w-1 sm:h-75 h-40 violet-gradient"/>

        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Navinvarma</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `} style={{fontSize:"20px"}}>
          🎯Passionate React js Developer | Javascript, HTML, CSS, TailwindCSS, React.js | Crafting Dynamic Web Solutions for the Modern Era.
          </p>
          
        </div>
      </div>
      {/* <ComputersCanvas/> */}
    </section>
    </div>
  )
}

export default Hero