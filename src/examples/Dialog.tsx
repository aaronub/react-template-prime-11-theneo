
import React, { useState } from "react";
import type { DialogContentInstance, DialogProps, DialogChangeEvent } from '@primereact/types/shared/dialog';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function DialogDemo() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [position, setPosition] = React.useState<DialogProps['position']>('center');
 
    const openPosition = (position: DialogProps['position']) => {
        setOpen(true);
        setPosition(position);
    };

    return (
        <div >
            {/* Basic
            Dialog is defined using Dialog, Dialog.Trigger, Dialog.Portal, Dialog.Header, Dialog.Content and Dialog.Footer components. */}
            <Dialog modal>
                <Dialog.Trigger>Show</Dialog.Trigger>
                <Dialog.Portal style={{ width: '25rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Edit Profile</Dialog.Title>
                        <Dialog.Close />
                    </Dialog.Header>
                    <Dialog.Content>
                        {(instance: DialogContentInstance) => {
                            const { dialog } = instance;
 
                            return (
                                <>
                                    <span className="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
                                    <div className="flex items-center gap-4 mb-4">
                                        <Label htmlFor="username" className="font-semibold w-24">
                                            Username
                                        </Label>
                                        <InputText id="username" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <Label htmlFor="email" className="font-semibold w-24">
                                            Email
                                        </Label>
                                        <InputText id="email" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button onClick={dialog?.close} severity="secondary">
                                            Cancel
                                        </Button>
                                        <Button onClick={dialog?.close}>Sign-In</Button>
                                    </div>
                                </>
                            );
                        }}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>


            {/* Position
            The position of the dialog can be customized with the position property. The available values are top, top-left, top-right, bottom, bottom-left, bottom-right, left, right, and center. */}
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button onClick={() => openPosition('left')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Left
                    <i className="pi pi-arrow-right" />
                </Button>
                <Button onClick={() => openPosition('right')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Right
                    <i className="pi pi-arrow-left" />
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button onClick={() => openPosition('topleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopLeft
                    <i className="pi pi-arrow-down-right" />
                </Button>
                <Button onClick={() => openPosition('top')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Top
                    <i className="pi pi-arrow-down" />
                </Button>
                <Button onClick={() => openPosition('topright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopRight
                    <i className="pi pi-arrow-down-left" />
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <Button onClick={() => openPosition('bottomleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomLeft
                    <i className="pi pi-arrow-up-right" />
                </Button>
                <Button onClick={() => openPosition('bottom')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Bottom
                    <i className="pi pi-arrow-up" />
                </Button>
                <Button onClick={() => openPosition('bottomright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomRight
                    <i className="pi pi-arrow-up-left" />
                </Button>
            </div>
            <Dialog open={open} onOpenChange={(e: DialogChangeEvent) => setOpen(e.value as boolean)} modal position={position} draggable={false}>
                <Dialog.Portal style={{ width: '25rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Edit Profile</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close />
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        {(instance: DialogContentInstance) => {
                            const { dialog } = instance;
 
                            return (
                                <>
                                    <span className="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
                                    <div className="flex items-center gap-4 mb-4">
                                        <Label htmlFor="username" className="font-semibold w-24">
                                            Username
                                        </Label>
                                        <InputText id="username" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <Label htmlFor="email" className="font-semibold w-24">
                                            Email
                                        </Label>
                                        <InputText id="email" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button type="button" severity="secondary" onClick={dialog?.close}>
                                            Cancel
                                        </Button>
                                        <Button type="button" onClick={dialog?.close}>
                                            Save
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>



            {/* Without Modal
            Mask layer behind the Dialog is configured with the modal property. By default, no modal layer is added. */}
            <Dialog>
                <Dialog.Trigger>Show</Dialog.Trigger>
                <Dialog.Portal style={{ width: '25rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Edit Profile</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close />
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        {(instance: DialogContentInstance) => {
                            const { dialog } = instance;
 
                            return (
                                <>
                                    <span className="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
                                    <div className="flex items-center gap-4 mb-4">
                                        <Label htmlFor="username" className="font-semibold w-24">
                                            Username
                                        </Label>
                                        <InputText id="username" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <Label htmlFor="email" className="font-semibold w-24">
                                            Email
                                        </Label>
                                        <InputText id="email" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button type="button" severity="secondary" onClick={dialog?.close}>
                                            Cancel
                                        </Button>
                                        <Button type="button" onClick={dialog?.close}>
                                            Save
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>
        </div>
    )
}
        