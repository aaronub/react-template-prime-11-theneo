
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import type { InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { FloatLabel } from "primereact/floatlabel";

export default function InputNumberDemo() {
    const [value1, setValue1] = useState<number>(42723);
    const [value2, setValue2] = useState<number>(58151);
    const [value3, setValue3] = useState<number>(2351.35);
    const [value4, setValue4] = useState<number>(50);

    return (
        <div>
            {/* Numerals
            InputNumber is used as a controlled input with value and onValueChange properties. */}
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                    <InputNumber inputId="integeronly" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value || 0)} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="withoutgrouping" className="font-bold block mb-2">Without Grouping</label>
                    <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value || 0)} useGrouping={false} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="minmaxfraction" className="font-bold block mb-2">Min-Max Fraction Digits</label>
                    <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value || 0)} minFractionDigits={2} maxFractionDigits={5} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="minmax" className="font-bold block mb-2">Min-Max Boundaries</label>
                    <InputNumber inputId="minmax" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value || 0)} min={0} max={100} />
                </div>
            </div>


            {/* Currency
            Monetary values are enabled by setting mode property as currency. In this setting, currency property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar. */}
            <InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value || 0)} mode="currency" currency="USD" locale="en-US" />
            <InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value || 0)} mode="currency" currency="EUR" locale="de-DE" />
            <InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value || 0)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            <InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value || 0)} mode="currency" currency="JPY" locale="jp-JP" />


            {/* Buttons
            Spinner buttons are enabled using the showButtons property and layout is defined with the buttonLayout. */}
            <InputNumber value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value || 0)} showButtons mode="currency" currency="USD" />
            <InputNumber value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value || 0)} mode="decimal" showButtons min={0} max={100} />
            <InputNumber value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value || 0)} showButtons buttonLayout="horizontal" step={0.25}
                        decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                        mode="currency" currency="EUR" />

            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel>
                <InputNumber id="number-input" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value || 0)} />
                <label htmlFor="number-input">Number</label>
            </FloatLabel>

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <InputNumber invalid value={value1} onValueChange={(e) => setValue1(e.value || 0)} mode="decimal" minFractionDigits={2} />

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <InputNumber value={value1} disabled prefix="%" />

        </div>
    )
}
        