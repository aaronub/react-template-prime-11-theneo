
import React from 'react'; 
import { Tabs } from 'primereact/tabs';


export default function TabsDemo() {
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content`, value: `${i}` }))
    const tabs = [
        { id: 'tab1', title: 'Account Info', content: 'Update your personal information such as name, email address, and profile picture.' },
        { id: 'tab2', title: 'Payment', content: 'Manage your subscription plan, view invoices, and update your payment method.' },
        { id: 'tab3', title: 'Preferences', content: 'Customize how the application looks and behaves to match your personal preferences.' }
    ];
    return (
        <div >
            {/* Basic */}
            <Tabs value="tab1">
                <Tabs.List>
                    <Tabs.Tab value="tab1">Account Info</Tabs.Tab>
                    <Tabs.Tab value="tab2">Payment</Tabs.Tab>
                    <Tabs.Tab value="tab3">Preferences</Tabs.Tab>
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                    <Tabs.Panel value="tab1">
                        <p>Update your personal information such as name, email address, and profile picture.</p>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab2">
                        <p>Manage your subscription plan, view invoices, and update your payment method.</p>
                    </Tabs.Panel>
                    <Tabs.Panel value="tab3">
                        <p>Customize how the application looks and behaves to match your personal preferences.</p>
                    </Tabs.Panel>
                </Tabs.Panels>
            </Tabs>


            {/* Dynamic */}
            <Tabs value="tab1">
                <Tabs.List>
                    {tabs.map((tab) => (
                        <Tabs.Tab key={tab.id} value={tab.id}>
                            {tab.title}
                        </Tabs.Tab>
                    ))}
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                    {tabs.map((tab) => (
                        <Tabs.Panel key={tab.id} value={tab.id}>
                            <p>{tab.content}</p>
                        </Tabs.Panel>
                    ))}
                </Tabs.Panels>
            </Tabs>



            {/* Scrollable */}
            <Tabs value="0" scrollable>
                <Tabs.List>
                    {scrollableTabs.map((tab) => (
                        <Tabs.Tab key={tab.value} value={tab.value}>
                            {tab.title}
                        </Tabs.Tab>
                    ))}
                    <Tabs.Indicator />
                </Tabs.List>
                <Tabs.Panels>
                    {scrollableTabs.map((tab) => (
                        <Tabs.Panel key={tab.value} value={tab.value}>
                            {tab.content}
                        </Tabs.Panel>
                    ))}
                </Tabs.Panels>
            </Tabs>
            
        </div>
    )
}
        