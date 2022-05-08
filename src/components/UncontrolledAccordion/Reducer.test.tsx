import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('reducer should by true', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)

})

test('reducer should by false', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)

})

test('reducer should throw becose acttion type is incorrect', () => {

    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError();

})