
import React, { useRef } from 'react';
import { ConfirmPopup } from 'primereact/confirmpopup';

export default function ConfirmPopupDemo() {


    return ( 
        <>
            {/* Basic
            ConfirmPopup is defined using ConfirmPopup, ConfirmPopup.Trigger, ConfirmPopup.Portal, ConfirmPopup.Content, ConfirmPopup.Footer, ConfirmPopup.Reject and ConfirmPopup.Accept components. */}
            <ConfirmPopup>
                <ConfirmPopup.Trigger variant="outlined">Save</ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Content>
                        <ConfirmPopup.Icon className="pi pi-exclamation-triangle" />
                        <ConfirmPopup.Message>Are you sure you want to proceed?</ConfirmPopup.Message>
                    </ConfirmPopup.Content>
                    <ConfirmPopup.Footer>
                        <ConfirmPopup.Reject severity="secondary" variant="outlined">
                            Cancel
                        </ConfirmPopup.Reject>
                        <ConfirmPopup.Accept>Save</ConfirmPopup.Accept>
                    </ConfirmPopup.Footer>
                </ConfirmPopup.Portal>
            </ConfirmPopup>
        </>
    )
}
        