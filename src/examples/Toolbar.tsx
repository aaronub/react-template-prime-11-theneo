
import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';

export default function ToolbarDemo() {

    return (
        <div >
            {/* Basic
            Toolbar provides Toolbar.Start, Toolbar.Center and Toolbar.End components to place content at these sections. */}
            <Toolbar>
                <Toolbar.Start>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-plus"></i>
                    </Button>
                    <Button className="mr-2" severity="secondary" variant="text">
                        <i className="pi pi-print"></i>
                    </Button>
                    <Button severity="secondary" variant="text">
                        <i className="pi pi-upload"></i>
                    </Button>
                </Toolbar.Start>
                <Toolbar.Center>
                    <InputText placeholder="Search" />
                </Toolbar.Center>
                <Toolbar.End>
                    <Button>Save</Button>
                </Toolbar.End>
            </Toolbar>
        </div>
    );
}
        