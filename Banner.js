import React from 'react';
//import { Button } from './Button';
//import { Link } from 'react-router-dom';
import './Banner.css';



function Banner ({ lightBg, lightText, lightTextDesc, headline, description, img, imgStart}) {
    return (
    <>
        <div className={lightBg ? 'home_banner':'home_bannerdarkBg'}>
            <div classNam="containe">
                <div className="row home_banner" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home_banner-text-wrapper">
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home_banner-subtitle' : 'home_banner-subtitle dark'}>
                                {description}
                            </p>


                        </div>

                    </div>
                    <div className='col'>
                        <div className='home_banner-img-wrapper'>
                            <img src ={img} className='home_banner-img' />
                        </div>
                    </div>

                </div>
            </div>



        </div>
    </>
    )
}

export default Banner
