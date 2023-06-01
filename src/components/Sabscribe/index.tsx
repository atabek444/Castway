import React from 'react';
import {AiFillStar} from "react-icons/ai";

const Subscribe = () => {
    return (
        <div id={"subscribe"}>
           <div className="bg-black rounded-[20px] p-[40px] my-20">
               <p className="text-[#118DA8]">Email Newsletter</p>


            <div className="container flex justify-between items-start  ">
                <div className="">
                    <h2 className="text-white text-7xl">Subscribe <br/> for updates</h2>
                </div>
                <div className="flex flex-col">
                    <input className="w-[600px] p-2 rounded-[5px] bg-[#191919] mb-[10px]"  type="text" placeholder="Name"/>
                    <input className="w-[600px] p-2 rounded-[5px] bg-[#191919]" type="text" placeholder="Email"/>
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-[100px] mt-3 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit
                    </button>

                </div>
            </div>
            </div>
          <div className="flex flex-wrap justify-between ">
              <div className="w-[423px] h-[351px] mb-[40px] rounded-[20px] bg-black p-10">
                  <div className="flex">
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                  </div>
                  <h1 className="w-[313px] my-10 text-white text-4xl">I can’t recommend this podcast enough</h1>
                  <h3 className="text-[white]">Betty Lacey</h3>
              </div>
              <div className="w-[423px] h-[351px] mb-[40px] rounded-[20px] bg-black p-10">
                  <div className="flex">
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                  </div>
                  <h1 className="w-[313px] my-10 text-white text-4xl">Jacob is the best in the business</h1>
                  <h3 className="text-[white]">Adam Driver</h3>
              </div>
              <div className="w-[423px] h-[351px] mb-[40px] rounded-[20px] bg-black p-10">
                  <div className="flex">
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                  </div>
                  <h1 className="w-[313px] my-10 text-white text-4xl">A wealth of audio knowledge</h1>
                  <h3 className="text-[white]">Marcus Brown</h3>
              </div>
              <div className="w-[423px] h-[351px]  rounded-[20px] bg-black p-10">
                  <div className="flex">
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                  </div>
                  <h1 className="w-[313px] my-10 text-white text-4xl">Every episode is a gem!</h1>
                  <h3 className="text-[white]">Jessica Knowl</h3>
              </div>
              <div className="w-[423px] h-[351px]  rounded-[20px] bg-black p-10">
                  <div className="flex">
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                  </div>
                  <h1 className="w-[313px] my-10 text-white text-4xl">Whoa whoa, let me take some notes!</h1>
                  <h3 className="text-[white]">Scott Adams</h3>
              </div>
              <div className="w-[423px] h-[351px]  rounded-[20px] bg-black p-10">
                  <div className="flex">
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                      <AiFillStar className="text-amber-400 text-2xl"/>
                  </div>
                  <h1 className="w-[313px] my-10 text-white text-4xl">I’ve upped my game considerably since I started listening</h1>
                  <h3 className="text-[white]">Steven Blast</h3>
              </div>
          </div>

        </div>
    );
};

export default Subscribe;