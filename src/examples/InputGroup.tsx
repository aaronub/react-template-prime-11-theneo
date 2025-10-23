import React from 'react';
import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Label } from 'primereact/label';

export default function InputGroupDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div >
            {/* Basic
            A group is created by wrapping the input and add-ons with the InputGroup component. Each add-on element is defined as a child of InputGroup.Addon component. */}
            <InputGroup>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup>
            <InputGroup>
                <InputGroup.Addon>www</InputGroup.Addon>
                <InputText placeholder="Website" />
            </InputGroup>


            {/* Multiple
            Multiple add-ons can be placed inside the same group. */}
            <InputGroup className="sm:!w-96">
                <InputGroup.Addon>
                    <i className="pi pi-clock"></i>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <i className="pi pi-star-fill"></i>
                </InputGroup.Addon>
                <InputText placeholder="Price" />
                <InputGroup.Addon>$</InputGroup.Addon>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>

            {/* Button
            Buttons can be placed at either side of an input element. */}
            <InputGroup>
                <Button>Search</Button>
                <InputText placeholder="Keyword" />
            </InputGroup>
            <InputGroup>
                <InputText placeholder="Keyword" />
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text">
                        <i className="pi pi-search" />
                    </Button>
                </InputGroup.Addon>
            </InputGroup>
            <InputGroup>
                <InputGroup.Addon>
                    <Button severity="secondary">
                        <i className="pi pi-check" />
                    </Button>
                </InputGroup.Addon>
                <InputText placeholder="Vote" />
                <InputGroup.Addon>
                    <Button severity="secondary">
                        <i className="pi pi-times" />
                    </Button>
                </InputGroup.Addon>
            </InputGroup>

            {/* Checkbox & RadioButton
            Checkbox and RadioButton components can be combined with an input element under the same group. */}
            <InputGroup>
                <InputText placeholder="Price" />
                <InputGroup.Addon>
                    <RadioButton name="rb1" value="rb1" />
                </InputGroup.Addon>
            </InputGroup>
            <InputGroup>
                <InputGroup.Addon>
                    <Checkbox />
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup>
            <InputGroup>
                <InputGroup.Addon>
                    <Checkbox />
                </InputGroup.Addon>
                <InputText placeholder="Website" />
                <InputGroup.Addon>
                    <RadioButton name="rb2" value="rb2" />
                </InputGroup.Addon>
            </InputGroup>


            {/* Float Label
            FloatLabel visually integrates a label with its form element. Visit FloatLabel documentation for more information. */}
            <InputGroup>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <Label.Float>
                    <InputText id="over_label" value={value1} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)} />
                    <Label htmlFor="over_label">Over Label</Label>
                </Label.Float>
            </InputGroup>
            <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <Label.Float variant="in">
                    <InputText id="in_label" value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} />
                    <Label htmlFor="in_label">In Label</Label>
                </Label.Float>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
            <InputGroup>
                <InputGroup.Addon>www</InputGroup.Addon>
                <Label.Float variant="on">
                    <InputText id="on_label" value={value3} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)} />
                    <Label htmlFor="on_label">On Label</Label>
                </Label.Float>
            </InputGroup>


        </div>
    )
}
        