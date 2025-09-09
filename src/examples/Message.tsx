
import React from 'react'; 
import { Message } from 'primereact/message';

export default function MessageDemo() {
    return (
        <div>
            {/* Basic
            Text to display is defined with the text property. */}
            <Message text="Username is required" />

            {/* Severity
            The severity property specifies the type of the message. */}
            <Message severity="success" text="Success Message" />
            <Message severity="info" text="Info Message" />
            <Message severity="warn" text="Warning Message" />
            <Message severity="error" text="Error Message" />
            <Message severity="secondary" text="Secondary Message" />
            <Message severity="contrast" text="Contrast Message" />
        </div>
    )
}
        