
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function InputTextDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div>
            {/* Basic
            InputText is used as a controlled input with value and onChange properties. */}
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />

            {/* Sizes
            Apply .p-inputtext-sm to reduce the size of the input element or .p-inputtext-lg to enlarge it. */}
            <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
            <InputText type="text" placeholder="Normal" />
            <InputText type="text" className="p-inputtext-lg" placeholder="Large" />


            {/* Help Text
            An advisory text can be defined with the semantic small tag. */}
            <div className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to reset your password.
                </small>
            </div>


            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>


            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <InputText invalid />

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <InputText disabled placeholder="Disabled" />

        </div>
    )
}
        