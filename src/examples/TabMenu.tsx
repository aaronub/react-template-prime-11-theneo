
import React, { useRef } from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import type { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function TabMenuDemo() {
    const items: MenuItem[] = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
    ];
    const toast = useRef<any>(null);
    const items2 = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
            }
        },
        {
            label: 'Transactions',
            icon: 'pi pi-chart-line',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
            }
        },
        {
            label: 'Products',
            icon: 'pi pi-list',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
            }
        },
        {
            label: 'Messages',
            icon: 'pi pi-inbox',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
            }
        }
    ];

    return (
        <div>
            {/* Basic
            TabMenu requires a collection of menuitems as its model. */}
            <TabMenu model={items} />

            {/* Command
            The command property defines the callback to run when an item is activated by click or a key event. */}
            <Toast ref={toast} />
            <TabMenu model={items} />
            
        </div>
    )
}
        