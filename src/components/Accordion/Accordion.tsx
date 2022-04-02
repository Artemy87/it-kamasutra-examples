type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
}
type AccordionTitlePropsType = {
    titleValue:string
}
type AccordionBodyPropsType = {
    value:string
}

export const Accordion = (props:AccordionPropsType) => {
    return <div>
            <AccordionTitle titleValue={props.titleValue}/>
            {!props.collapsed
                ? <AccordionBody value={props.titleValue}/>
                : <div>---</div>}
        </div>
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return (
        <h3>{props.titleValue}</h3>
    );
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>{props.value}</li>
            <li>{props.value}</li>
            <li>{props.value}</li>
        </ul>
    );
}

