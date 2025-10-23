
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import type { SpeedDialProps } from '@primereact/types/shared/speeddial';

export default function SpeedDialDemo() {
    const directions = [
        { direction: 'up', style: { position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 } },
        { direction: 'down', style: { position: 'absolute', left: 'calc(50% - 2rem)', top: 0 } },
        { direction: 'left', style: { position: 'absolute', top: 'calc(50% - 2rem)', right: 0 } },
        { direction: 'right', style: { position: 'absolute', top: 'calc(50% - 2rem)', left: 0 } }
    ];
    const items = [{ icon: 'pi pi-pencil' }, { icon: 'pi pi-refresh' }, { icon: 'pi pi-trash' }, { icon: 'pi pi-upload' }, { icon: 'pi pi-external-link' }];
    const items2 = [
        { icon: 'pi pi-pencil', label: 'Add' },
        { icon: 'pi pi-refresh', label: 'Update' },
        { icon: 'pi pi-trash', label: 'Delete' },
        { icon: 'pi pi-upload', label: 'Upload' },
        { icon: 'pi pi-external-link', label: 'External' }
    ];
    return (
        <div className="card">
            {/* Linear */}
            <div style={{ position: 'relative', height: '500px' }}>
                {directions.map((item, index) => (
                    <SpeedDial key={index} direction={item.direction as SpeedDialProps['direction']} style={item.style as React.CSSProperties}>
                        <SpeedDial.Button />
                        <SpeedDial.List>
                            {items.map((action) => (
                                <SpeedDial.Item key={action.icon}>
                                    <SpeedDial.Action>
                                        <i className={action.icon}></i>
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            ))}
                        </SpeedDial.List>
                    </SpeedDial>
                ))}
            </div>

            {/* Circle
            Items can be displayed around the button when type is set to circle. Additional radius property defines the radius of the circle. */}
            <div className="flex items-center justify-center" style={{ position: 'relative', height: '500px' }}>
                <SpeedDial type="circle" radius={80} style={{ position: 'absolute' }}>
                    <SpeedDial.Button severity="warn" />
                    <SpeedDial.List>
                        {items.map((action) => (
                            <SpeedDial.Item key={action.icon}>
                                <SpeedDial.Action>
                                    <i className={action.icon}></i>
                                </SpeedDial.Action>
                            </SpeedDial.Item>
                        ))}
                    </SpeedDial.List>
                </SpeedDial>
            </div>


            {/* Tooltip */}
            <div style={{ position: 'relative', height: '350px' }}>
                <SpeedDial direction="up" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Button severity="help" />
                    <SpeedDial.List>
                        <Tooltip.Group>
                            {items2.map((action) => (
                                <Tooltip key={action.icon} side="left">
                                    <Tooltip.Trigger as={SpeedDial.Item}>
                                        <SpeedDial.Action>
                                            <i className={action.icon}></i>
                                        </SpeedDial.Action>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content>
                                            <p>{action.label}</p>
                                            <Tooltip.Arrow />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip>
                            ))}
                        </Tooltip.Group>
                    </SpeedDial.List>
                </SpeedDial>
            </div>
        </div>
    )
}
        