
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";

export default function InputTextareaDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div >
            {/* Basic
            Textarea is used as a controlled input with value and onChange properties. */}
            <InputTextarea value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={5} cols={30} />

            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel>
                <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                <label htmlFor="description">Description</label>
            </FloatLabel>


            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <InputTextarea invalid rows={5} cols={30} />


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <InputTextarea disabled rows={5} cols={30} />
            
        </div>
    )
}
        