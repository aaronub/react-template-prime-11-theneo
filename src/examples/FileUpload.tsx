
import React, { useRef } from 'react';
import type { FileUploadInstance } from '@primereact/types/shared/fileupload';
import type { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Message } from 'primereact/message';
import { ProgressBar } from 'primereact/progressbar';
import { Toast, toast } from 'primereact/toast';

export default function FileUploadDemo() {
    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'basic-demo'
        });
    };
        
    return (
        <div >
            {/* Basic
            FileUpload provides a customizable interface for file selection and uploading. */}
            <FileUpload name="demo[]" url="/api/upload" accept="image/*" multiple maxFileSize={1000000} onUpload={onUpload}>
                {(instance: FileUploadInstance) => {
                    return (
                        <>
                            {instance.state.messages &&
                                instance.state.messages.length > 0 &&
                                instance.state.messages.map((msg, i) => (
                                    <Message key={i} severity="error" className="mb-2">
                                        <Message.Content>
                                            <Message.Text>{msg}</Message.Text>
                                        </Message.Content>
                                    </Message>
                                ))}
 
                            <div className="flex justify-between">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Button onClick={instance.choose}>
                                        <i className="pi pi-plus" />
                                        Choose
                                    </Button>
                                    <span>{instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'No file chosen'}</span>
                                </div>
                                <Button severity="secondary" onClick={instance.upload}>
                                    Upload
                                </Button>
                            </div>
                        </>
                    );
                }}
            </FileUpload>
 
            <Toast position="top-right" group="basic-demo">
                <Toast.Portal>
                    <Toast.Region>
                        {({ toast }: ToastRegionInstance) =>
                            toast?.toasts.map((toast: ToastType) => (
                                <Toast.Item key={toast.id} data={toast}>
                                    <div className="flex items-start gap-2">
                                        <div className="flex-1">
                                            <Toast.Title className="mb-1 -mt-0.5" />
                                            <Toast.Description />
                                        </div>
                                    </div>
                                    <Toast.Close as={Button} iconOnly severity={'secondary'} variant="text" size="small" className={'absolute top-2 right-2'}>
                                        <i className="pi pi-times"></i>
                                    </Toast.Close>
                                </Toast.Item>
                            ))
                        }
                    </Toast.Region>
                </Toast.Portal>
            </Toast>


            {/* Advanced
            Advanced uploader provides dragdrop support, multi file uploads, auto uploading, progress tracking and validations. */}
            <FileUpload name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000} className="border border-surface-200 dark:border-surface-700 rounded-md" onUpload={onUpload}>
                {(instance: FileUploadInstance) => {
                    return (
                        <>
                            <div className="flex items-center p-5 gap-2">
                                <Button onClick={instance.choose}>
                                    <i className="pi pi-plus" />
                                    Choose
                                </Button>
                                <Button severity="secondary" disabled={!instance.hasFiles} onClick={instance.upload}>
                                    <i className="pi pi-upload" />
                                    Upload
                                </Button>
                                <Button severity="secondary" disabled={!instance.hasFiles} onClick={instance.clear}>
                                    <i className="pi pi-times" />
                                    Cancel
                                </Button>
                            </div>
 
                            <FileUpload.Content>
                                {((instance.state.messages && instance.state.messages.length > 0) || instance.hasFiles) && (
                                    <div className="flex flex-col gap-4">
                                        {instance.state.messages &&
                                            instance.state.messages.length > 0 &&
                                            instance.state.messages.map((msg, i) => (
                                                <Message key={i} severity="error" className="mb-2">
                                                    <Message.Content>
                                                        <Message.Text>{msg}</Message.Text>
                                                    </Message.Content>
                                                </Message>
                                            ))}
 
                                        {instance.hasFiles && (
                                            <ProgressBar value={instance.state.progress}>
                                                <ProgressBar.Track style={{ height: '0.25rem' }}>
                                                    <ProgressBar.Indicator>
                                                        <ProgressBar.Label />
                                                    </ProgressBar.Indicator>
                                                </ProgressBar.Track>
                                            </ProgressBar>
                                        )}
                                    </div>
                                )}
 
                                <FileUpload.List />
 
                                {!instance.hasFiles && !instance.hasUploadedFiles && <div>Drag and drop files to here to upload.</div>}
                            </FileUpload.Content>
                        </>
                    );
                }}
            </FileUpload>
 
            <Toast position="top-right" group="advanced-demo">
                <Toast.Portal>
                    <Toast.Region>
                        {({ toast }: ToastRegionInstance) =>
                            toast?.toasts.map((toast: ToastType) => (
                                <Toast.Item key={toast.id} data={toast}>
                                    <div className="flex items-start gap-2">
                                        <div className="flex-1">
                                            <Toast.Title className="mb-1 -mt-0.5" />
                                            <Toast.Description />
                                        </div>
                                    </div>
                                    <Toast.Close as={Button} iconOnly severity={'secondary'} variant="text" size="small" className={'absolute top-2 right-2'}>
                                        <i className="pi pi-times"></i>
                                    </Toast.Close>
                                </Toast.Item>
                            ))
                        }
                    </Toast.Region>
                </Toast.Portal>
            </Toast>
        
        </div>  
    )
}
        