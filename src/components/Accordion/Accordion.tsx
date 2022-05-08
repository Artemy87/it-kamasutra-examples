import React from "react";

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
            <AccordionTitleMemo
                title={props.titleValue}
                onChange={props.onChange}
            />
            { !props.collapsed && <AccordionBodyMemo items={props.items} onClick={props.onClick}/> }
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

const AccordionTitleMemo = React.memo(AccordionTitle)

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return <ul>
            {props.items.map((el, idx) => <li onClick={() => props.onClick(el.value)} key={idx}>{el.title}</li> )}
        </ul>
}

const AccordionBodyMemo = React.memo(AccordionBody)