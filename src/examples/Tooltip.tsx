
import React from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';


export default function TooltipDemo() {
    return (
        <div >
            {/* Arrow */}
            <Tooltip>
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Show Tooltip
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip with arrow</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
            <Tooltip>
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Show Tooltip
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip without arrow</p>
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>

            {/* Placement
            Use side and align to control the placement of the tooltip */}
            <Tooltip side="top">
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Top
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip placed to the top</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
            <Tooltip side="bottom">
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Bottom
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip placed to the bottom</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
            <Tooltip side="right">
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Right
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip placed to the right</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>
            <Tooltip side="left">
                <Tooltip.Trigger as={Button} severity="secondary" variant="outlined">
                    Left
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content>
                        <p>Tooltip placed to the left</p>
                        <Tooltip.Arrow />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip>

            
        </div>
    );
}
        