
import React, { useState } from "react";
import { Slider } from "primereact/slider";
import type { SliderChangeEvent } from "primereact/slider";

export default function SliderDemo() {
    const [value, setValue] = useState<number>(0);
    const [rangeValue, setRangeValue] = useState<[number, number]>([0, 100]);

    return (
        <div >
            {/* Basic
            Slider is used as a controlled input with value and onChange properties. */}
            <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value as number)} className="w-14rem" />

            {/* Range
            When range property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value. */}
            <Slider value={rangeValue} onChange={(e: SliderChangeEvent) => setRangeValue(e.value as [number, number])} className="w-14rem" range />
        
        </div>
    )
}
        