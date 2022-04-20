import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";

import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledAccordion>;

// const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion title={'Users'}/>;

export const MenuCollapsedMode = () => <UncontrolledAccordion title={'Users'}/>

