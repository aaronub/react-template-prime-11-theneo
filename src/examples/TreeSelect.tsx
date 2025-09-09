
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import type { TreeSelectChangeEvent } from 'primereact/treeselect';
import type { TreeNode } from 'primereact/treenode';
import { FloatLabel } from 'primereact/floatlabel';


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
    

export default function TreeSelectDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<string[]>([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div >
            {/* Basic
            TreeSelect is used as a controlled component with value and onChange properties along with an options collection. Internally Tree component is used so the options model is based on TreeNode API.
            In single selection mode, value binding should be the key value of a node. */}
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value as string)} 
                className="md:w-[20rem] w-full" placeholder="Select Item"></TreeSelect>

            {/* Multiple
            More than one node is selectable by setting selectionMode to multiple. By default in multiple selection mode, metaKey press (e.g. ⌘) is necessary to add to existing selections however this can be configured with disabling the metaKeySelection property. Note that in touch enabled devices, TreeSelect always ignores metaKey.
            In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection. */}
            <TreeSelect value={selectedNodeKeys as any} onChange={(e) => setSelectedNodeKeys(e.value as unknown as string[] || [])} options={nodes} 
                            metaKeySelection={false} className="md:w-[20rem] w-full" selectionMode="multiple" placeholder="Select Items"></TreeSelect>
             
            {/* Checkbox
            Selection of multiple nodes via checkboxes is enabled by configuring selectionMode as checkbox.
            In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has checked and partialChecked properties to represent the checked state of a node obje to indicate selection. */}
            <TreeSelect value={selectedNodeKeys as any} onChange={(e: TreeSelectChangeEvent) => setSelectedNodeKeys(e.value as unknown as string[] || [])} options={nodes} 
                            metaKeySelection={false} className="md:w-[20rem] w-full" selectionMode="checkbox" display="chip" placeholder="Select Items"></TreeSelect>

            {/* Filter
            Filtering is enabled by adding the filter property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define filterBy property. In addition filterMode specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants. */}
            <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value as string)} options={nodes} 
                    filter className="md:w-[20rem] w-full" placeholder="Select Item"></TreeSelect>
        
            {/* Clear Icon
            When showClear is enabled, a clear icon is added to reset the TreeSelect. */}
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value as string )} 
                className="md:w-[20rem] w-full" placeholder="Select Item" showClear></TreeSelect>        

            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel className="w-full md:w-[20rem]">
                <TreeSelect inputId="treeselect" value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value as string)}
                    className="w-full"></TreeSelect>
                <label htmlFor="treeselect">TreeSelect</label>
            </FloatLabel>   
        
            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <TreeSelect invalid value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value as string)} 
                className="md:w-[20rem] w-full" placeholder="Select Item"></TreeSelect>                    

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <TreeSelect disabled placeholder="Select Item" className="md:w-[20rem] w-full" />        
        
        </div>
    );
}
        