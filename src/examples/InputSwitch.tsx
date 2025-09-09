
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import type { InputSwitchChangeEvent } from "primereact/inputswitch";

export default function InputSwitchDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div >
            {/* Basic
            InputSwitch is used as a controlled input with checked and onChange properties. */}
            <InputSwitch checked={checked} onChange={(e: InputSwitchChangeEvent) => setChecked(e.value)} />
            
            {/* Invalid
            Invalid state style is added using the p-invalid class to indicate a failed validation. */}
            <InputSwitch checked={false} className="p-invalid" />

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <InputSwitch checked={false} disabled />

        </div>
    );
}
        