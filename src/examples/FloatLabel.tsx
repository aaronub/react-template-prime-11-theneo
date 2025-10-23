
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Label } from 'primereact/label'

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
        <div>
            {/* Basic
            FloatLabel is used by wrapping the input and its label.             */}
            <Label.Float>
                <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} id="username" />
                <Label htmlFor="username">InputText</Label>
            </Label.Float>


            {/* Variants
            The variant property defines the position of the label. Default value is over, whereas in and on are the alternatives. */}
            <Label.Float variant="in">
                <InputText id="in_label" value={value1} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)} autoComplete="off" />
                <Label htmlFor="in_label">In Label</Label>
            </Label.Float>
 
            <Label.Float variant="on">
                <InputText id="on_label" value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} autoComplete="off" />
                <Label htmlFor="on_label">On Label</Label>
            </Label.Float>


            {/* Invalid
            When the form element is invalid, the label is also highlighted */}
            <Label.Float variant="in">
                <InputText id="value2" value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} autoComplete="off" invalid={!value2} />
                <Label htmlFor="value2">Username</Label>
            </Label.Float>
        </div>
    )
}
        