
import React, { useState } from "react";
import { Knob } from 'primereact/knob';
import type { KnobChangeEvent } from 'primereact/knob';

export default function KnobDemo() {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="card flex justify-content-center">
            {/* Basic
            Knob is used as a controlled input with value and onChange properties. */}
            <Knob value={value} onChange={(e: KnobChangeEvent) => setValue(e.value)} />

            {/* Stroke
            The border size is specified with the stroke property as a number in pixels. */}
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} strokeWidth={5} />


            {/* Disabled
            When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with. */}
            <Knob value={50} disabled />
        </div>
    )
}
        