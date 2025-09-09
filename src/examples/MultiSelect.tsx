
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import type { MultiSelectChangeEvent } from 'primereact/multiselect';
import { FloatLabel } from "primereact/floatlabel";

interface City {
    name: string;
    code: string;
}

export default function MultiSelectDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div >
            {/* Basic
            MultiSelect is used as a controlled component with value and onChange properties along with an options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Default property name for the optionLabel is label and value for the optionValue. If optionValue is omitted and the object has no value property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary. */}
            <MultiSelect value={selectedCities} onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-[20rem]" />

            {/* Chips
            Selected values are displayed as a comma separated list by default, setting display as chip displays them as chips. */}
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" display="chip"
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-[20rem]" />

            {/* Filter
            MultiSelect provides built-in filtering that is enabled by adding the filter property. */}
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-[20rem]" />
            
            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel className="w-full md:w-[20rem]">
                <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" maxSelectedLabels={3} className="w-full" />
                <label htmlFor="ms-cities">MultiSelect</label>
            </FloatLabel>


            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <MultiSelect invalid value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-[20rem]" />
                

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <MultiSelect disabled placeholder="Select Cities" className="w-full md:w-[20rem]" />



        </div>
    );
}
        