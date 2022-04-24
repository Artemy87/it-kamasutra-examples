import {Select} from './Select'
import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;


export const WithValue = () => {
    const [value, setValue] = useState('2');

    return <Select
        onChange={setValue}
        value={value}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Moscow'},
            {value: '3', title: 'Kiev'},
        ]}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return <Select
        onChange={setValue}
        value={value}
        items={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Moscow'},
            {value: '3', title: 'Kiev'},
        ]}
    />
}
