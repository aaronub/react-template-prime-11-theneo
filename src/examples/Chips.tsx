
import React, { useState } from "react";
import { Chips } from "primereact/chips";
import type { ChipsChangeEvent } from "primereact/chips";
import { FloatLabel } from 'primereact/floatlabel';

export default function ChipsDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div>
            {/* Basic
            Chips is used as a controlled input with value and onChange properties where value should be an array. */}
            <div className="card p-fluid">
                <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value ?? [])} />
            </div>
        
        
            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <div className="card p-fluid">
                <FloatLabel>
                    <Chips id="username" value={value} onChange={(e) => setValue(e.value ?? [])} />
                    <label htmlFor="username">Username</label>
                </FloatLabel>
            </div>
        
            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <div className="card p-fluid">
                <Chips invalid value={value} onChange={(e) => setValue(e.value ?? [])} />
            </div>

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <Chips disabled placeholder="Disabled" />
        
        </div>
    )
}
        