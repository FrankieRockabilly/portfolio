import React from 'react'
import Line from './Line'
import project from '../Assets/Json/Project.json'
import { useEffect } from 'react'

import ScrollTrigger from 'gsap/src/ScrollTrigger';
import gsap from 'gsap';


const Projects = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.fromTo(".project", {
            opacity: 0,
            x: 40,
        }, {
            scrollTrigger: {
                trigger: '.project',
                start: 'top 70%',
                once: true
            },
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.inOut'
        })
    }, [])
    return (
        <>
            <section className=' pb-28 pt-20 lg:pt-1 px-5 lg:px-52 project'>
                <div className='flex flex-col justify-center items-center gap-6 pt-24 pb-10 '>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold'>Projects</h1>
                    <Line />
                </div>
                <div className='my-4'>
                    <a href="/RESUME.pdf" download="RESUME.pdf">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Download My CV</button>
                    </a>
                </div>

                <div className='flex justify-around items-center gap-10 flex-wrap'>
                    {/* item project */}
                    {project.map((value, index) => {
                        return (
                            <div className='w-72 flex flex-col justify-center items-center gap-5 px-5 py-2 shadow-lg  rounded-lg group ' key={index}>
                                <div className='w-72 h-64'>
                                    <img src={value.image} alt="infidea" className='w-full h-full bg-contain rounded-2xl' />
                                </div>
                                <h1 className='w-40 text-center font-semibold tracking-wider'>{value.name} </h1>

                                <div className='flex justify-between items-center w-full text-gray-500'>
                                    <p>Project</p>
                                    <p className='text-black font-semibold'>{value.category} </p>
                                </div>

                                <div className='py-8'>
                                    <button className='px-8 rounded-xl border py-5 group-hover:bg-primary text-gray-400 group-hover:text-white transition-all duration-300 ease-in'><a href={value.link} target='blank'>See Project</a></button>
                                </div>
                            </div>
                        )
                    })}


                </div>




            </section>
        </>
    )
}

export default Projects