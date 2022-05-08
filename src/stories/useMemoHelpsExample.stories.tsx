import React, {useState} from 'react';

export default {
    title: 'useMemoHelpsExample'
}

export type SelectType = {
    countries: {id: string, population: number, city: string[]}[]
}

export const SelectFilteredM = (props: SelectType) => {
    debugger
    return (
        <select>
            {props.countries.map(el => el.city.map(el => {
                debugger
                return (
                    <option key={el}>{el}</option>
                )
            }))}
        </select>
    );
};

export const SelectFilteredPopulation = (props: SelectType) => {
    return (
        <select>
            {props.countries.map(el => el.city.map(el => {
                return (
                    <option key={el}>{el}</option>
                )
            }))}
        </select>
    );
};

export const SelectFilteredCountries = (props: SelectType) => {
    return (
        <select>
            {props.countries.map(el => el.city.map(el => {
                return (
                    <option key={el}>{el}</option>
                )
            }))}
        </select>
    );
};

export const Country = () => {
    const [counter, setCounter] = useState(0)
    const [countries, setCountry] = useState([
        {id: 'Russia', population: 150000000, city: ['Moscow', 'Volgograd']},
        {id: 'Belarus', population: 9000000, city: ['Minsk', 'Brest']},
        {id: 'Ukraine', population: 44000000, city: ['Kiev', 'Odessa']}
    ])

    let newCountries = [...countries]

    const filteredM = newCountries.filter(el => el.city[0][0] === 'M' || el.city[1][0] === 'M')

    const filteredPopulation = newCountries.filter(el => el.population > 10000000)

    const filteredCountries = newCountries.filter(el => el.id === 'Russia')


    const onClickHandler = () => setCounter(counter + 1)

    return <>
        {counter}
        <button onClick={onClickHandler}>+</button>
        <SelectFilteredM countries={filteredM}/>
        <SelectFilteredPopulation countries={filteredPopulation}/>
        <SelectFilteredCountries countries={filteredCountries}/>
    </>
}
