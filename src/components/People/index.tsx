import React from 'react'
import img1 from '../../img/5.png'
import img2 from '../../img/6.svg'
import {BsArrowRight} from "react-icons/bs";


const People = () => {
    return (
        <div id="people">
            <div className="container">
                <div className="people flex justify-between items-center">
                    <div className="">
                        <BsArrowRight className={"bg-[#118DA8] text-white rounded-[50%]"} style={{fontSize : "94px" , padding : "10px"}}/>
                    <p className="text-[#118DA8] py-[30px]">Meet your host</p>
                        <h1 className="text-5xl text-white">Jacob Paulaner</h1>
                        <p className="w-[403px] text-white py-[20px]">Jacob has a background in audio engineering, and has been podcasting since the early days.

                        </p>
                        <p className="w-[403px] text-white">He’s here to help you level up your game by sharing everything he’s learned along the way.</p>

                    </div>
                    <img src={img1} alt=""/>
                </div>

            </div>
            </div>
    );
};

export default People;