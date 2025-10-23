
import React, { useState } from 'react';
import { Accordion } from 'primereact/accordion';
import { Icon } from '@primereact/core/icon';
import type { AccordionHeaderInstance } from '@primereact/types/shared/accordion';

export default function BasicDemo() {
    const items = [
        {
            label: 'What is this service about?',
            value: '1',
            icon: 'pi pi-question-circle text-yellow-500',
            content: 'This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful analytics. Whether you’re working solo or in a team, it’s built to scale with your needs.'
        },
        {
            label: 'Is my data secure?',
            value: '2',
            icon: 'pi pi-lock text-blue-500',
            content: 'Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is stored on secure servers and regularly backed up.'
        },
        {
            label: 'Can I upgrade or downgrade my plan later?',
            value: '3',
            icon: 'pi pi-credit-card text-green-500',
            content: 'Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and any billing adjustments are handled automatically.'
        }
    ];


    return (
        <div >
            {/* Basic
            Accordion is defined using Accordion, Accordion.Panel, Accordion.Header, Accordion.HeaderIndicator and Accordion.Content components. Each Accordion.Panel must contain a unique value property to specify the active item. */}
            <Accordion className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        What is this service about?
                        <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>This service helps you manage your projects more efficiently by offering real-time collaboration, task tracking, and powerful analytics. Whether you’re working solo or in a team, it’s built to scale with your needs.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        Is my data secure?
                        <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>Yes. We use end-to-end encryption and follow industry best practices to ensure your data is protected. Your information is stored on secure servers and regularly backed up.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="3">
                    <Accordion.Header>
                        Can I upgrade or downgrade my plan later?
                        <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>Absolutely. You can change your subscription plan at any time from your account settings. Changes take effect immediately, and any billing adjustments are handled automatically.</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>

            {/* Template
            The optional as property controls the default container element of a header, for example setting it to a div renders a div for the header instead of a button. The asChild option enables the headless mode for further customization by passing callbacks and properties to implement your own header. */}
            <Accordion className="max-w-md mx-auto border border-surface-200 dark:border-surface-700 rounded-md divide-y divide-surface-200 dark:divide-surface-700">
                {items.map((item) => (
                    <Accordion.Panel key={item.value} value={item.value} className="last:border-none transition-all ease-out">
                        <Accordion.Header className="bg-transparent py-3.5">
                            <span className="flex items-center gap-4">
                                <i className={item.icon}></i>
                                <span className="font-medium">{item.label}</span>
                            </span>
                            <Accordion.HeaderIndicator>{({ accordionpanel }: AccordionHeaderInstance) => <Icon className="pi pi-plus transition-transform ease-out" rotate={accordionpanel?.active ? 45 : 0} />}</Accordion.HeaderIndicator>
                        </Accordion.Header>
                        <Accordion.Content className="bg-transparent px-4 pb-3.5 leading-6 pl-13">
                            <p>{item.content}</p>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion>


            {/* Disabled
            Enabling disabled property of an Accordion.Panel prevents user interaction of the panel or enable disabled of the Accordion component disables all panels. */}
            <Accordion disabled className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        How do I reset my password?
                        <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>You can reset your password by clicking the “Forgot password?” link on the login page. We’ll send a password reset link to your registered email address.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2">
                    <Accordion.Header>
                        Do you offer team accounts?
                        <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>Yes. Our Team and Business plans are designed for collaboration. You can invite team members, assign roles, and manage permissions easily from your dashboard.</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
            <Accordion className="max-w-md mx-auto">
                <Accordion.Panel value="1">
                    <Accordion.Header>
                        What happens if I exceed my usage limit?
                        <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>If you go over your plan limits (e.g., storage or API requests), you’ll receive a notification. You can either upgrade your plan or wait until the next billing cycle resets.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel value="2" disabled>
                    <Accordion.Header>
                        Is there a mobile app available?
                        <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content>
                        <p>Yes, we offer both iOS and Android apps so you can manage your account and stay connected on the go.</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
            
        </div>
    )
}
        