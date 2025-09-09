
import React, { useRef } from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import type { MenuItem } from 'primereact/menuitem';

export default function ContextMenuDemo() {
    const cm = useRef<ContextMenu>(null);
    const items: MenuItem[] = [
        { label: 'Copy', icon: 'pi pi-copy' },
        { label: 'Rename', icon: 'pi pi-file-edit' }
    ];

    return (
        <div >
            {/* Basic
            ContextMenu is used to display a menu on right click. */}
            <ContextMenu model={items} ref={cm} breakpoint="767px" />
            <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current?.show(e)} />
        </div>
    )
}
        