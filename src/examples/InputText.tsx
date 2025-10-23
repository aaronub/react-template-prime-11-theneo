
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function InputTextDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div>
            {/* Basic */}
            <InputText placeholder="Enter text" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>

            {/* Sizes
            InputText provides small and large sizes as alternatives to the base by setting the size property. */}
            <InputText size="small" placeholder="Small" />
            <InputText placeholder="Normal" />
            <InputText size="large" placeholder="Large" />


            {/* Help Text
            An advisory text can be defined with the semantic small tag. */}
            <div className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to reset your password.
                </small>
            </div>

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder="Enter text" invalid={value === ''} />

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <InputText disabled placeholder="Disabled" />

        </div>
    )
}
        