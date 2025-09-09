
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import type { RadioButtonChangeEvent } from "primereact/radiobutton";

interface Category {
    name: string;
    key: string;
}

export default function RadioButtonDemo() {
    const [ingredient, setIngredient] = useState<string>('');
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState<Category>(categories[1]);

    return (
        <div >
            {/* Group
            RadioButton is used as a controlled input with value, checked and onChange properties. */}
            <div className="flex flex-wrap gap-3">
                <div className="flex items-center">
                    <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                    <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                    <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                    <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                    <label htmlFor="ingredient4" className="ml-2">Onion</label>
                </div>
            </div>


            {/* Dynamic
            RadioButtons can be generated using a list of values. */}
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex items-center">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e: RadioButtonChangeEvent) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <RadioButton invalid/>


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <RadioButton checked disabled></RadioButton>

        </div>
    );
}
        