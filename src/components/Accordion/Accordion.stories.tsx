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

// export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setCollapsed={callback} />
export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setCollapsed={callback} />
export const UncontrolledMode = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return <Accordion titleValue={'Users-'} collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)} />
}
