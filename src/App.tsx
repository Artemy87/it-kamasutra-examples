import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import {useState} from "react";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {

    // const [light, setLight] = useState<boolean>(true)
    //
    // const changeLight = (isOn:boolean) => {
    //     let light = isOn;
    //     setLight(light)
    // }

  return (
    <div className="App">
      {/*<PageTitle title='This is App Component'/>*/}
      {/*<PageTitle title='My friends'/>*/}
      {/*<Rating value={3} />*/}
      {/*<Accordion titleValue='Menu' collapsed={true}/> /!* true - список свернут, false - не свернут*!/*/}
      {/*<Accordion titleValue='Navigation' collapsed={false}/>*/}
      {/*<Rating value={0} />*/}
      {/*<Rating value={2} />*/}
      {/*<Rating value={5} />*/}
      {/*  <OnOff />*/}
        <UncontrolledAccordion titleValue={'Menu'}  />
        <UncontrolledAccordion titleValue={'Users'}  />
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
      <h1>{ props.title }</h1>
  )
}

export default App;
