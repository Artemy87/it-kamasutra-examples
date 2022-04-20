import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingType} from './Rating'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStarts = () => <Rating rating={0} setRating={x=>x} />
export const Rating1 = () => <Rating rating={1} setRating={x=>x} />
export const Rating2 = () => <Rating rating={2} setRating={x=>x} />
export const Rating3 = () => <Rating rating={3} setRating={x=>x} />
export const Rating4 = () => <Rating rating={4} setRating={x=>x} />
export const Rating5 = () => <Rating rating={5} setRating={x=>x} />
export const UncotrolledRating = () => {
    const [star, setStar] = useState<RatingType>(0)
    return <Rating rating={star} setRating={setStar} />
}

// Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
