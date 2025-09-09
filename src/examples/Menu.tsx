
import React, { useRef } from 'react'; 
import { Menu } from 'primereact/menu';
import type { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export default function MenuDemo() {
    let items: MenuItem[] = [
        { label: 'New', icon: 'pi pi-plus', command: () => {
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
        } },
        { label: 'Search', icon: 'pi pi-search', command: () => {
            toast.current?.show({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
        } }
    ];
    const menuLeft = useRef<Menu>(null);
    const menuRight = useRef<Menu>(null);
    const toast = useRef<any>(null);

    const items2 = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    const navigate = useNavigate();
    const items3 = [
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled'
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                navigate('/installation');
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://react.dev/'
        }
    ];

    return (
        <div>
            {/* Basic
            Menu requires a collection of menuitems as its model. */}
            <Menu model={items} />


            {/* Group */}
            <Menu model={items2} />


            {/* Popup
            Popup mode is enabled by adding popup property and calling toggle method with an event of the target. The popupAlignment property allows you to control how the overlay is aligned with its target. */}
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
            <Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current?.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current?.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
            

            {/* Command
            The command property defines the callback to run when an item is activated by click or a key event. */}
            <Menu model={items} />
            <Toast ref={toast} />


            {/* Router
            Items with navigation are defined with command and url property to be able to use a router link component, an external link or programmatic navigation. */}
            <Menu model={items3} />
            
        </div>
    )
}
        