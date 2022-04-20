type PropsType = {
    titleValue:string
    collapsed:boolean
    setCollapsed:() => void
}
type BodyPropsType = {
    value:string
}

export const Accordion = (props: PropsType) => {
    return (
        <div>
            <AccordionTitle
                titleValue={props.titleValue}
                collapsed={props.collapsed}
                setCollapsed={props.setCollapsed}/>
            { !props.collapsed && <AccordionBody value={props.titleValue} /> }
        </div>
    )
}

const AccordionTitle = (props: PropsType) => {
    return (
        <div onClick={ () => props.setCollapsed() }>{props.titleValue}</div>
    )
}

const AccordionBody = (props: BodyPropsType) => {
    return (
        <ul>
            <li>{props.value}</li>
            <li>{props.value}</li>
            <li>{props.value}</li>
        </ul>
    );
}

