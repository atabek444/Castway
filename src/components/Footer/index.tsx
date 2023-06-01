import React from 'react';
import img from "../../img/8.svg"
import img2 from "../../img/6.png"
const Footer = () => {
    return (
        <div id="footer">
            <div className="container flex justify-between py-[40px] mt-[100px]">
                <div className="">
                    <h1 className="text-white text-6xl mb-10">Castaway</h1>
                    <img src={img} alt=""/>

                </div>
                <div className="flex flex-col">
                    <a href="" className="text-white">Home</a>
                    <a href="" className="text-white">  About</a>
                    <a href="" className="text-white">Episodes</a>
                    <a href="" className="text-white">Contact</a>
                </div>
                <div className="flex flex-col">
                    <a href=""  className="text-white">Style Guide</a>
                    <a href="" className="text-white">Instructions</a>
                    <a href="" className="text-white">Changelog</a>
                    <a href=""  className="text-white">Credit</a>
                    <a href="" className="text-white">Powered by Webflow</a>
                    <a href="" className="text-white">Licenses</a>
                </div>
                <img src={img2} className="w-[400px] h-[32px]" alt=""/>
            </div>
            
        </div>
    );
};

export default Footer;