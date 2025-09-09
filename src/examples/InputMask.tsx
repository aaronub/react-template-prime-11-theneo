
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import type { InputMaskChangeEvent } from "primereact/inputmask";
import { FloatLabel } from "primereact/floatlabel";

export default function InputMaskDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div >
            {/* Basic
            InputMask is used as a controlled input with value and onChange properties along with the mask property to define the mask.  */}
            <InputMask value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value ?? undefined)} mask="99-999999" placeholder="99-999999"/>
       
            {/* Mask
            Mask format can be a combination of the following definitions; a for alphabetic characters, 9 for numeric characters and * for alphanumberic characters. In addition, formatting characters like ( , ) , - are also accepted.        */}
            <div className="card p-fluid flex flex-wrap gap-3">
                <div className="flex-auto">
                    <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
                    <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
                </div>

                <div className="flex-auto">
                    <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                    <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
                </div>

                <div className="flex-auto">
                    <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
                    <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
                </div>
            </div>      


            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel>
                <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value ?? undefined)} mask="999-99-9999" />
                <label htmlFor="ssn_input">SSN</label>
            </FloatLabel>

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <InputMask invalid mask="99-999999" placeholder="99-999999" />


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <InputMask mask="99-999999" placeholder="99-999999" disabled />       
       
       
       
        </div>
    )
}
        