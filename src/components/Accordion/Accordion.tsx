type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
    )
}

type AccordionTitleType = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <div onClick={ () => props.onChange() }>{props.title}</div>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return <ul>
            {props.items.map((el, idx) => <li onClick={() => props.onClick(el.value)} key={idx}>{el.title}</li> )}
        </ul>
}

