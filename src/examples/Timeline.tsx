
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

export default function TimelineDemo() {
    const events: TimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex w-8 h-8 items-center justify-center text-white rounded-full z-[1] shadow" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.image} width={200} className="shadow-1" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

        
    return (
        <div>
            {/* Basic
            Timeline requires a value for the collection of events and content function that receives an object as a parameter to return content. */}
            <Timeline value={events} content={(item) => item.status} />

            {/* Alignment
            Content location relative the line is defined with the align property. */}
            <Timeline value={events} content={(item) => item.status} className="w-full md:w-[20rem]" />
            <Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-[20rem]" />
            <Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-[20rem]" />

            {/* Opposite
            Additional content at the other side of the line can be provided with the opposite property. */}
            <Timeline value={events} opposite content={(item) => item.status} className="w-full md:w-[20rem]" />

            {/* Content
            Content of the timeline is defined with the content function. */}
            <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="text-color-secondary">{item.date}</small>} />
        
            {/* Template
            Sample implementation with custom content and styled markers. */}
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        
            
      
            
            
        </div>
    )
}
        