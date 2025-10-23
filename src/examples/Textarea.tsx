
import React, { useState } from "react";
import { Textarea } from 'primereact/textarea';
import { Label } from "primereact/label";

export default function TextareaDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div >
            {/* Basic
            Basic usage demonstrates a simple multi-line text input field for entering longer text content. */}
            <Textarea rows={5} cols={30} />


            {/* Auto Resize
            Textarea can automatically adjust its height based on the content by setting the autoResize property. */}
            <Textarea autoResize rows={5} cols={30} />
            

            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <Label.Float>
                <Textarea value={value1} onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue1(e.currentTarget.value)} id="over_label" rows={5} cols={30} style={{ resize: 'none' }} className="h-full" />
                <Label htmlFor="over_label">Over Label</Label>
            </Label.Float>
            <Label.Float variant="in">
                <Textarea value={value2} onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue2(e.currentTarget.value)} id="in_label" rows={5} cols={30} style={{ resize: 'none' }} className="h-full" />
                <Label htmlFor="in_label">In Label</Label>
            </Label.Float>
            <Label.Float variant="on">
                <Textarea value={value3} onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue3(e.currentTarget.value)} id="on_label" rows={5} cols={30} style={{ resize: 'none' }} className="h-full" />
                <Label htmlFor="on_label">On Label</Label>
            </Label.Float>


            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <Textarea invalid rows={5} cols={30} />


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <Textarea disabled rows={5} cols={30} />
            
        </div>
    )
}
        