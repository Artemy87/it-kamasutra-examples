import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

export type SelectType = {
    onChange: (value: any) => void
    value?: string | null
    items: { value: string, title: string }[]
}

export const Select = (props: SelectType) => {

    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
							<div className={styles.items}>
                  {props.items.map(el => <div
                      onKeyPress={() => console.log('keypress')}
                      onMouseEnter={() => {
                          setHoveredElementValue(el.value)
                      }}
                      className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')}
                      key={el.value}
                      onClick={() => {
                          onItemClick(el.value)
                      }
                      }>{el.title}</div>)}
							</div>
            }
        </div>

    );
};
