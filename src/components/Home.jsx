import React from 'react';
import HeroImage from "../assets/heroimage.png";
import {TbArrowRightCircle} from "react-icons/tb"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a Full Stack Developer</h2>
            <p className="text-gray-500 py-4 max-w-md">
            As a passionate full-stack developer with a talent for quickly
            adapting to new environments and responsibilities, I am excited to
            apply my creative and analytical mindset to build innovative
            solutions. With a background in healthcare as a home health
            physical therapist assistant, I have developed technical knowledge,
            problem-solving skills, and strong communication abilities. As a
            soon-to-be graduate of the NSS, I am dedicated to continuous
            learning and contributing to a dynamic team.
            </p>

            <div>
                <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-800 to-green-950 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                        <TbArrowRightCircle size={25} className="ml-1"/>
                    </span>
                </Link>
            </div>
        </div>

            <div>
                <img src={HeroImage} alt="Erica Software Dev" className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
       </div>
    </div>
  )
}

export default Home