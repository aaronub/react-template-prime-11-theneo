
import React, { useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import { useMountEffect } from 'primereact/hooks';

export default function MessagesDemo() {
    const msgs = useRef<any>(null);

    const addMessages = () => {
        msgs.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true, closable: false }
        ]);
    };

    const clearMessages = () => {
        msgs.current.clear();
    };

    const msgs2 = useRef<any>(null);
    
    useMountEffect(() => {
        if (msgs2.current) {
            msgs2.current.clear();
            msgs.current.show([
                { sticky: true, severity: 'success', summary: 'Success', detail: 'Closable Message' },
                { sticky: true, severity: 'info', summary: 'Info', detail: 'Not Closable Message', closable: false }
            ]);
        }
    });

    return (
        <div>
            {/* Dynamic
            Multiple messages are displayed by passing an array to the show method. */}
            <Button type="button" onClick={addMessages} label="Show" className="mr-2" />
            <Button type="button" onClick={clearMessages} label="Clear" className="p-button-secondary" />
            <Messages ref={msgs} />

            {/* Closable
            A message displays a close icon by default, closable option is used to control this behavior. */}
            <Messages ref={msgs2} />
        </div>
    )
}
        