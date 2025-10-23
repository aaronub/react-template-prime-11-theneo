
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { CheckIcon } from '@primereact/icons';

export default function AvatarDemo() {
    return (
        <div>
            {/* Fallback
            The Avatar.Fallback component displays a label or an icon when an image fails to load or when an image is not preferred. */}
            <Avatar>
                <Avatar.Fallback>J</Avatar.Fallback>
            </Avatar>
            <Avatar className="bg-amber-100 dark:bg-amber-950/50 text-amber-500 dark:text-amber-500">
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar>
            <Avatar>
                <Avatar.Fallback>
                    <CheckIcon className="size-4" />
                </Avatar.Fallback>
            </Avatar>
            <Avatar className="bg-blue-100 dark:bg-blue-950/50 text-blue-500 dark:text-blue-500">
                <Avatar.Fallback>
                    <i className="pi pi-user" />
                </Avatar.Fallback>
            </Avatar>


            {/* Image
            The Avatar.Image component displays an image as an Avatar. */}
            <Avatar size="large" shape="circle">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>A</Avatar.Fallback>
            </Avatar>


            {/* Badge
            Badge component can be used to display a badge on an Avatar. */}
            <Badge.Overlay>
                <Avatar size="large" shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <Avatar.Fallback>O</Avatar.Fallback>
                </Avatar>
                <Badge size="small" shape="circle" severity="success">
                    2
                </Badge>
            </Badge.Overlay>
            <Badge.Overlay>
                <Avatar size="large">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                    <Avatar.Fallback>W</Avatar.Fallback>
                </Avatar>
                <Badge shape="circle" severity="danger"></Badge>
            </Badge.Overlay>

            {/* Shape
            Use the shape property to change the appearance. */}
            <Avatar shape="circle" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <Avatar.Fallback>W</Avatar.Fallback>
            </Avatar>
            <Avatar shape="square" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                <Avatar.Fallback>W</Avatar.Fallback>
            </Avatar>

            {/* Sizes
            Use the size property to change the size of an avatar. */}
            <Avatar shape="circle" size="normal">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar>
            <Avatar shape="circle" size="large">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar>
            <Avatar shape="circle" size="xlarge">
                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Avatar.Fallback>CC</Avatar.Fallback>
            </Avatar>

        </div>
    )
}
        