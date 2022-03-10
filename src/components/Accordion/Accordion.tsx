type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    if(props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <div> . . .</div>
            </div>
        );
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody value={4}/>
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    value: number
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

export default Accordion;
