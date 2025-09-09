
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

export default function InputGroupDemo() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [radioValue, setRadioValue] = useState('');

    return (
        <div >
            {/* Basic
            An InputGroup is created by wrapping the input and add-ons inside an element with a p-inputgroup class where add-ons also should be inside an element with .p-inputgroup-addon class. */}
            <div className="card flex md:flex-row gap-3">
                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="Username" />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">$</span>
                    <InputNumber placeholder="Price" />
                    <span className="p-inputgroup-addon">.00</span>
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">www</span>
                    <InputText placeholder="Website" />
                </div>
            </div>


            {/* Multiple
            Multiple add-ons can be placed inside the same group. */}
            <div className="p-inputgroup w-full md:!w-[30rem]">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-clock"></i>
                </span>
                <span className="p-inputgroup-addon">
                    <i className="pi pi-star-fill"></i>
                </span>
                <InputNumber placeholder="Price" />
                <span className="p-inputgroup-addon">$</span>
                <span className="p-inputgroup-addon">.00</span>
            </div>

            {/* Button
            Buttons can be placed at either side of an input element. */}
            <div className="card flex md:flex-row gap-3">
                <div className="p-inputgroup flex-1">
                    <Button label="Search" />
                    <InputText placeholder="Keyword" />
                </div>

                <div className="p-inputgroup flex-1">
                    <InputText placeholder="Keyword" />
                    <Button icon="pi pi-search" className="p-button-warning" />
                </div>

                <div className="p-inputgroup flex-1">
                    <Button icon="pi pi-check" className="p-button-success" />
                    <InputText placeholder="Vote" />
                    <Button icon="pi pi-times" className="p-button-danger" />
                </div>
            </div>

            Checkbox & RadioButton
            Checkbox and RadioButton components can be combined with an input element under the same group.
            <div className="card flex flex-column md:flex-row gap-3">
                <div className="p-inputgroup flex-1">
                    <InputText placeholder="Price" />
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb1" value="rb1" checked={radioValue === 'rb1'} onChange={(e) => setRadioValue(e.value)} />
                    </span>
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <Checkbox checked={checked1} onChange={(e) => setChecked1(!checked1)} />
                    </span>
                    <InputText placeholder="Username" />
                </div>

                <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">
                        <Checkbox checked={checked2} onChange={(e) => setChecked2(!checked2)} />
                    </span>
                    <InputText placeholder="Website" />
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb2" value="rb2" checked={radioValue === 'rb2'} onChange={(e) => setRadioValue(e.value)} />
                    </span>
                </div>
            </div>


        </div>
    )
}
        