
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export default function ButtonDemo() {
    const [loading, setLoading] = useState<boolean>(false);
    const [size] = useState<'small' | 'normal' | 'large'>('normal');

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
            <Button>Primary</Button>
            <Button severity="secondary">Secondary</Button>
            <Button severity="success">Success</Button>
            <Button severity="info">Info</Button>
            <Button severity="warn">Warn</Button>
            <Button severity="help">Help</Button>
            <Button severity="danger">Danger</Button>
            <Button severity="contrast">Contrast</Button>

            {/* Icons */}
            <Button aria-label="Save">
                <i className="pi pi-home" />
            </Button>
            <Button>
                <i className="pi pi-user" />
                Profile
            </Button>
            <Button>
                Save
                <i className="pi pi-check" />
            </Button>
            <Button className="flex-col">
                <i className="pi pi-search" />
                Search
            </Button>
            <Button className="flex-col">
                Update
                <i className="pi pi-refresh" />
            </Button>

            {/* Loading
            Busy state is controlled with the loading property. */}
            <Button type="button" onClick={load} disabled={loading}>
                {loading ? <i className="pi pi-spinner animate-spin" /> : <i className="pi pi-check" />}
                {loading ? 'Loading...' : 'Search'}
            </Button>
            <Button type="button" onClick={load} disabled={loading} iconOnly>
                {loading ? <i className="pi pi-spinner animate-spin" /> : <i className="pi pi-check" />}
            </Button>
            

            {/* Rounded
            Rounded buttons have a circular border radius. */}
            <Button rounded>Primary</Button>
            <Button severity="secondary" rounded>
                Secondary
            </Button>

            {/* Text
            Text buttons are displayed as textual elements. */}
            <Button variant="text">Primary</Button>
            <Button severity="secondary" variant="text">
                Secondary
            </Button>

            {/* Outlined
            Outlined buttons display a border without a background initially. */}
            <Button variant="outlined">Primary</Button>
            <Button severity="secondary" variant="outlined">
                Secondary
            </Button>


            {/* Icon Only
            Buttons can have icons without labels. Use iconOnly to display only an icon. */}
            <Button aria-label="Filter" size={size} iconOnly>
                <i className="pi pi-check" />
            </Button>
            <Button rounded aria-label="Filter" size={size} iconOnly>
                <i className="pi pi-check" />
            </Button>
            <Button rounded variant="outlined" aria-label="Filter" size={size} iconOnly>
                <i className="pi pi-check" />
            </Button>
            <Button rounded variant="text" aria-label="Filter" size={size} iconOnly>
                <i className="pi pi-check" />
            </Button>


            {/* Badges
            Badge component can be used to display a badge inside a button. Badge.Overlay is used to display a badge on a button. */}
            <Button type="button">
                Emails
                <Badge severity="secondary" shape="circle">
                    2
                </Badge>
            </Button>
 
            <Button type="button" variant="outlined">
                <i className="pi pi-users" />
                Messages
                <Badge severity="contrast" shape="circle">
                    2
                </Badge>
            </Button>
 
            <Badge.Overlay>
                <Button type="button" variant="outlined">
                    <i className="pi pi-bell" />
                </Button>
                <Badge severity="info" className="animate-pulse" />
            </Badge.Overlay>


            {/* Sizes
            Button provides small and large sizes as alternatives to the standard. */}
            <Button size="small">
                <i className="pi pi-check" />
                Small
            </Button>
            <Button>
                <i className="pi pi-check" />
                Normal
            </Button>
            <Button size="large">
                <i className="pi pi-check" />
                Large
            </Button>
            
            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <Button label="Submit" disabled />
            
        </div>
    )
}
        