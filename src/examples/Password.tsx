
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { FloatLabel } from 'primereact/floatlabel';

export default function PasswordDemo() {
    const [value, setValue] = useState<string>('');

    const header = <div className="font-bold mb-3">Pick a password</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3 list-disc">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );

    return (
        <div >
            {/* Basic
            Password is used as a controlled component with value and onChange properties. Strength meter is enabled by default so feedback needs to be set as false for a basic password input. */}
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} feedback={false} tabIndex={1} />

            {/* Toggle Mask
            When toggleMask is present, an icon is displayed to show the value as plain text. */}
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} toggleMask />


            {/* Template
            Custom content is placed inside the popup using header and footer properties. */}
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} header={header} footer={footer} />

            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel>
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="password">Password</label>
            </FloatLabel>

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <Password invalid />

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <Password disabled placeholder="Disabled" />

        </div>
    )
}
        