import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import './App.css';

function App() {
  return (
    <div className="App">
      <PageTitle title='This is App Component'/>
      <PageTitle title='My friends'/>
      <Rating value={3} />
      <Accordion titleValue='Menu' collapsed={true}/> {/* true - список свернут, false - не свернут*/}
      <Accordion titleValue='Navigation' collapsed={false}/>
      <Rating value={0} />
      <Rating value={2} />
      <Rating value={5} />
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
