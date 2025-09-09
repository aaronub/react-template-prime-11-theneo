
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export default function OverlayPanelDemo() {
    const op = useRef<any>(null);

    return (
        <div >
            {/* Basic
            OverlayPanel is accessed via its reference and visibility is controlled using toggle, show and hide methods with an event of the target. */}
            <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current?.toggle(e)} />
            <OverlayPanel ref={op}>
                <img src={'https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
            </OverlayPanel>
        </div>
    );
}
        