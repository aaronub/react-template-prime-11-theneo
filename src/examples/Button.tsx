
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';

export default function ButtonDemo() {
    const [loading, setLoading] = useState<boolean>(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div>
            {/* Severity
            Severity defines the type of button. */}
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />

            {/* Icons
            Icon of a button is specified with icon property and position is configured using iconPos attribute. */}
            <Button icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />

            {/* Loading
            Busy state is controlled with the loading property. */}
            <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
            

            {/* Rounded
            Rounded buttons have a circular border radius. */}
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />

            {/* Text
            Text buttons are displayed as textual elements. */}
            <Button label="Primary" text />
            <Button label="Secondary" severity="secondary" text />

            {/* Outlined
            Outlined buttons display a border without a background initially. */}
            <Button label="Primary" outlined />
            <Button label="Secondary" severity="secondary" outlined />


            {/* Icon Only
            Buttons can have icons without labels. */}
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-check" rounded aria-label="Filter" />            
            <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
            <Button icon="pi pi-check" rounded text aria-label="Filter" />

            {/* Badges
            Buttons have built-in badge support with badge and badgeClassName properties. */}
            <Button type="button" label="Emails" badge="8" />
            <Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />

            {/* Sizes
            Button provides small and large sizes as alternatives to the standard. */}
            <Button label="Small" icon="pi pi-check" size="small" />
            <Button label="Normal" icon="pi pi-check" />
            <Button label="Large" icon="pi pi-check" size="large" />
            
            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <Button label="Submit" disabled />
            
        </div>
    )
}
        