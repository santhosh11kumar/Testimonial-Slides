import Card from "./Card";
import React, { useState } from "react";
import data from "../data"

const Display = (props) => {
    let props_data = props.data;
    let [id, setId] = useState(0);
    // knowing the total range of the cards
    let cardstobeshown = [];
    for (var i = 0; i < data.length; i++) {
        cardstobeshown.push(data[i].id)
    }

    return (
        <div className="text-center">
            <div className="title text-4xl font-bold">Our Testimonials</div>
            <div className="underlinegray bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>

            <Card data={props_data[id]} id={id} handler={setId} cardsids={cardstobeshown}></Card>
        </div>
    )
}

export default Display;