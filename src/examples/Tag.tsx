
import React from 'react';
import { Tag } from 'primereact/tag';

export default function SeverityDemo() {
    return (
        <div>
            {/* Severity
            Severity defines the color of the tag, possible values are success, info, warning and danger in addition to the default theme color. */}
            <Tag value="Primary"></Tag>
            <Tag severity="success" value="Success"></Tag>
            <Tag severity="info" value="Info"></Tag>
            <Tag severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
            <Tag severity="secondary" value="Secondary"></Tag>
            <Tag severity="contrast" value="Contrast"></Tag>

            {/* Pill
            Enabling rounded, displays a tag as a pill. */}
            <Tag value="Primary" rounded></Tag>
            <Tag severity="success" value="Success" rounded></Tag>
            <Tag severity="info" value="Info" rounded></Tag>
            <Tag severity="warning" value="Warning" rounded></Tag>
            <Tag severity="danger" value="Danger" rounded></Tag>
            <Tag severity="secondary" value="Secondary" rounded></Tag>
            <Tag severity="contrast" value="Contrast" rounded></Tag>

            {/* Icon
            A font icon next to the value can be displayed with the icon property. */}
            <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
            <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
            <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
            <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
            <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        </div>
    );
}
        
