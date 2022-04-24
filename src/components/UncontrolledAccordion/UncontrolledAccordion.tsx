import {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type UncontrolledAccordionType = {
    title: string
}


export const UncontrolledAccordion = (props:UncontrolledAccordionType) => {

    // const [collapsed, setCollapsed] = useState<boolean>(true);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    const onClickHandler = () => {
        dispatch({type: TOGGLE_COLLAPSED});
    }

    return <div>
            <UncontrolledAccordionTitle title={props.title} onClickHandler={onClickHandler}/>
            {!state.collapsed && <UncontrolledAccordionBody value={'JS'}/>}
        </div>
}

type TitlePropsType = {
    title:string
    onClickHandler: () => void
}

const UncontrolledAccordionTitle = (props:TitlePropsType) => {
    return <span onClick={props.onClickHandler}>{props.title}</span>
}

type BodyPropsType = {
    value:string
}

const UncontrolledAccordionBody = (props: BodyPropsType) => {
    return (
        <ul>
            <li>{props.value}</li>
            <li>{props.value}</li>
            <li>{props.value}</li>
        </ul>
    );
}

