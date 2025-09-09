
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';

type Nullable<T> = T | null | undefined;

export default function CalendarDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);
    const [dates, setDates] = useState<Nullable<(Date | null)[]>>(null);


    return (
        <div>
            {/* Basic
            Calendar is used a controlled input component with value and onChange properties. */}
            <Calendar value={date} onChange={(e) => setDate(e.value)} />

            {/* Format
            Default date format is mm/dd/yy which can be customized using the dateFormat property. Following options can be a part of the format.
            d - day of month (no leading zero)
            dd - day of month (two digit)
            o - day of the year (no leading zeros)
            oo - day of the year (three digit)
            D - day name short
            DD - day name long
            m - month of year (no leading zero)
            mm - month of year (two digit)
            M - month name short
            MM - month name long
            y - year (two digit)
            yy - year (four digit)
            @ - Unix timestamp (ms since 01/01/1970)
            ! - Windows ticks (100ns since 01/01/0001)
            '...' - literal text
            '' - single quote
            anything else - literal text */}
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />

            {/* Icon
            An additional icon is displayed next to the input field when showIcon is present. */}
            <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />


            {/* Range
            A range of dates can be selected by defining selectionMode as range, in this case the bound value would be an array with two values where first date is the start of the range and second date is the end. */}
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />


            {/* Inline
            Calendar is displayed as a popup by default, add inline property to customize this behavior. */}
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                    
            {/* Float Label
            A floating label appears on top of the input field when focused. Visit FloatLabel documentation for more information. */}
            <FloatLabel>
                <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                <label htmlFor="birth_date">Birth Date</label>
            </FloatLabel>
                    

            {/* Invalid
            Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries. */}
            <Calendar invalid/>

            {/* Disabled
            When disabled is present, the element cannot be edited and focused. */}
            <Calendar disabled />
        
        
        </div>
    )
}
        