
import React from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';

export default function ConfirmDialogDemo() {


    return (
        <>
            {/* Basic
            ConfirmDialog is defined using ConfirmDialog, ConfirmDialog.Trigger, ConfirmDialog.Portal, ConfirmDialog.Header, ConfirmDialog.Content and ConfirmDialog.Footer components. */}
            <ConfirmDialog>
                <ConfirmDialog.Trigger variant="outlined">Save</ConfirmDialog.Trigger>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Header>
                        <ConfirmDialog.Title>Edit Profile</ConfirmDialog.Title>
                        <ConfirmDialog.Close />
                    </ConfirmDialog.Header>
                    <ConfirmDialog.Content>
                        <ConfirmDialog.Icon className="pi pi-exclamation-triangle" />
                        <ConfirmDialog.Message>Are you sure you want to proceed?</ConfirmDialog.Message>
                    </ConfirmDialog.Content>
                    <ConfirmDialog.Footer>
                        <ConfirmDialog.Cancel variant="outlined">Cancel</ConfirmDialog.Cancel>
                        <ConfirmDialog.Action>Save</ConfirmDialog.Action>
                    </ConfirmDialog.Footer>
                </ConfirmDialog.Portal>
            </ConfirmDialog>

        </>
    )
}
        