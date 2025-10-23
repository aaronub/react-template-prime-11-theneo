
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import type { CheckboxGroupValueChangeEvent } from '@primereact/types/shared/checkbox';

export default function CheckboxDemo() {
    const [value, setValue] = React.useState<string[]>([]);
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];


    return (
        <div>
            {/* Basic */}
            <div className="flex items-center gap-2">
                <Checkbox inputId="basic-checkbox" />
                <label htmlFor="basic-checkbox">
                    I accept the <a className="font-semibold">Terms of Service</a>
                </label>
            </div>

            {/* Dynamic
            Checkboxes can be generated using a list of values. */}
            <Checkbox.Group value={value} onValueChange={(e: CheckboxGroupValueChangeEvent) => setValue(e.value as string[])} className="flex-col gap-4">
                {categories.map((category) => (
                    <div key={category.key} className="flex items-center gap-2">
                        <Checkbox inputId={category.key} value={category.key} />
                        <label htmlFor={category.key}>{category.name}</label>
                    </div>
                ))}
            </Checkbox.Group>
        
        
            {/* Invalid
            Specify the invalid property to display the component with a red border. */}
            <Checkbox inputId="invalid" invalid />
            <label htmlFor="invalid" className="text-red-500 dark:text-red-400">
                Invalid
            </label>

            {/* Disabled
            Use the disabled property to disable a checkbox. */}
            <Checkbox inputId="disabled" disabled />
            <Checkbox inputId="disabled" disabled checked />
        
        </div>
    )
}
        