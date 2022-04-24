import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

// export const UserUncollapsedMode = Template.bind({});
// UserUncollapsedMode.args = {
//     titleValue: 'Menu',
//     collapsed: false,
//     setCollapsed: callback
// };
//
// export const UserUncollapsedMode2 = Template.bind({});
// UserUncollapsedMode2.args = {
//     titleValue: 'Menu',
//     collapsed: false,
//     setCollapsed: callback
// };

const callback = action('Accordion mode change event fired: clicked')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={true}
        onChange={callback}
        onClick={onClickCallback}
        items={[
            {title: 'Igor', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Victor', value: 3}
        ]}
    />
export const UserUncontrolledMode = () =>
    <Accordion
        titleValue={'Users'}
        collapsed={false}
        onChange={callback}
        onClick={onClickCallback}
        items={[
            {title: 'Igor', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Victor', value: 3}
        ]}
    />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        onClick={onClickCallback}
        items={[
            {title: 'Igor', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Victor', value: 3}
        ]}
    />
}