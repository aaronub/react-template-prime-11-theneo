
import React, { useRef, useState } from 'react'; 
import { Steps } from 'primereact/steps';
import type { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function StepsDemo() {
    const items: MenuItem[] = [
        {
            label: 'Personal Info'
        },
        {
            label: 'Reservation'
        },
        {
            label: 'Review'
        }
    ];
    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef<any>(null);
    const items2 = [
        {
            label: 'Personal',
            command: (event: any) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Seat',
            command: (event: any) => {
                toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
            }
        },
        {
            label: 'Payment',
            command: (event: any) => {
                toast.current.show({ severity: 'info', summary: 'Third Step', detail: event.item.label });
            }
        },
        {
            label: 'Confirmation',
            command: (event: any) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
    ];

    return (
        <div>
            {/* Basic
            Steps requires a collection of menuitems as its model. */}
            <Steps model={items} />

            {/* Interactive
            In order to add interactivity to the component, disable readOnly and use a binding to activeIndex along with onSelect to control the Steps. */}
            <Toast ref={toast}></Toast>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
        
        </div>
    )
}
        