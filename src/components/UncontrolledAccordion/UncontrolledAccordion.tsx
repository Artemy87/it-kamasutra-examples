import {useState} from "react";

type UncontrolledAccordionType = {
    title: string
}

export const UncontrolledAccordion = (props:UncontrolledAccordionType) => {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const onClickHandler = () => {
        setCollapsed(!collapsed);
    }

    return <div>
            <UncontrolledAccordionTitle onClickHandler={onClickHandler} title={props.title}/>
            {!collapsed && <UncontrolledAccordionBody value={'JS'}/>}
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
