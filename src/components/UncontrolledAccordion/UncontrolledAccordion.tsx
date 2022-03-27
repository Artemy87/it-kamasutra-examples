import {useState} from "react";
import SuperButton from "../../SuperButton/SuperButton";

type UncontrolledAccordionType = {
    titleValue:string
}
type UncontrolledAccordionTitleType = {
    titleValue:string
    onClickHandler: () => void
}
type UncontrolledAccordionBodyType = {
    value:string
}

export function UncontrolledAccordion(props:UncontrolledAccordionType) {

    const [collapsed, setCollapsed] = useState(true);

    const onClickHandler = () => {
        setCollapsed(!collapsed);
    }

    return <div>
            <AccordionTitle titleValue={props.titleValue} onClickHandler={onClickHandler}/>
            {collapsed
                ? <AccordionBody value={props.titleValue}/>
                : <div>---</div>}
        </div>
}

function AccordionTitle(props:UncontrolledAccordionTitleType) {
    return (
        <>
            <span>{props.titleValue}</span>
            <SuperButton onClick={props.onClickHandler}>show</SuperButton>
        </>
    );
}

function AccordionBody(props: UncontrolledAccordionBodyType) {
    return (
        <ul>
            <li>{props.value}</li>
            <li>{props.value}</li>
            <li>{props.value}</li>
        </ul>
    );
}

