
import React from 'react';
import { Tag } from 'primereact/tag';

export default function SeverityDemo() {
    return (
        <div>
            {/* Severity
            Use severity property to define the severity of the tag. */}
            <Tag>
                <Tag.Label>Primary</Tag.Label>
            </Tag>
            <Tag severity="secondary">
                <Tag.Label>Secondary</Tag.Label>
            </Tag>
            <Tag severity="success">
                <Tag.Label>Success</Tag.Label>
            </Tag>
            <Tag severity="info">
                <Tag.Label>Info</Tag.Label>
            </Tag>
            <Tag severity="warn">
                <Tag.Label>Warn</Tag.Label>
            </Tag>
            <Tag severity="danger">
                <Tag.Label>Danger</Tag.Label>
            </Tag>
            <Tag severity="contrast">
                <Tag.Label>Contrast</Tag.Label>
            </Tag>

            {/* Pill
            Enabling rounded, displays a tag as a pill. */}
            <Tag rounded>
                <Tag.Label>Primary</Tag.Label>
            </Tag>
            <Tag severity="secondary" rounded>
                <Tag.Label>Secondary</Tag.Label>
            </Tag>
            <Tag severity="success" rounded>
                <Tag.Label>Success</Tag.Label>
            </Tag>
            <Tag severity="info" rounded>
                <Tag.Label>Info</Tag.Label>
            </Tag>
            <Tag severity="warn" rounded>
                <Tag.Label>Warn</Tag.Label>
            </Tag>
            <Tag severity="danger" rounded>
                <Tag.Label>Danger</Tag.Label>
            </Tag>
            <Tag severity="contrast" rounded>
                <Tag.Label>Contrast</Tag.Label>
            </Tag>

            {/* Icon
            Use Tag.Icon to display an icon next to the label. Place the icon left or right of the label. */}
            <div className="flex flex-wrap justify-center gap-2">
                <Tag>
                    <Tag.Icon>
                        <i className="pi pi-user"></i>
                    </Tag.Icon>
                    <Tag.Label>Primary</Tag.Label>
                </Tag>
                <Tag severity="secondary">
                    <Tag.Icon>
                        <i className="pi pi-user" />
                    </Tag.Icon>
                    <Tag.Label>Secondary</Tag.Label>
                </Tag>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <Tag>
                    <Tag.Label>Primary</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-user"></i>
                    </Tag.Icon>
                </Tag>
                <Tag severity="secondary">
                    <Tag.Label>Secondary</Tag.Label>
                    <Tag.Icon>
                        <i className="pi pi-user" />
                    </Tag.Icon>
                </Tag>
            </div>
        </div>
    );
}
        
