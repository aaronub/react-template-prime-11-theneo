
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import type { CheckboxChangeEvent } from "primereact/checkbox";

interface Category {
    name: string; 
    key: string;
}

export default function CheckboxDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    const categories: Category[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([categories[1]]);

    const onCategoryChange = (e: CheckboxChangeEvent) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div>
            {/* Basic
            Checkbox is used as a controlled input with checked and onChange properties. */}
            <Checkbox onChange={e => setChecked(e.checked || false)} checked={checked}></Checkbox>

            {/* Dynamic
            Checkboxes can be generated using a list of values. */}
            {categories.map((category) => {
                return (
                    <div key={category.key} className="flex items-center">
                        <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                        <label htmlFor={category.key} className="ml-2">{category.name}</label>
                    </div>
                );
            })}
        
        
            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked || false)} checked={checked}></Checkbox>

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <Checkbox checked disabled></Checkbox>
        
        </div>
    )
}
        