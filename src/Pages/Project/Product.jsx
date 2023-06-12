import './product.scss'
import React, { useEffect } from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import products from './../../Component/Products'
import 'aos/dist/aos.css'
import AOS from 'aos'
const Product = () => {
    const { Id } = useParams()
    const choosen = products.find((item) => item.id == Id)
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='Product'>
            <div className="image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <img src={choosen.img} alt="" />
            </div>
            <div className="disc">
                <div className="head small" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="dot"></div>
                    <h1>live demo</h1>
                    <a href={choosen.link} target="_blank"><BsBoxArrowInUpRight /></a>
                </div>
                <div className="head"data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
                    <div className="dot"></div>
                    <h1>discription</h1>
                </div>
                <p data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>{choosen.p}
                </p>
                <div className="head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='600'>
                    <div className="dot"></div>
                    <h1>done using</h1>
                </div>
                <div className="using" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='700'>
                    {choosen.react && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">React</div>
                        </div>
                    )}
                    {choosen.sass && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">Sass</div>
                        </div>
                    )}
                    {choosen.reduxtoolkit && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">Redux Toolkit</div>
                        </div>
                    )}
                    {choosen.fakeData && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">Fake Data</div>
                        </div>
                    )}
                    {choosen.api && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">api</div>
                        </div>
                    )}
                    {choosen.bootstrap && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">bootstrap</div>
                        </div>
                    )}
                    {choosen.css && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">css</div>
                        </div>
                    )}

                </div>
                <div className="head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='700'>
                    <div className="dot"></div>
                    <h1>social media</h1>
                </div>
                <div className="using" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='700'>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name"><a href='https://www.linkedin.com/in/ahmed-osama-1499b1146' target="_blank">LinkedIn</a></div>
                        <div className="icon"><BsLinkedin /></div>
                    </div>
                    <div className="item">
                        <div className="dots"></div>
                        <div className="name"><a href={choosen.git} target="_blank">github</a></div>
                        <div className="icon"><BsGithub /></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product
