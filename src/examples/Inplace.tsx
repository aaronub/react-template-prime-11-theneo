
import React, { useState } from 'react';
import { Inplace } from 'primereact/inplace';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function InplaceDemo() {

    return (
        <div>
            {/* Basic */}
            <Inplace>
                <Inplace.Display>View Content</Inplace.Display>
                <Inplace.Content>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Inplace.Content>
            </Inplace>

            {/* Close
            Use the Inplace.Close component to close the inplace content. */}
            <Inplace>
                <Inplace.Display>Click to Edit</Inplace.Display>
                <Inplace.Content>
                    <span className="inline-flex items-center gap-2">
                        <InputText autoFocus />
                        <Inplace.Close as={Button} iconOnly role="button" text severity="danger">
                            <i className="pi pi-times"></i>
                        </Inplace.Close>
                    </span>
                </Inplace.Content>
            </Inplace>
        </div>
    );
}
        