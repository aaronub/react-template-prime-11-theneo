
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { RadioButtonGroup } from 'primereact/radiobutton/group';
import type { RadioButtonGroupValueChangeEvent } from '@primereact/types/shared/radiobutton';

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
            Use the RadioButton.Group component with value and onValueChange props to control the selected state of radio buttons. */}
            <RadioButton.Group className="flex flex-wrap gap-4" value={ingredient} onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient1" name="pizza" value="cheese" />
                    <label htmlFor="ingredient1">Cheese</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient2" name="pizza" value="mushroom" />
                    <label htmlFor="ingredient2">Mushroom</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient3" name="pizza" value="pepper" />
                    <label htmlFor="ingredient3">Pepper</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="ingredient4" name="pizza" value="onion" />
                    <label htmlFor="ingredient4">Onion</label>
                </div>
            </RadioButton.Group>


            {/* Dynamic
            RadioButtons can be generated using a list of values. */}
            <RadioButtonGroup className="flex flex-wrap gap-4" value={ingredient} onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}>
                {categories.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <RadioButton inputId={item.key} name="category" value={item.key} />
                        <label htmlFor={item.key}>{item.name}</label>
                    </div>
                ))}
            </RadioButtonGroup>

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <RadioButton invalid/>


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <RadioButton.Group className="flex items-center gap-2" value="2">
                <RadioButton disabled />
                <RadioButton value="2" disabled />
            </RadioButton.Group>

        </div>
    );
}
        