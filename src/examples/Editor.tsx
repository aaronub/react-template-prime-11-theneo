
import React, { useState } from "react";
import { Editor } from "primereact/editor";
import type { EditorTextChangeEvent } from "primereact/editor";

export default function EditorDemo() {
    const [text, setText] = useState<string>('');

    return (
        <div className="card">
            {/* Basic
            Editor is used as a controlled component with value and onTextChange properties. */}
            <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue || '')} style={{ height: '320px' }} />
        </div>
    )
}
        