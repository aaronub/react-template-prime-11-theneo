
import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import type { AutoCompleteCompleteEvent } from "primereact/autocomplete";

interface Country {
    name: string;
    code: string;
}

export default function AutoCompleteDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);
    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    const CountryService = {
        getData() {
            return [
                { name: 'Afghanistan', code: 'AF' },
                { name: 'Albania', code: 'AL' },
                { name: 'Algeria', code: 'DZ' },
                { name: 'American Samoa', code: 'AS' },
                { name: 'Andorra', code: 'AD' },
                { name: 'Angola', code: 'AO' },
                { name: 'Anguilla', code: 'AI' },
                { name: 'Bahamas', code: 'BS' },
                { name: 'Bahrain', code: 'BH' },
                { name: 'Bangladesh', code: 'BD' },
                { name: 'Barbados', code: 'BB' },
                { name: 'Belarus', code: 'BY' },
                { name: 'Belgium', code: 'BE' },
                { name: 'Belize', code: 'BZ' }
            ];
        },

        getCountries() {
            return Promise.resolve(this.getData());
        }
    };
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const search2 = (event: AutoCompleteCompleteEvent) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }
    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <>
        
            {/* Basic
            AutoComplete is used as a controlled component with value and onChange properties. In addition, suggestions and a completeMethod are required to query the results. */}
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />


            {/* Dropdown
            Enabling dropdown property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes blank or current as possible values. blank is the default mode to send a query with an empty string whereas current setting sends a query with the current value of the input. */}
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />


            {/* Multiple
            Multiple mode is enabled using multiple property used to select more than one value from the autocomplete. In this case, value reference should be an array. The number of values selectable can be restricted using the selectionLimit property. */}
            <AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search2} onChange={(e) => setSelectedCountries(e.value)} />


            {/* Float Label
            A floating label appears on top of the input field when focused. */}
            <span className="p-float-label">
                <AutoComplete inputId="ac" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
                <label htmlFor="ac">Float Label</label>
            </span>

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <AutoComplete invalid={value.length < 1} value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <AutoComplete disabled placeholder="Disabled" />


        </>
        
    )
}
        