
import React, { useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';
import type { CascadeSelectChangeEvent } from 'primereact/cascadeselect';
import { FloatLabel } from 'primereact/floatlabel';

interface City {
    cname: string;
    code: string;
}
interface CountryState {
    name: string;
    cities: City[];
}
interface Country {
    name: string;
    code: string;
    states: CountryState[];
}

export default function CascadeSelectDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const countries: Country[] = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        {cname: 'Sydney', code: 'A-SY'},
                        {cname: 'Newcastle', code: 'A-NE'},
                        {cname: 'Wollongong', code: 'A-WO'}
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        {cname: 'Brisbane', code: 'A-BR'},
                        {cname: 'Townsville', code: 'A-TO'}
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        {cname: 'Montreal', code: 'C-MO'},
                        {cname: 'Quebec City', code: 'C-QU'}
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        {cname: 'Ottawa', code: 'C-OT'},
                        {cname: 'Toronto', code: 'C-TO'}
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        {cname: 'Los Angeles', code: 'US-LA'},
                        {cname: 'San Diego', code: 'US-SD'},
                        {cname: 'San Francisco', code: 'US-SF'}
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        {cname: 'Jacksonville', code: 'US-JA'},
                        {cname: 'Miami', code: 'US-MI'},
                        {cname: 'Tampa', code: 'US-TA'},
                        {cname: 'Orlando', code: 'US-OR'}
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        {cname: 'Austin', code: 'US-AU'},
                        {cname: 'Dallas', code: 'US-DA'},
                        {cname: 'Houston', code: 'US-HO'}
                    ]
                }
            ]
        }
    ];

    const countryOptionTemplate = (option: any) => {
        return (
            <div className="flex align-items-center gap-2">
                {option.states && <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                className={`flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />}
                {option.cities && <i className="pi pi-compass"/>}
                {option.cname && <i className="pi pi-map-marker"/>}
                <span>{option.cname || option.name}</span>
            </div>
        );
    }

    return (
        <div >
            {/* Basic
            CascadeSelect is used as a controlled component with value and onChange properties along with an options collection. To define the label of a group optionGroupLabel property is needed and also optionGroupChildren is required to define the property that refers to the children of a group. Note that order of the optionGroupChildren matters as it should correspond to the data hierarchy. */}
            <CascadeSelect value={selectedCity} onChange={(e: CascadeSelectChangeEvent) => setSelectedCity(e.value)} options={countries} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                className="w-full md:w-56" breakpoint="767px" placeholder="Select a City" style={{ minWidth: '14rem' }}  />


            {/* Template
            Content of an item is customized with the itemTemplate property that takes an option as a parameter. */}
            <CascadeSelect value={selectedCity} onChange={(e: CascadeSelectChangeEvent) => setSelectedCity(e.value)} options={countries} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']} 
                className="w-full md:w-56" breakpoint="767px" placeholder="Select a City" itemTemplate={countryOptionTemplate} style={{ minWidth: '14rem' }} />


            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel>
                <CascadeSelect inputId="cs-city" value={selectedCity} onChange={(e: CascadeSelectChangeEvent) => setSelectedCity(e.value)} options={countries}
                    optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                    className="w-full md:w-56" breakpoint="767px" style={{ minWidth: '14rem' }} />
                <label htmlFor="cs-city">City</label>
            </FloatLabel>


            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <CascadeSelect invalid value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={countries} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                className="w-full md:w-56" breakpoint="767px" placeholder="Select a City" style={{ minWidth: '14rem' }} />


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <CascadeSelect disabled placeholder="Disabled" style={{ minWidth: '14rem' }} />

        </div>
    )
}
        