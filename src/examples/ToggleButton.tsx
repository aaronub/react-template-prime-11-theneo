
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';
import type { ToggleButtonChangeEvent } from 'primereact/togglebutton';

export default function ToggleButtonDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div>
            {/* Basic
            ToggleButton is used a controlled input component with value and onChange properties. */}
            <ToggleButton checked={checked} onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)} className="w-[8rem]" />

            {/* Customized
            Icons and Labels can be customized using onLabel, offLabel, onIcon and offIcon properties. */}
            <ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" 
                checked={checked} onChange={(e) => setChecked(e.value)} className="w-9rem" />

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)} className="w-[8rem]" />
        
            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <ToggleButton disabled checked={checked} onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)} className="w-[8rem]" />
       
        </div>
    );
}
        