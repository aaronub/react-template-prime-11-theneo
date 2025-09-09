
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import type { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function SplitButtonDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current?.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div>
            {/* Basic
            SplitButton has a default action button and a collection of additional options defined by the model property based on MenuModel API. */}
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />

            {/* Severity
            Severity defines the type of button. */}
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" />


            {/* Text
            Text buttons are displayed as textual elements. */}
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" text />

            {/* Outlined
            Outlined buttons display a border without a background initially. */}
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" outlined />


            {/* Sizes
            SplitButton provides small and large sizes as alternatives to the standard. */}
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} size="small" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} size="large" />


            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
           <Toast ref={toast}></Toast>
           <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />


        </div>
    )
}
        