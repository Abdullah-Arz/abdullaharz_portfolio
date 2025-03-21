import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {

    const [hasCopied, setHasCopied] = useState(false)
    const globeEl = useRef();
    useEffect(() => {
        // Auto-rotate
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 2;
      }, []);

      const hanldCopy = () => {
        navigator.clipboard.writeText('itsabd64@gmail.com');

        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        },2000)
      }
      
  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 h-full gap-5'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>
                            Hi, I'm Abdullah
                        </p>
                        <p className='grid-subtext'>
                        With three years of frontend experience, I excel at building visually engaging UIs and integrating APIs to create intuitive, high-performance web applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container '>
                    <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>
                            Tech Stack
                        </p>
                        <p className='grid-subtext'>
                            I specialize in JavaScript, with a strong focus on the React and Next.js ecosystems.
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container '>
                    <div className='rounded-3xl w-full sm:[326px] h-fit flex justify-center items-center'>
                        <Globe 
                        ref={globeEl}
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                        hexBinResolution={4}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        // labelsData={[{ lat: 40, lng: -100, text: 'Abdullah Arz', color: 'white', size: 20 }]}
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>
                            I work remotely across most timezone
                        </p>
                        <p className='grid-subtext'>
                            I'm based in Pakistan, with remote work available.
                        </p>
                        <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                    </div>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container '>
                    <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>
                            My Passion for Coding
                        </p>
                        <p className='grid-subtext'>
                            I love solving problems and building things through code. Coding isn't just my profession - it is my passion.
                        </p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container '>
                    <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>
                            Contact Me
                        </p>
                        <div className='copy-container' onClick={hanldCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy' />
                            <p className='lg:text-xl md:text-xl font-medium text-gray_gradient text-white'>itsabd64@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default About