
import React, { useState } from "react";
import type { SliderChangeEvent } from '@primereact/types/shared/slider';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';

export default function SliderDemo() {
    const [value, setValue] = useState<number>(0);
    const [rangeValue, setRangeValue] = useState<[number, number]>([0, 100]);

    return (
        <div >
            {/* Basic
            Slider requires Slider.Range and Slider.Thumb components as children. */}
            <Slider defaultValue={50} className="w-56">
                <Slider.Range />
                <Slider.Thumb />
            </Slider>


            {/* Input */}
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))} fluid className="mb-4" />
            <Slider value={value} onValueChange={(e: SliderChangeEvent) => setValue(e.value as number)} className="w-full">
                <Slider.Range />
                <Slider.Thumb />
            </Slider>            
            

            {/* Range
            Slider provides two handles to define two values. In range mode, value should be an array instead of a single value. */}
            <Slider defaultValue={[20, 80]} className="w-56">
                <Slider.Range />
                <Slider.Thumb />
                <Slider.Thumb />
            </Slider>
        
        </div>
    )
}
        