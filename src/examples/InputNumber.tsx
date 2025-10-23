
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { useInputNumber } from '@primereact/headless/inputnumber';
import type { InputNumberInstance, useInputNumberValueChangeEvent, InputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { Label } from 'primereact/label';
import { InputGroup } from 'primereact/inputgroup';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';

export default function InputNumberDemo() {
    const [value1, setValue1] = useState<number>(42723);
    const [value2, setValue2] = useState<number>(58151);
    const [value3, setValue3] = useState<number>(2351.35);
    const [value4, setValue4] = useState<number>(50);

    const inputRef1 = React.useRef<InputNumberInstance>(null);
    const inputRef2 = React.useRef<InputNumberInstance>(null);
    const inputRef3 = React.useRef<InputNumberInstance>(null);


    const inputNumber1 = useInputNumber({
        target: inputRef1,
        value: value1,
        mode: 'currency',
        currency: 'USD',
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue1(e.value)
    });
 
    const inputNumber2 = useInputNumber({
        target: inputRef2,
        value: value2,
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue2(e.value)
    });
 
    const inputNumber3 = useInputNumber({
        target: inputRef3,
        value: value3,
        mode: 'currency',
        currency: 'EUR',
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue3(e.value)
    });

    return (
        <div>
            {/* Numerals
            InputNumber supports decimal numbers with precision control. */}
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                    <InputNumber inputId="integeronly" value={value1} onValueChange={(e: any) => setValue1(e.value || 0)} fluid/>
                </div>
                <div className="flex-auto">
                    <label htmlFor="withoutgrouping" className="font-bold block mb-2">Without Grouping</label>
                    <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e: any) => setValue2(e.value || 0)} useGrouping={false} fluid/>
                </div>
                <div className="flex-auto">
                    <label htmlFor="minmaxfraction" className="font-bold block mb-2">Min-Max Fraction Digits</label>
                    <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e: any) => setValue3(e.value || 0)} minFractionDigits={2} maxFractionDigits={5} fluid/>
                </div>
                <div className="flex-auto">
                    <label htmlFor="minmax" className="font-bold block mb-2">Min-Max Boundaries</label>
                    <InputNumber inputId="minmax" value={value4} onValueChange={(e: any) => setValue4(e.value || 0)} min={0} max={100} fluid/>
                </div>
            </div>


            {/* Currency
            Monetary values are enabled by setting mode property as currency. In this setting, currency property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar. */}
            <InputNumber inputId="currency-us" value={value1} onValueChange={(e: any) => setValue1(e.value || 0)} mode="currency" currency="USD" locale="en-US" />
            <InputNumber inputId="currency-germany" value={value2} onValueChange={(e: any) => setValue2(e.value || 0)} mode="currency" currency="EUR" locale="de-DE" />
            <InputNumber inputId="currency-india" value={value3} onValueChange={(e: any) => setValue3(e.value || 0)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            <InputNumber inputId="currency-japan" value={value4} onValueChange={(e: any) => setValue4(e.value || 0)} mode="currency" currency="JPY" locale="jp-JP" />


            {/* Buttons
            Spinner buttons are enabled using the InputGroup or IconField components. */}
            <div className="card flex flex-wrap gap-4">
                <div className="flex-auto">
                    <Label htmlFor="stacked-buttons" className="font-bold block mb-2">
                        Stacked
                    </Label>
                    <InputGroup>
                        <InputNumber ref={inputRef1} value={value1} inputId="stacked-buttons" mode="currency" currency="USD" fluid onValueChange={inputNumber1?.onValueChange} />
                        <InputGroup.Addon className="flex-col">
                            <Button severity="secondary" onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef1.current?.increment(e, 1)} onPointerUp={inputRef1.current?.stopSpin} className="py-0 text-[.5rem]">
                                <i className="pi pi-angle-up" />
                            </Button>
                            <Button severity="secondary" onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef1.current?.decrement(e, -1)} onPointerUp={inputRef1.current?.stopSpin} className="py-0 text-[.5rem]">
                                <i className="pi pi-angle-down" />
                            </Button>
                        </InputGroup.Addon>
                    </InputGroup>
                </div>
    
                <div className="flex-auto">
                    <Label htmlFor="minmax-buttons" className="font-bold block mb-2">
                        Min-Max
                    </Label>
                    <InputGroup>
                        <InputGroup.Addon as={Button} severity="secondary" iconOnly disabled={value2 === 100} onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef2.current?.increment(e, 1)} onPointerUp={inputRef2.current?.stopSpin}>
                            <i className="pi pi-plus"></i>
                        </InputGroup.Addon>
                        <InputNumber ref={inputRef2} value={value2} inputId="minmax-buttons" fluid min={0} max={100} onValueChange={inputNumber2?.onValueChange} />
                        <InputGroup.Addon as={Button} severity="secondary" iconOnly disabled={value2 === 0} onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef2.current?.decrement(e, -1)} onPointerUp={inputRef2.current?.stopSpin}>
                            <i className="pi pi-minus"></i>
                        </InputGroup.Addon>
                    </InputGroup>
                </div>
    
                <div className="flex-auto">
                    <Label htmlFor="horizontal-buttons" className="font-bold block mb-2">
                        Horizontal with Step
                    </Label>
                    <IconField>
                        <IconField.Icon onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef3.current?.increment(e, 0.25)} onPointerUp={inputRef3.current?.stopSpin}>
                            <i className="pi pi-plus"></i>
                        </IconField.Icon>
                        <InputNumber ref={inputRef3} value={value3} inputId="horizontal-buttons" fluid mode="currency" currency="EUR" onValueChange={inputNumber3?.onValueChange} />
                        <IconField.Icon onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef3.current?.decrement(e, -0.25)} onPointerUp={inputRef3.current?.stopSpin}>
                            <i className="pi pi-minus"></i>
                        </IconField.Icon>
                    </IconField>
                </div>
            </div>

            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <Label.Float>
                <InputNumber value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} inputId="over_label" mode="currency" currency="USD" locale="en-US" />
                <Label htmlFor="over_label">Over Label</Label>
            </Label.Float>
 
            <Label.Float variant="in">
                <InputNumber value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} inputId="in_label" mode="currency" currency="USD" locale="en-US" variant="filled" />
                <Label htmlFor="in_label">In Label</Label>
            </Label.Float>
 
            <Label.Float variant="on">
                <InputNumber value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} inputId="on_label" mode="currency" currency="USD" locale="en-US" />
                <Label htmlFor="on_label">On Label</Label>
            </Label.Float>


            {/* Sizes
            Textarea provides small and large sizes as alternatives to the base by setting the size property. */}
            <InputNumber size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
            <InputNumber placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
            <InputNumber size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <InputNumber value={value1} onValueChange={(e: any) => setValue1(e.value)} invalid={value1 === null} mode="decimal" minFractionDigits={2} placeholder="Amount" />
            <InputNumber value={value2} onValueChange={(e: any) => setValue2(e.value)} invalid={value2 === null} mode="decimal" minFractionDigits={2} variant="filled" placeholder="Amount" />

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <InputNumber defaultValue={50} disabled prefix="%" />

        </div>
    )
}
        