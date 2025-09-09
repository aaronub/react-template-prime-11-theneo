
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import type { MenuItem } from 'primereact/menuitem';
import { Link } from 'react-router-dom';

export default function BreadCrumbDemo() {
    const items: MenuItem[] = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' }

    const items2: MenuItem[] = [
        { label: 'Components' },
        { label: 'Form' },
        {
            label: 'InputText',
            template: () => <Link to="/inputtext" className="text-primary font-semibold">InputText</Link>
        }
    ];

    return (
        <div>
            {/* Basic
            BreadCrumb is used to navigate through the application. */} 
            <BreadCrumb model={items} home={home} />

            {/* Router
            Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation. */}
            <BreadCrumb model={items2} home={home} />
        </div>
    )
}
        