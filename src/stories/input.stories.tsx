import React, {ChangeEvent, useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
  title: 'input',
  // component: OnOff,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// const Template: ComponentStory<typeof input> = (args) => <input {...args} />;

export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {

  const [value, setValue] = useState('')

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return <div><input onChange={onChangeHandler} /> - {value}</div>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }
  return <div>
    <input ref={inputRef} />
    <button onClick={save}>save</button> - {value}
  </div>
}

export const ControlledInputWithFixedValue = () => <input value={'incubator.by'}/>

//
// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
//
//
