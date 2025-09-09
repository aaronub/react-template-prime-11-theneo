
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function ToastDemo() {
    const toast = useRef<Toast>(null);

    const showSuccess = () => {
        toast.current?.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    const showInfo = () => {
        toast.current?.show({severity:'info', summary: 'Info', detail:'Message Content', life: 3000});
    }

    const showWarn = () => {
        toast.current?.show({severity:'warn', summary: 'Warning', detail:'Message Content', life: 3000});
    }

    const showError = () => {
        toast.current?.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
    }

    const showSecondary = () => {
        toast.current?.show({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content', life: 3000 });
    };

    const showContrast = () => {
        toast.current?.show({ severity: 'contrast', summary: 'Contrast', detail: 'Message Content', life: 3000 });
    };

    const toast2 = useRef<Toast>(null);

    const showSticky = () => {
        toast2.current?.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    };

    const clear = () => {
        toast2.current?.clear();
    };


    return (
        <div>
            {/* Severity
            The severity option specifies the type of the message. */}
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button label="Success" severity="success" onClick={showSuccess} />
                <Button label="Info" severity="info" onClick={showInfo} />
                <Button label="Warn" severity="warning" onClick={showWarn} />
                <Button label="Error" severity="danger" onClick={showError} />
                <Button label="Secondary" severity="secondary" onClick={showSecondary} />
                <Button label="Contrast" severity="contrast" onClick={showContrast} />
            </div>

            {/* Sticky
            A message will disappear after 3000ms, the default value defined for the life option. To display messages that remain visible and do not hide automatically, set the sticky option to "true". */}
            <Toast ref={toast2} />
            <div className="flex flex-wrap gap-2">
                <Button onClick={showSticky} label="Sticky" severity="success" />
                <Button onClick={clear} label="Clear" />
            </div>
        </div>
    )
}
        