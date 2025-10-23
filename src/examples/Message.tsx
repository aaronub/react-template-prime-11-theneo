
import React from 'react'; 
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import type { MessageProps } from '@primereact/types/shared/message';

export default function MessageDemo() {
    const [messages, setMessages] = React.useState<MessageProps[]>([]);
 
    const addMessages = () => {
        setMessages([
            { severity: 'info', content: 'Dynamic Info Message' },
            { severity: 'success', content: 'Dynamic Success Message' },
            { severity: 'warn', content: 'Dynamic Warn Message' }
        ]);
    };
 
    const clearMessages = () => {
        setMessages([]);
    };


    return (
        <div>
            {/* Basic */}
            <Message>
                <Message.Content>
                    <Message.Text>Message Content</Message.Text>
                </Message.Content>
            </Message>


            {/* Severity
            The severity option specifies the type of the message. */}
            <Message severity="success">
                <Message.Content>
                    <Message.Text>Success Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="info">
                <Message.Content>
                    <Message.Text>Info Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="warn">
                <Message.Content>
                    <Message.Text>Warn Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="error">
                <Message.Content>
                    <Message.Text>Error Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="secondary">
                <Message.Content>
                    <Message.Text>Secondary Message</Message.Text>
                </Message.Content>
            </Message>
            <Message severity="contrast">
                <Message.Content>
                    <Message.Text>Contrast Message</Message.Text>
                </Message.Content>
            </Message>

            {/* Icon
            Message.Icon is used to display an icon. */}
            <Message severity="info">
                <Message.Content>
                    <Message.Icon className="pi pi-info-circle" />
                    <Message.Text>Info Message</Message.Text>
                </Message.Content>
            </Message>

            {/* Dynamic
            Multiple messages can be displayed. */}
            <div className="flex gap-2">
                <Button onClick={addMessages}>Add Messages</Button>
                <Button severity="secondary" onClick={clearMessages}>
                    Clear Messages
                </Button>
            </div>
            {messages.map((item, index) => (
                <Message key={index} severity={item.severity}>
                    <Message.Content>
                        <Message.Text>{item.content}</Message.Text>
                    </Message.Content>
                </Message>
            ))}
            
            {/* Closable
            Message.Close is a triggerable element used to close the message. */}
            <Message>
                <Message.Content>
                    <Message.Text>This is a closable message.</Message.Text>
                    <Message.Close />
                </Message.Content>
            </Message>



        </div>
    )
}
        