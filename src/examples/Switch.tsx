
import React, { useState } from "react";
import { Switch } from 'primereact/switch';
import type { SwitchChangeEvent } from '@primereact/types/shared/switch';
export default function SwitchDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div >
            {/* Basic
            Switch demonstrates the standard implementation with checkbox functionality. It provides a simple on/off toggle that responds to user interaction with animated visual feedback. */}
            <label htmlFor="switch">Off</label>
            <Switch inputId="switch" checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)}>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch>
            <label htmlFor="switch">On</label>
            
            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <Switch checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)} invalid={!checked}>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch>

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <Switch disabled>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch>

        </div>
    );
}
        