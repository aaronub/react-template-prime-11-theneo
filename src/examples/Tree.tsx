import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import type {  TreeEventNodeEvent } from 'primereact/tree';
import type { TreeNode } from "primereact/treenode";
import { Toast } from 'primereact/toast';

const NodeService = {
    getTreeNodesData() {
        return [
            {
                key: '0',
                label: 'Documents',
                data: 'Documents Folder',
                icon: 'pi pi-fw pi-inbox',
                children: [
                    {
                        key: '0-0',
                        label: 'Work',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-cog',
                        children: [
                            { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                            { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                        ]
                    },
                    {
                        key: '0-1',
                        label: 'Home',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-home',
                        children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
                    }
                ]
            },
            {
                key: '1',
                label: 'Events',
                data: 'Events Folder',
                icon: 'pi pi-fw pi-calendar',
                children: [
                    { key: '1-0', label: 'Meeting', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
                    { key: '1-1', label: 'Product Launch', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
                    { key: '1-2', label: 'Report Review', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
                ]
            },
            {
                key: '2',
                label: 'Movies',
                data: 'Movies Folder',
                icon: 'pi pi-fw pi-star-fill',
                children: [
                    {
                        key: '2-0',
                        icon: 'pi pi-fw pi-star-fill',
                        label: 'Al Pacino',
                        data: 'Pacino Movies',
                        children: [
                            { key: '2-0-0', label: 'Scarface', icon: 'pi pi-fw pi-video', data: 'Scarface Movie' },
                            { key: '2-0-1', label: 'Serpico', icon: 'pi pi-fw pi-video', data: 'Serpico Movie' }
                        ]
                    },
                    {
                        key: '2-1',
                        label: 'Robert De Niro',
                        icon: 'pi pi-fw pi-star-fill',
                        data: 'De Niro Movies',
                        children: [
                            { key: '2-1-0', label: 'Goodfellas', icon: 'pi pi-fw pi-video', data: 'Goodfellas Movie' },
                            { key: '2-1-1', label: 'Untouchables', icon: 'pi pi-fw pi-video', data: 'Untouchables Movie' }
                        ]
                    }
                ]
            }
        ];
    },

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
};


export default function TreeDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedKey, setSelectedKey] = useState<string>('');
    const [selectedKeys, setSelectedKeys] = useState(null);
    const [metaKey] = useState(false);
    const toast = useRef<Toast>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    const onExpand = (event: TreeEventNodeEvent) => {
        toast.current?.show({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    };

    const onCollapse = (event: TreeEventNodeEvent) => {
        toast.current?.show({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    };

    const onSelect = (event: TreeEventNodeEvent) => {
        toast.current?.show({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    };

    const onUnselect = (event: TreeEventNodeEvent) => {
        toast.current?.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };


    return (
        <div>
            {/* Basic
            Tree requires a collection of TreeNode instances as a value. */}
            <Tree value={nodes} className="w-full md:w-[30rem]" />

            {/* Single
            Single node selection is configured by setting selectionMode as single along with selectionKeys and onSelectionChange properties to manage the selection value binding. */}
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} 
                onSelectionChange={(e) => setSelectedKey(e.value as string)} className="w-full md:w-[30rem]" />

            {/* Multiple
            More than one node is selectable by setting selectionMode to multiple. By default in multiple selection mode, metaKey press (e.g. ⌘) is necessary to add to existing selections however this can be configured with disabling the metaKeySelection property. Note that in touch enabled devices, Tree always ignores metaKey.
            In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection. */}
            <Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value as any)} className="w-full md:w-[30rem]" />
        
            {/* Checkbox
            Selection of multiple nodes via checkboxes is enabled by configuring selectionMode as checkbox.
            In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has checked and partialChecked properties to represent the checked state of a node. */}
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value as any)} className="w-full md:w-[30rem]" />

            {/* Events
            An event is provided for each type of user interaction such as expand, collapse and selection. */}
            <Toast ref={toast} />
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value as any)} 
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} className="w-full md:w-[30rem]" />
            
            {/* Filter
            Filtering is enabled by adding the filter property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define filterBy property. In addition filterMode specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants. */}
            <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-[30rem]" />
        
        </div>
    )
}
        