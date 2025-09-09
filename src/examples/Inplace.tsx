
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default function InplaceDemo() {
    const [text, setText] = useState<string>('');

    return (
        <div>
            {/* Basic
            A basic inplace with a text is created with the label property. */}
            <Inplace>
                <InplaceDisplay>View Content</InplaceDisplay>
                <InplaceContent>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </InplaceContent>
            </Inplace>

            {/* Input
            Inplace can be used within a form to display a value as read only before making it editable. The closable property adds a close button next to the content to switch back to read only mode. */}
            <Inplace closable>
                <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
                <InplaceContent>
                    <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                </InplaceContent>
            </Inplace>
        </div>
    );
}
        