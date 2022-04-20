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

export const ControlledInput = () => {
  const [value, setValue] = useState('')
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return <input value={value} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
  const [value, setValue] = useState(true)
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
  }
  return <input type="checkbox" checked={value} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>(undefined)

  const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
      <select value={value} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
      </select>
  )
}

export const ControlledInputWithFixedValue = () => <input value={'incubator.by'}/>
