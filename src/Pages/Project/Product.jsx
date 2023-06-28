import './product.scss'
import React, { useEffect } from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import products from './../../Component/Products'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useState } from 'react';
import { db } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
const Product = () => {
    const { Id } = useParams()
    // const product = products.find((item) => item.id == Id)
    const [product, setproduct] = useState({})

    const docRef = doc(db, "progects", Id);
  useEffect(() => {
    AOS.init();
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setproduct(docSnap.data())
      } else {
        console.log("No such document!");
      }

    }
    getProduct()

  }, [])

    return (
        <div className='Product'>
            <div className="image" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                <img src={product.img} alt="" />
            </div>
            <div className="disc">
                <div className="head small" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='300'>
                    <div className="dot"></div>
                    <h1>live demo</h1>
                    <a href={product.link} target="_blank"><BsBoxArrowInUpRight /></a>
                </div>
                <div className="head"data-aos="fade-in" data-aos-duration="2000" data-aos-delay='400'>
                    <div className="dot"></div>
                    <h1>description</h1>
                </div>
                <p data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>{product.p}
                </p>
                <div className="head" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='600'>
                    <div className="dot"></div>
                    <h1>done using</h1>
                </div>
                <div className="using" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='700'>
                    {product.react && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">React</div>
                        </div>
                    )}
                    {product.sass && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">Sass</div>
                        </div>
                    )}
                    {product.reduxtoolkit && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">Redux Toolkit</div>
                        </div>
                    )}
                    {product.firebase && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">Firebase</div>
                        </div>
                    )}
                    {product.fakeData && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">Fake Data</div>
                        </div>
                    )}
                    {product.api && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">api</div>
                        </div>
                    )}
                    {product.bootstrap && (
                        <div className="item">
                            <div className="dots"></div>
                            <div className="name">bootstrap</div>
                        </div>
                    )}
                    {product.css && (
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
                        <div className="name"><a href={product.git} target="_blank">github</a></div>
                        <div className="icon"><BsGithub /></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product
