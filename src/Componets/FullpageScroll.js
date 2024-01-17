import React, {useState} from "react";
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import Homepage from "../Pages/Homepage";
import AboutMe from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
import {Parallax, ParallaxBanner, useParallax, onProgressChange} from 'react-scroll-parallax'
import '../index.css'
import Navbar from "./Navbar";

const FullpageScroll = () => {
    const [progress, setProgress] = useState(0)
    return (
        <>     
            <Navbar style = {{marginBottom: '0'}}/>
            <Parallax>
                <img src = "/Images/Subject.png" alt="" style={{marginTop: '0'}} className="Ja"></img>
            </Parallax>
            <Parallax speed={-5} style={{paddingBottom: '800px'}} >
                <Homepage/>
            </Parallax>
            <Parallax speed={5}>
                <AboutMe/>
            </Parallax>
            <Parallax speed={5} style={{paddingTop: '400px'}}>
                <Projects/>
            </Parallax>
            
        </>
    )
}

export default FullpageScroll
