import React from 'react';
import img1 from '../../img/1.png'
import img2 from '../../img/12345.svg'
const Hero = () => {
    return (
        <div id="hero">
            <div className="container flex justify-between items-center py-[40px]">
                <img src={img1} alt="" width={650}/>
                <div className="">
                   <div className="">
                       <h1 className="text-white text-8xl w-[650px]">
                           Take your podcast to the
                       </h1>
                       <h1 className="text-white text-7xl py-[10px]">next <span className="text-8xl">LEVEL</span></h1>
                   </div>
                    <div className="pt-40 pb-1">
                        <h1 className="text-white text-3xl ">Listen on</h1>
                    </div>
                    <img className="mt-5" src={img2} width={400} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;