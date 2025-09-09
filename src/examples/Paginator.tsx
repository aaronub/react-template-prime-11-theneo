
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import type { PaginatorPageChangeEvent } from 'primereact/paginator';
import { Dropdown } from 'primereact/dropdown';

export default function PaginatorDemo() {
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const [first2, setFirst2] = useState([0, 0, 0]);
    const [rows2, setRows2] = useState([10, 10, 10]);
    const onPageChange2 = (e: PaginatorPageChangeEvent, index: number) => {
        setFirst2(first2.map((f: number, i: number) => (index === i ? e.first : f)));
        setRows2(rows2.map((r: number, i: number) => (index === i ? e.rows : r)));
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options: any) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 120, value: 120 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        CurrentPageReport: (options: any) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };


    return (
        <div >
            {/* Basic
            Paginator is used as a controlled component with first, rows and onPageChange properties to manage the first index and number of records to display per page. Total number of records need to be with totalRecords property. Default template includes a dropdown to change the rows so rowsPerPageOptions is also necessary for the dropdown options. */}
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />


            {/* Template
            Templating allows overriding the default content of the UI elements by defining callbacks using the element name. The parameters passed to theese callbacks contain properties for binding to your custom elements like the event handler to trigger pagination. Additional leftContent and rightContent properties are available to insert content at both sides of the paginator. */}
            <div className="flex justify-end">
                <Paginator template={template2} first={first2[1]} rows={rows2[1]} totalRecords={120} onPageChange={(e) => onPageChange2(e, 1)} />
            </div>
            
        </div>
    );
}
        