
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';


export default function TimelineDemo() {
    const events = [{ status: 'Ordered' }, { status: 'Processing' }, { status: 'Shipped' }, { status: 'Delivered' }];
    const events2 = [
        { status: 'Ordered', date: '15/10/2020 10:30' },
        { status: 'Processing', date: '15/10/2020 14:00' },
        { status: 'Shipped', date: '15/10/2020 16:15' },
        { status: 'Delivered', date: '16/10/2020 10:00' }
    ];
    const events3 = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div>
            {/* Basic */}
            <Timeline>
                {events.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite />
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event.status}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline>

            {/* Alignment
            Content location relative the line is defined with the align property. */}
            <Timeline className="w-full md:w-80">
                {events.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite />
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event.status}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline>
            <Timeline align="right" className="w-full md:w-80">
                {events.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite />
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event.status}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline>
            <Timeline align="alternate" className="w-full md:w-80">
                {events.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite />
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event.status}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline>

            {/* Opposite
            Additional content at the other side of the line can be provided with the opposite property. */}
            <Timeline>
                {events2.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite>
                            <small className="text-surface-500 dark:text-surface-400">{event.date}</small>
                        </Timeline.Opposite>
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event.status}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline>think We 
        
            {/* Template
            Sample implementation with custom content and styled markers. */}
            <Timeline align="alternate">
                {events3.map((event, index) => (
                    <Timeline.Event key={index} className={index % 2 === 1 ? 'max-[960px]:flex-row' : undefined}>
                        <Timeline.Opposite />
                        <Timeline.Separator>
                            <span className={['flex w-8 h-8 items-center justify-center rounded-full z-10 shadow-sm', index !== events.length - 1 ? 'text-white bg-primary' : ''].join(' ')}>
                                <i className={event.icon}></i>
                            </span>
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content className={index % 2 === 1 ? 'max-[960px]:!text-left' : undefined}>
                            <Card className="mt-4">
                                <Card.Body>
                                    <Card.Caption>
                                        <Card.Title>{event.status}</Card.Title>
                                        <Card.Subtitle>{event.date}</Card.Subtitle>
                                    </Card.Caption>
                                    <Card.Content>
                                        {event.image && <img src={`https://primefaces.org/cdn/primevue/images/product/${event.image}`} alt={event.status} width="200" className="shadow-sm" />}
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                                            esse, cupiditate neque quas!
                                        </p>
                                        <Button variant="text">Read more</Button>
                                    </Card.Content>
                                </Card.Body>
                            </Card>
                        </Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline>
        
        </div>
    )
}
        