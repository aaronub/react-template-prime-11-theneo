
import React, { useRef } from 'react';
import { Popover } from 'primereact/popover';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function PopoverDemo() {
    const op = useRef<any>(null);

    return (
        <div >
            {/* Basic
            OverlayPanel is accessed via its reference and visibility is controlled using toggle, show and hide methods with an event of the target. */}
            <Popover>
                    <Popover.Trigger>Show Popover</Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content>
                            <div className="flex flex-col gap-2 p-2 max-w-xs">
                                <p className="text-lg font-semibold mb-0.5">Dimensions</p>
                                <div className="grid grid-cols-2 items-center">
                                    <Label htmlFor="width">Width</Label>
                                    <InputText id="width" fluid />
                                </div>
                                <div className="grid grid-cols-2 items-center">
                                    <Label htmlFor="maxWidth">Max. width</Label>
                                    <InputText id="maxWidth" fluid />
                                </div>
                                <div className="grid grid-cols-2 items-center">
                                    <Label htmlFor="height">Height</Label>
                                    <InputText id="height" fluid />
                                </div>
                                <div className="grid grid-cols-2 items-center">
                                    <Label htmlFor="maxHeight">Max. height</Label>
                                    <InputText id="maxHeight" fluid />
                                </div>
                            </div>
                            <Popover.Close className="absolute top-4 right-4" />
                        </Popover.Content>
                    </Popover.Portal>
                </Popover>

                
        </div>
    );
}
        