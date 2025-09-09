
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function ProgressBarDemo() {
    return (
        <div>
            {/* Basic
            ProgressBar is used with the value property. */}
            <ProgressBar value={50}></ProgressBar>

            {/* Indeterminate
            For progresses with no value to track, set the mode property to indeterminate. */}
            <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
        </div>
    );
}
        