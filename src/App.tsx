import './App.css';
import {Rating, RatingType} from "./components/Rating/Rating";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";
import { OnOff } from "./components/OnOff/OnOff";
import { useState } from "react";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [switchOn, setSwitchOn] = useState<boolean>(false);

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

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
