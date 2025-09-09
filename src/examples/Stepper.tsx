
import React, { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function StepperDemo() {
    const stepperRef = useRef<any>(null);

    return (
    <div >
        {/* Basic
        Stepper consists of one or more StepperPanel elements to encapsulate each step in the progress. The elements to navigate between the steps are not built-in for ease of customization, instead prevCallback and nextCallback events should be bound to your custom UI elements. */}
        <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
            <StepperPanel header="Header I">
                <div className="flex flex-col h-[12rem]">
                    <div className="border-2 border-dashed border-gray-300 rounded bg-gray-100 flex-1 flex justify-center items-center font-medium">Content I</div>
                </div>
                <div className="flex pt-4 justify-end">
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header II">
                <div className="flex flex-col h-[12rem]">
                    <div className="border-2 border-dashed border-gray-300 rounded bg-gray-100 flex-1 flex justify-center items-center font-medium">Content II</div>
                </div>
                <div className="flex pt-4 justify-between">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header III">
                <div className="flex flex-col h-[12rem]">
                    <div className="border-2 border-dashed border-gray-300 rounded bg-gray-100 flex-1 flex justify-center items-center font-medium">Content III</div>
                </div>
                <div className="flex pt-4 justify-start">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
                </div>
            </StepperPanel>
        </Stepper>

        
    </div>
    )
}
        