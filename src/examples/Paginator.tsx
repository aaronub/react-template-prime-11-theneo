
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import type { usePaginatorChangeEvent } from '@primereact/types/shared/paginator';

export default function PaginatorDemo() {
    const [page, setPage] = React.useState(1);
 
    const total = 100;
    const itemsPerPage = 5;


    return (
        <div >
            {/* Basic
            Use total prop to define the total number of items and itemsPerPage to define the number of items per page. */}
            <Paginator total={100} itemsPerPage={5} edges={0}>
                <Paginator.Content>
                    <Paginator.First />
                    <Paginator.Prev />
                    <Paginator.Pages />
                    <Paginator.Next />
                    <Paginator.Last />
                </Paginator.Content>
            </Paginator>


            {/* Template
            Here are the available elements that can be placed inside a paginator in any order. */}
            <Paginator total={12} itemsPerPage={1} page={1} onPageChange={(e: usePaginatorChangeEvent) => setPage(e.value)}>
                <Paginator.Content>
                    <Paginator.First />
                    <Paginator.Prev />
                    <div className="text-surface-500">({page} of 12)</div>
                    <Paginator.Next />
                    <Paginator.Last />
                </Paginator.Content>
            </Paginator>
 
            <div className="p-4 text-center">
                <img src={`https://primefaces.org/cdn/primevue/images/nature/nature${page}.jpg`} alt={page.toString()} className="rounded-lg w-full sm:w-[30rem]" />
            </div>


            {/* Custom Text
            Use onPageChange event to define the custom text to display. */}
            <Paginator total={total} itemsPerPage={itemsPerPage} page={page} onPageChange={(e: usePaginatorChangeEvent) => setPage(e.value)}>
                <Paginator.Content>
                    Showing {itemsPerPage * (page - 1) + 1} – {Math.min(total, itemsPerPage * page)} of {total}
                    <Paginator.Prev />
                    <Paginator.Next />
                </Paginator.Content>
            </Paginator>


            
        </div>
    );
}
        