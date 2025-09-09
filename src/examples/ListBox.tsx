
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';
import type { ListBoxChangeEvent } from 'primereact/listbox';

interface City {
    name: string;
    code: string;
} 

export default function ListBoxDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
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
            ListBox is used as a controlled component with value and onChange properties along with an options collection. Label and value of an option are defined with the optionLabel and optionValue properties respectively. Default property name for the optionLabel is label and value for the optionValue. If optionValue is omitted and the object has no value property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no optionLabel and optionValue would be necessary.   */}
            <ListBox value={selectedCity} onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-56" />

            {/* Multiple
            ListBox allows choosing a single item by default, enable multiple property to choose more than one. When the optional metaKeySelection is present, behavior is changed in a way that selecting a new item requires meta key to be present. */}
            <ListBox multiple value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" className="w-full md:w-56" />

            {/* Filter
            ListBox provides built-in filtering that is enabled by adding the filter property.    */}
            <ListBox filter value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-56" />


            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <ListBox invalid value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                className="w-full md:w-56" />


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <ListBox disabled options={cities} optionLabel="name" className="w-full md:w-56" />

        </div>
    )
}
        