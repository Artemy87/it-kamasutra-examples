import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import {useState} from "react";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    // const [light, setLight] = useState<boolean>(true)
    //
    // const changeLight = (isOn:boolean) => {
    //     let light = isOn;
    //     setLight(light)
    // }

  return (
    <div className="App">
        {/*<Rating value={3} />*/}
        {/*<Rating value={0} />*/}
        {/*<Rating value={2} />*/}
        {/*<Rating value={5} />*/}
        {/*<Rating value={1} />*/}
        <UncontrolledRating />
        <hr/>
      {/*<Accordion titleValue='Menu' collapsed={true}/> /!* true - список свернут, false - не свернут*!/*/}
      {/*<Accordion titleValue='Navigation' collapsed={false}/>*/}
        <UncontrolledAccordion titleValue={'Menu'}  />
        <UncontrolledAccordion titleValue={'Users'}  />
        <hr/>
      {/*  <OnOff />*/}

        <hr/>
    </div>
  );
}


export default App;
