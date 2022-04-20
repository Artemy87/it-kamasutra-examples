import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action('on or off clicked')

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args}/>;


export const UncontrolledOnOffMode = () => <UncontrolledOnOff onChange={callback}/>
// export const OffMode = () => <UncontrolledOnOff />
// export const UncontrolledOnOff = () => {
//     const [on, setOn] = useState(false);
//     return <UncontrolledOnOff />
// }
