import React from 'react';
import img1 from '../../img/2.png'
import img2 from '../../img/3.png'
import img3 from '../../img/4.png'


const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="flex justify-between items-center py-[40px]">
                        <h1 className="text-white text-5xl">Latest episodes</h1>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View all episodes</button>
                    </div>
                    <div className="flex justify-start py-[30px] my-[30px] px-[30px] bg-black rounded-[20px]">
                        <img src={img1} alt=""/>
                        <div className="ml-20">
                            <p className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">Gear</p>
                       <h4 className="text-[#118DA8] text-2xl py-[20px]">Episode 3</h4>
                            <h1 className="text-white py-[30px] text-5xl w-[500px]">Should you get outboard audio gear?</h1>
                            <h3 className="w-[757px] text-2xl text-blue-100 ">Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</h3>
                            <button className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View all episodes</button>
                        </div>
                    </div>
                    <div className="flex justify-start py-[30px] my-[30px] px-[30px] bg-black rounded-[20px]">
                        <img src={img2} alt=""/>
                        <div className="ml-20">
                            <p className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">Tips & Tricks</p>
                            <h4 className="text-[#118DA8] text-2xl py-[20px]">Episode 2</h4>
                            <h1 className="text-white py-[30px] text-5xl w-[500px]">Mic tricks to take you to the next level</h1>
                            <h3 className="w-[757px] text-2xl text-blue-100 ">Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</h3>
                            <button className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View all episodes</button>
                        </div>
                    </div>
                    <div className="flex justify-start py-[30px] my-[30px] px-[30px] bg-black rounded-[20px]">
                        <img src={img3} alt=""/>
                        <div className="ml-20">
                            <p className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">Gear</p>
                            <h4 className="text-[#118DA8] text-2xl py-[20px]">Episode 1</h4>
                            <h1 className="text-white py-[30px] text-5xl w-[500px]">The best microphone under $200</h1>
                            <h3 className="w-[757px] text-2xl text-blue-100 ">With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.</h3>
                            <button className="text-white mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View all episodes</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;