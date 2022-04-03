import './App.css';
import {Rating, RatingType} from "./components/Rating/Rating";
import { UncontrolledRating } from "./components/Rating/UncontrolledRating";
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledAccordion } from "./components/Accordion/UncontrolledAccordion";
import { UncontrolledOnOff } from "./components/OnOff/UncontrolledOnOff";
import { OnOff } from "./components/OnOff/OnOff";
import { useState } from "react";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    // const setRatingValueHandler = (ratingValue: RatingType) => {
    //     setRatingValue(ratingValue)
    // }

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    // const setTurnOnHandler = (value:boolean) => {
    //     setTurnOn(value)
    // }

    return (
        <div className="App">

            <Rating rating={ratingValue}
                    setRating={setRatingValue} />

            <UncontrolledRating/>

            <hr/>

            <Accordion titleValue='Menu'
                       collapsed={collapsed}
                       setCollapsed={setCollapsedHandler}/>

            <UncontrolledAccordion />

            <hr/>

            <OnOff switchOn={switchOn}
                   setSwitchOn={setSwitchOn}/>

            <UncontrolledOnOff />

            <hr/>

        </div>
    );
}


export default App;
