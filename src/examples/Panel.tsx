
import React, { useRef } from 'react'; 
import { Panel, type PanelFooterTemplateOptions, type PanelHeaderTemplateOptions } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';

export default function PanelDemo() {
    const ref = useRef<Panel>(null);
    
    const configMenu = useRef<Menu>(null);
    const items = [
        {
            label: 'Refresh',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];

    const headerTemplate = (options: PanelHeaderTemplateOptions) => {
        const className = `${options.className} flex justify-between`;

        return (
            <div className={className}>
                <div className="flex items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                    <span className="font-bold">Amy Elsner</span>
                </div>
                <div>
                    <Menu model={items} popup ref={configMenu} id="config_menu" />
                    <button className="p-panel-header-icon p-link mr-2" onClick={(e) => configMenu?.current?.toggle(e)}>
                        <span className="pi pi-cog"></span>
                    </button>
                    {options.togglerElement}
                </div>
            </div>
        );
    };

    const footerTemplate = (options: PanelFooterTemplateOptions) => {
        const className = `${options.className} flex flex-wrap items-center justify-between gap-3`;

        return (
            <div className={className}>
                <div className="flex items-center gap-2">
                    <Button icon="pi pi-user" rounded text></Button>
                    <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                </div>
                <span className="p-text-secondary">Updated 2 hours ago</span>
            </div>
        );
    };

    return (
        <div>
            {/* Basic
            A simple Panel is created with a header property along with the content as children. */}
            <Panel header="Header">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>

            {/* Toggleable
            Content of the panel can be expanded and collapsed when toggleable option is enabled. A toggleable panel can either be used as a Controlled or Uncontrolled component. In controlled mode a binding to collapsed property along with onToggle event are needed to manage the content state. */}
            <Button label="Toggle" className="m-2" onClick={(e) => ref.current?.toggle(e)} />
            <Button label="Expand" className="m-2" onClick={(e) => ref.current?.expand(e)} />
            <Button label="Collapse" className="m-2" onClick={(e) => ref.current?.collapse(e)} />
            <Panel ref={ref} header="Header" toggleable>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
            </Panel>

            {/* Template
            Title section is customized with the headerTemplate property that takes a PanelHeaderTemplateOptions object as a parameter and returns content. */}
            <Panel headerTemplate={headerTemplate} footerTemplate={footerTemplate} toggleable>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
            
        </div>
    )
}
        