
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function ProgressBarDemo() {
    const value = 50;
    return (
        <div>
            {/* Basic
            Use the value property to define the progress. */}
            <ProgressBar value={value}>
                <ProgressBar.Track>
                    <ProgressBar.Indicator>
                        <ProgressBar.Label>
                            <ProgressBar.Value />
                        </ProgressBar.Label>
                    </ProgressBar.Indicator>
                </ProgressBar.Track>
            </ProgressBar>

            {/* Indeterminate
            For progresses with no value to track, set the mode property to indeterminate. */}
            <ProgressBar mode="indeterminate">
                <ProgressBar.Track className="h-1.5">
                    <ProgressBar.Indicator />
                </ProgressBar.Track>
            </ProgressBar>
        </div>
    );
}
        