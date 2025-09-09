
import React from 'react';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';

export default function BadgeDemo() {
    return (
        <div>
            {/* Basic
            A badge is displayed as the content of the Badge. */}
            <Badge value="2"></Badge>
            <Badge value="8" severity="success"></Badge>
            <Badge value="4" severity="info"></Badge >
            <Badge value="12" severity="warning"></Badge>
            <Badge value="3" severity="danger"></Badge>
            <Badge value="7" severity="secondary"></Badge>
            <Badge value="5" severity="contrast"></Badge>


            {/* Size
            Use the size property to customize the size of a Badge, currently large and xlarge are available as size options. */}
            <Badge value="6" size="xlarge" severity="success"></Badge>
            <Badge value="4" size="large" severity="warning"></Badge>


            {/* Position
            A Badge can be positioned at the top right corner of an element by adding p-overlay-badge style class to the element and embedding the badge inside. */}
            <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="2"></Badge>
            </i>
            <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="5+" severity="danger"></Badge>
            </i>
            <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge severity="danger"></Badge>
            </i>


            {/* Button
            Buttons have built-in support for badges to display a badge inline. */}
            <Button type="button" label="Emails">
                <Badge value="8"></Badge>
            </Button>
            <Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
                <Badge value="8" severity="danger"></Badge>
            </Button>
        </div>
    );
}
        