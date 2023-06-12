import React, { useEffect, useRef } from 'react'
import './home.scss'
import { AiOutlineSwapLeft } from 'react-icons/ai';
import { AiOutlineSwapRight } from 'react-icons/ai';
import products from '../../Component/Products';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import AOS from 'aos'
const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const scrollRef = useRef(null)
    const scroll = (direction) => {
        const { current } = scrollRef
        if (direction === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }
    return (
        <div className='Home'>
            <div className="container" ref={scrollRef} >
                {products.map((item, i) => {
                    const randNum = Math.floor(Math.random() * 10) + 1;
                    return (
                        <div className={`slide slide${randNum}`} key={item.id} >
                            <div class="inner-inner-container" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                                <div class="top-section">
                                    <h1>
                                        {item.name}
                                    </h1>
                                    <p>{item.p}</p>
                                </div>
                                <Link to={`/product/${item.id}`}>
                                    <div class="bottom-section">view</div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="icons" >
                <div className="icon" onClick={() => scroll('left')}><AiOutlineSwapLeft /></div>
                <div className="icon icon2" onClick={() => scroll('right')}><AiOutlineSwapRight /></div>
            </div>
        </div>
    )
}

export default Home
