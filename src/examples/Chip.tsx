
import React from 'react';
import { Chip } from 'primereact/chip';

export default function ChipDemo() {
    return (
        <div>
            {/* Basic
            A basic chip with a text is created with the label property. In addition when removable is added, a delete icon is displayed to remove a chip. */}
            <Chip label="Action" />
            <Chip label="Comedy" />
            <Chip label="Mystery" />
            <Chip label="Thriller" removable />

            {/* Icon
            A font icon next to the label can be displayed with the icon property. */}
            <Chip label="Apple" icon="pi pi-apple" />
            <Chip label="Facebook" icon="pi pi-facebook" />
            <Chip label="Google" icon="pi pi-google" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />

            {/* Image
            The image property is used to display an image like an avatar. */}
            <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
            <Chip label="Asiya Javayant" image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" />
            <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" />
            <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" removable />
        </div>
    );
}
        