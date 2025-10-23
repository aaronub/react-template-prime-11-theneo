
import React, { useState } from "react";
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function KnobDemo() {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="card flex justify-content-center">
            {/* Basic */}
            <Knob defaultValue={50}>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>

            {/* Stroke
            The border size is specified with the stroke property as a number in pixels. */}
            <Knob defaultValue={40}>
                <Knob.Range strokeWidth={5} />
                <Knob.Value strokeWidth={5} />
                <Knob.Text />
            </Knob>


            {/* Reactive
            Knob can be controlled with custom controls as well. */}
            <Knob value={value} size={150} readOnly>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>
            <div className="flex gap-2">
                <Button onClick={() => setValue(value + 1)} disabled={value === 100}>
                    <i className="pi pi-plus" />
                </Button>
                <Button onClick={() => setValue(value - 1)} disabled={value <= 0}>
                    <i className="pi pi-minus" />
                </Button>
            </div>  
                      

            {/* Disabled
            When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with. */}
            <Knob defaultValue={50} disabled>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>
        </div>
    )
}
        