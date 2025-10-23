
import React, { useState } from "react";
import { Rating } from "primereact/rating";
import type { useRatingChangeEvent } from '@primereact/types/shared/rating';

export default function RatingDemo() {
    const [value, setValue] = useState<number | null>(null);

    return (
        <div >
            {/* Basic
            Rating is used with the value property. */}
            <Rating value={3.5} onValueChange={(e: useRatingChangeEvent) => setValue(e.value || null)}>
                <Rating.Option />
            </Rating>

            {/* Half Stars
            Use allowHalf property to allow half stars. */}
            <Rating value={3} allowHalf={false}>
                <Rating.Option />
            </Rating>

            {/* ReadOnly
            When readOnly present, value cannot be edited. */}
            <Rating value={3} readOnly>
                <Rating.Option />
            </Rating>

            {/* Disabled
            When disabled is present, value cannot be edited. */}
            <Rating value={3} disabled>
                <Rating.Option />
            </Rating>

        </div>
    );
}
        