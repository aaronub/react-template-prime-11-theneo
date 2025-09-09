
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function TooltipDemo() {
    return (
        <div >
            {/* Position
            Form components have built-in support with the tooltip property and customizations like positioning is provided with tooltipOptions. */}
            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
            <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />


            {/* Event
            Tooltip gets displayed on hover event by default, use the event option to set focus or both as alternatives. */}
            <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
            
        </div>
    );
}
        