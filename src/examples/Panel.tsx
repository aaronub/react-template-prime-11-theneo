
import React, { useRef } from 'react'; 
import { Motion } from '@primereact/core/motion';
import { MinusIcon, PlusIcon } from '@primereact/icons';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

export default function PanelDemo() {
    const [show, setShow] = React.useState(true);

    return (
        <div>
            {/* Basic
            Panel is a container component with a Panel.Header and Panel.Content. */}
            <Panel>
                <Panel.Header>Header</Panel.Header>
                <Panel.Content>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel.Content>
            </Panel>

            {/* Toggleable
            Panel can be made toggleable by using the Motion component or an animation library to animate the visibility of the content. The Panel.Header contains a button to toggle the visibility of the content, and the Panel.Content is wrapped inside the Motion component to handle the animation. */}
            <Panel>
                <Panel.Header>
                    <Panel.Title>Header</Panel.Title>
                    <Panel.HeaderActions>
                        <Button onClick={() => setShow((prev) => !prev)} rounded variant="text" iconOnly>
                            {show ? <MinusIcon /> : <PlusIcon />}
                        </Button>
                    </Panel.HeaderActions>
                </Panel.Header>
                <Motion in={show} name="p-toggleable-content">
                    <Panel.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Panel.Content>
 
                    <Panel.Footer>
                        <p className="m-0">Footer</p>
                    </Panel.Footer>
                </Motion>
            </Panel>

            {/* Template
            Header and footer sections of the panel can be customized using Panel.Header and Panel.Footer components. */}
            <Panel toggleable>
                <Panel.Header>
                    <Panel.Title>
                        <div className="flex items-center gap-2">
                            <Avatar shape="circle">
                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                                <Avatar.Fallback>A</Avatar.Fallback>
                            </Avatar>
                            <span className="font-bold">Amy Elsner</span>
                        </div>
                    </Panel.Title>
                    <Panel.HeaderActions>
                        <Button severity="secondary" rounded variant="text" iconOnly>
                            <i className="pi pi-cog" />
                        </Button>
                        <Button onClick={() => setShow((prev) => !prev)} rounded variant="text" iconOnly>
                            {show ? <MinusIcon /> : <PlusIcon />}
                        </Button>
                    </Panel.HeaderActions>
                </Panel.Header>
                <Motion in={show} name="p-toggleable-content">
                    <Panel.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <Button iconOnly rounded variant="text">
                                    <i className="pi pi-user" />
                                </Button>
                                <Button severity="secondary" iconOnly rounded variant="text">
                                    <i className="pi pi-bookmark" />
                                </Button>
                            </div>
                            <span className="text-surface-500 dark:text-surface-400">Updated 2 hours ago</span>
                        </div>
                    </Panel.Content>
                </Motion>
            </Panel>
            
        </div>
    )
}
        