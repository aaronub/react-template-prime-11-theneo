
import React from 'react';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';

export default function BadgeDemo() {
    return (
        <div>
            {/* Severity
            The severity property defines the visual style of a badge */}
            <Badge>Default</Badge>
            <Badge severity="secondary">Secondary</Badge>
            <Badge severity="success">Success</Badge>
            <Badge severity="info">Info</Badge>
            <Badge severity="warn">Warning</Badge>
            <Badge severity="danger">Danger</Badge>
            <Badge severity="contrast">Contrast</Badge>


            {/* Size
            Use the size property to change the size of a badge. */}
            <Badge size="small">Small</Badge>
            <Badge>Default</Badge>
            <Badge size="large">Large</Badge>
            <Badge size="xlarge">XLarge</Badge>


            {/* Overlay
            A badge can be added to any element by encapsulating the content with the Badge.Overlay component. */}
            <Badge.Overlay>
                <i className="pi pi-bell" style={{ fontSize: '2rem' }} />
                <Badge shape="circle">2</Badge>
            </Badge.Overlay>
            <Badge.Overlay>
                <i className="pi pi-calendar" style={{ fontSize: '2rem' }} />
                <Badge shape="circle" severity="danger">
                    4
                </Badge>
            </Badge.Overlay>
            <Badge.Overlay>
                <i className="pi pi-envelope" style={{ fontSize: '2rem' }} />
                <Badge shape="circle"></Badge>
            </Badge.Overlay>


            {/* Button
            Buttons have built-in support for badges to display a badge inline. */}
            <Button type="button">
                Emails
                <Badge severity="secondary" shape="circle">
                    8
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
        </div>
    );
}
        