import { SeparatorSmall } from "../components/SeparatorSmall"
import { ExperienceCard } from "../components/ExperienceCard"
import resume from '../assets/resume.pdf'

import experience from '../data/ExperienceData'

export const InformationPage = () => {

    return(
        <div className=" flex flex-col w-[100%] gap-4">
            <h1 className=" font-medium text-4xl text-primary squish">Information</h1>
            <SeparatorSmall></SeparatorSmall>
            <p className=" font-extralight text-[1.1rem] text-primary squish">
                Hi, I’m Samuel, a software developer who enjoys writing clean, functional code and building reliable solutions.
            </p>
            <p className=" font-extralight text-[1.1rem] text-primary squish">
                I have a year of professional experience as a full stack developer at Powerex, where I contributed to internal tools that support energy trading operations.
            </p>
            <p className=" font-extralight text-[1.1rem] text-primary squish">
                 On the side, I also work with clients — most recently designing and developing a full-featured website and event/video management system for Aldergrove Church.
            </p>
            <p className=" font-extralight text-[1.1rem] text-primary squish">
                Before that, I created projects like GreenBanana, a media-sharing platform built with AWS RDS and Cloudinary, and Flaker, where I focused on building efficient REST APIs and optimizing SQL queries for performance. Whether it's backend architecture or responsive UI, I enjoy working across the stack to bring ideas to life.
            </p>
            <p className=" font-extralight text-[1.1rem] text-primary squish">
                If you're interested in collaborating or just want to connect, feel free to reach out:
            </p>
            <a className=" underline" href="mailto:semuall0108@gmail.com">semuall0108@gmail.com</a>
            <span className=" my-4"></span>
            <h1 className=" font-medium text-2xl text-primary squish mb-4">Experience</h1>
            <div className=" gap-4 flex flex-col mb-8">
                {
                    experience.map((project, index) => (
                        <>
                            <ExperienceCard key={index} {...project} />
                            <SeparatorSmall></SeparatorSmall>
                        </>
                    ))
                }
            </div>
            <div>
                <a href={resume} download="Samuel's Resume.pdf" className=" font-regular text-tertiary squish text-[0.9rem]">Download Resume</a>
            </div>
            <SeparatorSmall></SeparatorSmall>
        </div>
    )
}