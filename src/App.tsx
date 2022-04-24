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

            <UncontrolledRating onChange={()=> console.log('clicked')}/>

            <hr/>

            {/*<Accordion titleValue='Menu'*/}
            {/*           collapsed={collapsed}*/}
            {/*           setCollapsed={setCollapsedHandler}/>*/}

            <UncontrolledAccordion title={"Users"}/>

            <hr/>

            <OnOff switchOn={switchOn}
                   setSwitchOn={setSwitchOn}/>

            <UncontrolledOnOff onChange={() => console.log('click')}/>

            <hr/>

        </div>
    );
}


export default App;
