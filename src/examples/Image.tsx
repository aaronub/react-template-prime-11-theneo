
import React from 'react'; 
import { Image } from 'primereact/image';

export default function ImageDemo() {
    return (
        <div>
            {/* Preview
            Enabling preview mode displays a modal layer when the image is clicked to provide transformation options such as rotating and zooming. */}
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
        </div>
    )
}
        