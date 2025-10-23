
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';
import type { ToggleButtonIndicatorInstance, ToggleButtonChangeEvent, ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebutton';

export default function ToggleButtonDemo() {
    const [pressedState, setPressedState] = React.useState(false);
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <div>
            {/* Basic */}
            <ToggleButton>
                <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
            </ToggleButton>

            {/* Render Props#
            This is called the render prop pattern. It lets you use a function to customize what the component displays based on its internal state.*/}
            <ToggleButton>
                <ToggleButton.Indicator>{({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? 'On' : 'Off')}</ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <i className="pi pi-lock"></i>Locked
                            </>
                        ) : (
                            <>
                                <i className="pi pi-lock-open"></i>Unlocked
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <i className="pi pi-volume-up"></i>Mute
                            </>
                        ) : (
                            <>
                                <i className="pi pi-volume-off"></i>Unmute
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton>
                <ToggleButton.Indicator className="w-8 h-8">{({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? <i className="pi pi-heart-fill"></i> : <i className="pi pi-heart"></i>)}</ToggleButton.Indicator>
            </ToggleButton>


            {/* Controlled
            Use pressed and onPressedChange properties to control the state of the ToggleButton. */}
            <ToggleButton pressed={pressedState} onPressedChange={(e: ToggleButtonChangeEvent) => setPressedState(e.pressed)}>
                <ToggleButton.Indicator>{pressedState ? 'Pressed' : 'Not Pressed'}</ToggleButton.Indicator>
            </ToggleButton>


            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <ToggleButton pressed={pressedState} onPressedChange={(e: ToggleButtonChangeEvent) => setPressedState(e.pressed)} invalid={!pressedState}>
                <ToggleButton.Indicator>Invalid</ToggleButton.Indicator>
            </ToggleButton>
        

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <ToggleButton disabled>
                <ToggleButton.Indicator>Disabled</ToggleButton.Indicator>
            </ToggleButton>


            {/* Controlled Group
            Use value and onValueChange properties to control the state of the ToggleButton.Group. */}
            <ToggleButton.Group allowEmpty={false} value={value} onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string[])}>
                <ToggleButton value="left">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-left"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="center">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-center"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="right">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-right"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="justify">
                    <ToggleButton.Indicator>
                        <i className="pi pi-align-justify"></i>
                    </ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>    


            {/* Multiple
            ToggleButton.Group allows selecting only one item by default and setting multiple option enables choosing more than one item. In multiple case, model property should be an array.         */}
            <ToggleButton.Group multiple>
                <ToggleButton value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group> 

            {/* Invalid Group
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <ToggleButton.Group value={value} onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string[])} invalid={value === null}>
                <ToggleButton value="monthly">
                    <ToggleButton.Indicator>Monthly</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="yearly">
                    <ToggleButton.Indicator>Yearly</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>


            {/* Disabled Group
            When disabled is present, the element cannot be edited and focused entirely. Certain options can also be disabled using their disabled properties. */}
            <ToggleButton.Group disabled>
                <ToggleButton value="off">
                    <ToggleButton.Indicator>Off</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="on">
                    <ToggleButton.Indicator>On</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
            <ToggleButton.Group>
                <ToggleButton value="option1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value="option2" disabled>
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>

        </div>
    );
}
        