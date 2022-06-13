import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {Clock} from "./Clock";


export default {
    title: 'Clock',
    component: Clock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Clock>;

export const BaseExample = () => {
    return <Clock />
}