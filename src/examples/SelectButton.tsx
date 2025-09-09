
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';
import type { SelectButtonChangeEvent } from 'primereact/selectbutton';

interface Item {
    name: string;
    value: number;
}
interface JustifyOption {
    icon: string;
    value: string;
}

export default function SelectButtonDemo() {
    const options: string[] = ['Off', 'On'];
    const [value, setValue] = useState<string>(options[0]);
    const items: Item[] = [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3}
    ];

    const justifyOptions: JustifyOption[] = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const justifyTemplate = (option: JustifyOption) => {
        return <i className={option.icon}></i>;
    }

    const options1: string[] = ['Off', 'On'];
    const options2: any[] = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, constant: true }
    ];

    return (
        <div>
            {/* Basic
            SelectButton is used as a controlled component with value and onChange properties along with an options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Default property name for the optionLabel is label and value for the optionValue. If optionValue is omitted and the object has no value property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary. */}
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} options={options} />

            {/* Multiple
            SelectButton allows selecting only one item by default and enabling multiple allows choosing more. In multiple case, model property should be an array instead of a single value. */}
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} optionLabel="name" options={items} multiple />

            {/* Template
            Options support templating using the itemTemplate property that references a function to render the content. Notice the usage of optionLabel, although not rendered visually, it is still required to be used as the list key. */}
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions} />

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <SelectButton invalid value={value} onChange={(e) => setValue(e.value)} options={options} />

            {/* Disabled
            When disabled is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the optionDisabled property. */}
            <SelectButton disabled options={options1} />
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} options={options2} optionLabel="name" optionDisabled="constant" />
        
        </div>
    );
}
        