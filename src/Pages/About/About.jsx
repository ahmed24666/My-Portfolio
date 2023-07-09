import React, { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

import './about.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { db } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
const About = () => {
    const [cv, setcv] = useState('')

    const docRef = doc(db, "cv", '1');
    useEffect(() => {
        AOS.init();
        const getProduct = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setcv(docSnap.data())
            } else {
                console.log("No such document!");
            }

        }
        getProduct()

    }, [])
    console.log(cv.cv)
    return (
        <div className='About'>
            <div className="left" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
                <h2>Dev .</h2>
                <h1>Ahmed Osama</h1>
            </div>
            <div className="right">
                <div className="head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
                    <div className="dot"></div>
                    <h1>my resume</h1>
                    <div className="icon"><a href={cv.cv} target="_blank" rel="noopener noreferrer" download={cv.cv}><BsBoxArrowInUpRight /></a></div>
                </div>
                <div className="head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='700'>
                    <div className="dot"></div>
                    <h1>social media</h1>
                </div>
                <div className="using" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='900'>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name"><a href='https://www.linkedin.com/in/ahmed-osama-1499b1146' target="_blank">LinkedIn</a></div>
                        <div className="icon"><BsLinkedin /></div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name"><a href='https://github.com/ahmed24666' target="_blank">github</a></div>
                        <div className="icon"><BsGithub /></div>
                    </div>
                </div>
                <div className="head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='1100'>
                    <div className="dot"></div>
                    <h1>skills</h1>
                </div>
                <div className="using" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='1300'>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">html</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">css</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">javaScript fundamental </div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">React</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">Sass</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">react bootstrap</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">redux Toolkit</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">git</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">GitHub</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">OOP</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">Problem Solving</div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name">Restful APIs</div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default About
