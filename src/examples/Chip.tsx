
import React from 'react';
import { Chip } from 'primereact/chip';

export default function ChipDemo() {
    return (
        <div>
            {/* Basic
            A basic chip with a text is created with the label property. In addition when removable is added, a delete icon is displayed to remove a chip. */}
            <Chip>
                <Chip.Label>Action</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Label>Comedy</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Label>Mystery</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Label>Thriller</Chip.Label>
                <Chip.RemoveIcon />
            </Chip>

            {/* Icon
            A font icon next to the label can be displayed with the className property. */}
            <Chip>
                <Chip.Icon className="pi pi-apple" />
                <Chip.Label>Apple</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Icon className="pi pi-facebook" />
                <Chip.Label>Facebook</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Icon className="pi pi-google" />
                <Chip.Label>Google</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Icon className="pi pi-microsoft" />
                <Chip.Label>Microsoft</Chip.Label>
                <Chip.RemoveIcon />
            </Chip>
            <Chip>
                <Chip.Icon className="pi pi-github" />
                <Chip.Label>GitHub</Chip.Label>
                <Chip.RemoveIcon asChild>
                    <i className="pi pi-minus-circle" />
                </Chip.RemoveIcon>
            </Chip>

            {/* Image
            The Chip.Image is used to display an image like an avatar. */}
            <Chip>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                <Chip.Label>Amy Elsner</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                <Chip.Label>Asiya Javayant</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                <Chip.Label>Onyama Limba</Chip.Label>
            </Chip>
            <Chip>
                <Chip.Image src="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" />
                <Chip.Label>Xuxue Feng</Chip.Label>
                <Chip.RemoveIcon />
            </Chip>
        </div>
    );
}
        