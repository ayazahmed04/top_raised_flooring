import { curve, heroBackground, robot } from '../assets'
import Button from './Button'
import Section from './Section'
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero'
import { heroIcons } from '../constants'
import { ScrollParallax } from 'react-just-parallax'
import { useRef } from 'react'
import Generating from './Generating'
import Notification from './Notification'
import CompanyLogos from './CompanyLogos'
import { Link } from 'react-router-dom'

const Hero = () => {
   const parallaxRef = useRef(null)

   return (
      <Section
         className="pt-[12rem] -mt-[5.25rem]"
         crosses
         crossesOffset="lg:translate-y-[5.25rem]"
         customPaddings
         id="hero"
      >
         <div className="container relative" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
               <h1 className="h1 mb-6">
                  We want to be number one&nbsp;provider of&nbsp;raised flooring{' '}
                  {` `}
                  <span className="inline-block relative">
                     solutions in Dubai.{' '}
                     <img
                        src={curve} //   Alternative source if he doesnt' like
                        // src={"https://www.kehuafloors.com/data/upload/20200608/5eddf95bdc4d0.jpg"}
                        className="absolute top-full left-0 w-full xl:-mt-2  rounded-lg "
                        width={624}
                        height={28}
                        alt="Curve"
                     />
                  </span>
               </h1>
               <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                  Leading Raised Access Floor Manufacturer with Over 30 Years of
                  Experience, Exporting to Gulf and European Countries
               </p>
               {/* <Link to={"/login"}> 
          <Button  white>
            DOWNLOAD PDF
          </Button>
          </Link> */}

               {/* Changing it to download pdf  */}
               <a
                  href="https://raw.githubusercontent.com/ayazahmed04/pdf_host_for_web/main/catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
               >
                  <Button white>DOWNLOAD PDF</Button>
               </a>
            </div>
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
               <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                  <div className="relative bg-n-8 rounded-[1rem]">
                     <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                     <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                        <img
                           src={
                              'https://www.kehuafloors.com/data/upload/20200608/5eddf92d368eb.jpg'
                           }
                           className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                           width={1024}
                           height={490}
                           alt="Top raised Floor Working Environment"
                        />

                        <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                        <ScrollParallax isAbsolutelyPositioned>
                           <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                              {heroIcons.map((icon, index) => (
                                 <li className="p-5" key={index}>
                                    <img
                                       src={icon}
                                       width={24}
                                       height={25}
                                       alt={icon}
                                    />
                                 </li>
                              ))}
                           </ul>
                        </ScrollParallax>

                        <ScrollParallax isAbsolutelyPositioned>
                           <Notification
                              className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                              title="Top Raised Floor"
                           />
                        </ScrollParallax>
                     </div>
                  </div>

                  <Gradient />
               </div>
               <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                  <img
                     src={heroBackground}
                     className="w-full"
                     width={1440}
                     height={1800}
                     alt="hero"
                  />
               </div>

               <BackgroundCircles />
            </div>

            <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
         </div>

         <BottomLine />
      </Section>
   )
}

export default Hero
