
import React, { useState } from "react";
import { Rating } from "primereact/rating";
import type { RatingChangeEvent } from "primereact/rating";

export default function RatingDemo() {
    const [value, setValue] = useState<number | null>(null);

    return (
        <div >
            {/* Without Cancel
            A cancel icon is displayed to reset the value by default, set cancel as false to remove this option. */}
            <Rating value={value || undefined} onChange={(e : RatingChangeEvent) => setValue(e.value || null)} cancel={false} />

            {/* ReadOnly
            When readOnly present, value cannot be edited. */}
            <Rating value={5} readOnly cancel={false} />

            {/* Disabled
            When disabled is present, a visual hint is applied to indicate that the Knob cannot be interacted with. */}
            <Rating value={5} disabled cancel={false} />

        </div>
    );
}
        