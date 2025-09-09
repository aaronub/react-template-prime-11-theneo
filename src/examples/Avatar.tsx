
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function AvatarDemo() {
    return (
        <div>
            {/* Label
            A label is displayed as the avatar content. */}
            <div className="flex-auto">
                <h5>Label</h5>
                <Avatar label="P" className="mr-2" size="xlarge" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </div>
            <div className="flex-auto">
                <h5>Circle</h5>
                <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
            </div>
            <div className="flex-auto">
                <h5>Badge</h5>
                <Avatar label="U" size="xlarge" className="p-overlay-badge">
                    <Badge value="4" />
                </Avatar>
            </div>

            {/* Icon
            A font icon is displayed as an Avatar with the icon property. */}
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Icon</h5>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
                    <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                    <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                </div>
                <div className="flex-auto">
                    <h5>Circle</h5>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                    <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                </div>
                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
                        <Badge value="4" />
                    </Avatar>
                </div>
            </div>

            {/* Image
            Use the image property to display an image as an Avatar. */}
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Image</h5>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                </div>
                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" severity="danger" />
                    </Avatar>
                </div>
                <div className="flex-auto">
                    <h5>Gravatar</h5>
                    <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                </div>
            </div>
        </div>
    )
}
        