import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import style from "./carrusel.css"
import { Carousel } from 'react-responsive-carousel';

export default function DemoCarousel ({onChange,onClickItem, onClickThumb}){
        return (
        <div className="carousel-wrapper" >
            <Carousel autoPlay={false}
             showStatus={false} 
             showThumbs={false}
             showArrows={true}
             onChange={onChange}
             dynamicHeight={true}
             onClickItem={onClickItem} 
             onClickThumb={onClickThumb}
             infiniteLoop={true}>
                <div>
                    <img style={{borderRadius:"10px"}} src="./img/slide-1.jpg" alt=""/>
                    {/* <p className="legend">Winter Wear Collection is Here</p> */}
                </div>
                <div>
                    <img style={{borderRadius:"10px"}}  src="./img/slide-2.jpg" alt="" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img style={{borderRadius:"10px"}} src="./img/slide-3.jpg" alt="" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>
        );
    }
