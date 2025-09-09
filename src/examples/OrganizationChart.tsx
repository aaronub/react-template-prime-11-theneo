
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import type { TreeNode } from 'primereact/treenode';

export default function OrganizationChartDemo() {
    const [data] = useState([
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node: TreeNode) => {
        return (
            <div className="flex flex-col items-center">
                <img alt={node.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`w-[2rem] shadow-2 flag flag-${node.data}`} />
                <div className="mt-3 font-medium text-lg">{node.label}</div>
            </div>
        );
    };

    const [data2] = useState<any[]>([
        {
            expanded: true,
            type: 'person',
            className: '!bg-indigo-500 !text-white',
            style: { borderRadius: '12px' },
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    className: '!bg-purple-500 !text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales',
                            className: '!bg-purple-500 !text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'Marketing',
                            className: '!bg-purple-500 !text-white',
                            style: { borderRadius: '12px' }
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    className: '!bg-teal-500 !text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development',
                            className: '!bg-teal-500 !text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'UI/UX Design',
                            className: '!bg-teal-500 !text-white',
                            style: { borderRadius: '12px' }
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate2 = (node: any) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-[3rem] h-[3rem]" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };


    return (
        <div>
            {/* Basic
            OrganizationChart requires a collection of TreeNode instances as a value. */}
            <div className="card overflow-x-auto">
                <OrganizationChart value={data} />
            </div>

            {/* Template
            Custom content instead of a node label is defined using the nodeTemplate property. */}
            <div className="card overflow-x-auto">
                <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
            </div>

            {/* Colored
            Styling a specific node is configured with className and style options of a TreeNode. */}
            <div className="card overflow-x-auto">
                <OrganizationChart value={data2} nodeTemplate={nodeTemplate2} />
            </div>


        </div>
    )
}
        