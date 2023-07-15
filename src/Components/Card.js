import React from "react";
import data from "../data";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
    let datatobeshown = props.data;
    let handler = props.handler;
    let id = props.id;
    let cardstobeshown = props.cardsids


    function hanldeprev() {
        if (id != 0) {
            handler(id - 1)
        }
        else {
            id = data.length;
            handler(id - 1)
        }
    }
    function hanldenext() {
        handler(Math.abs(id + 1) % 5)
    }


    function Randomgenerator() {
        // id = Math.floor(Math.random() * data.length); may return same index
        // filtering and generating random value from rest of the cards id
        let filtered = cardstobeshown.filter((cardid) => {
            return cardid !== id + 1;
        })

        //-1 because the filtered data is length 1-5 and ids 0-5 
        id = filtered[Math.floor(Math.random() * filtered.length)] - 1
        handler(id)
    }




    return (
        <div className="card flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md ">
            {/* image div */}

            <div className="flex flex-col md:relative">
                <div className="image_div absolute top-[-7rem] z-10 mx-auto ">

                    <img src={datatobeshown.image} className="image_ aspect-square rounded-full w-[140px] h-[140px] z-25">
                    </img>
                    <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]">

                    </div>
                </div>
                {/* Name container */}

                <div className="text-center mt-7">
                    <p className="font-bold text-2xl capitalize ">
                        {datatobeshown.name}
                    </p>
                </div>

                <div className="text-center mt-4">
                    <p className="job text-sm uppercase">
                        {datatobeshown.job}
                    </p>
                </div>





                <div className="text-violet-800 mx-auto mt-5">
                    <FaQuoteLeft />
                </div>


                {/* Description */}

                <div>
                    <p className="description text-center mt-4 ">
                        {datatobeshown.text}
                    </p>
                </div>

                <div className="text-violet-800 mx-auto mt-5">
                    <FaQuoteRight />
                </div>




                <div className="arrows flex text-3xl mt-5 gap-3  font-bold mx-auto text-center">
                    <button onClick={hanldeprev}><FiChevronLeft /></button>
                    <button onClick={hanldenext}><FiChevronRight /></button>
                </div>


                <div className="mt-6 group-[]:">
                    <button onClick={Randomgenerator} className="bg-violet-800 hover:bg-violet-600 hover:text-gray-900  transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise Me</button>
                </div>

            </div>
        </div >
    )
}
export default Card;