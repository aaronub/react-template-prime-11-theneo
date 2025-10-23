
import React from "react";
import { IconField } from 'primereact/iconfield'
import { InputText } from "primereact/inputtext";
import { Label } from 'primereact/label'

export default function IconFieldDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div>
            {/* Basic
            IconField wraps the IconField.Icon and the input field component. */}
            <IconField>
                <IconField.Icon>
                    <i className="pi pi-search" />
                </IconField.Icon>
                <InputText placeholder="Search" />
            </IconField>
            <IconField>
                <InputText variant="filled" />
                <IconField.Icon>
                    <i className="pi pi-spin pi-spinner" />
                </IconField.Icon>
            </IconField>


            {/* Float Label
            FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information. */}
            <Label.Float>
                <IconField>
                    <IconField.Icon>
                        <i className="pi pi-search" />
                    </IconField.Icon>
                    <InputText value={value1} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)} id="over_label" autoComplete="off" />
                </IconField>
                <Label htmlFor="over_label">Over Label</Label>
            </Label.Float>
 
            <Label.Float variant="in">
                <IconField>
                    <IconField.Icon>
                        <i className="pi pi-search" />
                    </IconField.Icon>
                    <InputText value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} id="in_label" autoComplete="off" variant="filled" />
                </IconField>
                <Label htmlFor="in_label">In Label</Label>
            </Label.Float>
 
            <Label.Float variant="on">
                <IconField>
                    <IconField.Icon>
                        <i className="pi pi-search" />
                    </IconField.Icon>
                    <InputText value={value3} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)} id="on_label" autoComplete="off" />
                </IconField>
                <Label htmlFor="on_label">On Label</Label>
            </Label.Float>


            {/* Sizes
            IconField is compatible with the size setting of the input field. */}
            <IconField>
                <IconField.Icon>
                    <i className="pi pi-search" />
                </IconField.Icon>
                <InputText placeholder="Small" size="small" />
            </IconField>
 
            <IconField>
                <InputText placeholder="Normal" />
                <IconField.Icon>
                    <i className="pi pi-user" />
                </IconField.Icon>
            </IconField>
 
            <IconField>
                <IconField.Icon>
                    <i className="pi pi-lock" />
                </IconField.Icon>
                <InputText placeholder="Large" size="large" />
                <IconField.Icon>
                    <i className="pi pi-spin pi-spinner" />
                </IconField.Icon>
            </IconField>
        </div>
    )
}
        