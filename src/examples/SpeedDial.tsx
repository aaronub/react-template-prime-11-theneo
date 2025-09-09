
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import type { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

export default function SpeedDialDemo() {
    const toast = useRef<Toast>(null);
    const navigate = useNavigate();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current?.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current?.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current?.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                navigate('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            {/* Linear
            SpeedDial items are defined with the model property based on MenuModel API. Default orientation of the items is linear and direction property is used to define the position of the items related to the button. */}
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>

            {/* Circle
            Items can be displayed around the button when type is set to circle. Additional radius property defines the radius of the circle. */}
            <div style={{ height: '500px' }} className="flex items-center justify-center">
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
            </div>
        </div>
    )
}
        