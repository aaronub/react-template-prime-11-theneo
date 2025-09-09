
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function FileUploadDemo() {
    const toast = useRef<Toast>(null);

    const onUpload = () => {
        toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
        
    return (
        <div >
            {/* Basic
            FileUpload basic mode provides a simpler UI as an alternative to default advanced mode. */}
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />


            {/* Advanced
            FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations. */}
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        
        </div>  
    )
}
        