import { MeterGroup } from 'primereact/metergroup';

export default function MeterGroupDemo() {
    const values = [
        { label: 'Apps', value: 14 },
        { label: 'Messages', value: 12 },
        { label: 'Media', value: 8 },
        { label: 'System', value: 12 },
        { label: 'Documents', value: 6 },
        { label: 'Cache', value: 11 },
        { label: 'Other', value: 9 }
    ];

    return (
        <div className="card">
            {/* Multiple
            Adding more MeterGroup.Meter components displays the meters in a group. Pass index to MeterGroup.Meter and MeterGroup.Marker to identify the meter's and label's position to get the color */}
            <MeterGroup>
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} index={index} value={item.value} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map((item, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Marker index={index} />
                            <MeterGroup.Text>
                                {item.label} ({item.value}%)
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
            </MeterGroup>

            {/* Color
            MeterGroup.Meter and MeterGroup.Marker components supports custom color values. Use color property or pass color with className or style. color has custom color names like blue, emerald, violet, amber, etc. or hex, rgb, hsl, or hsla values. */}
            <MeterGroup>
                <MeterGroup.Meters>
                    <MeterGroup.Meter value={12} color="violet" />
                    <MeterGroup.Meter value={14} color="#10B981" />
                    <MeterGroup.Meter value={10} color="rgb(244, 63, 94)" />
                    <MeterGroup.Meter value={8} className="bg-blue-500" />
                    <MeterGroup.Meter value={10} style={{ backgroundColor: '#EAB308' }} />
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    <MeterGroup.Label>
                        <MeterGroup.Marker color="violet" />
                        <MeterGroup.Text>Violet</MeterGroup.Text>
                    </MeterGroup.Label>
                    <MeterGroup.Label>
                        <MeterGroup.Marker color="#10B981" />
                        <MeterGroup.Text>Emerald</MeterGroup.Text>
                    </MeterGroup.Label>
                    <MeterGroup.Label>
                        <MeterGroup.Marker color="rgb(244, 63, 94)" />
                        <MeterGroup.Text>Rose</MeterGroup.Text>
                    </MeterGroup.Label>
                    <MeterGroup.Label>
                        <MeterGroup.Marker className="bg-blue-500" />
                        <MeterGroup.Text>Blue</MeterGroup.Text>
                    </MeterGroup.Label>
                    <MeterGroup.Label>
                        <MeterGroup.Marker style={{ backgroundColor: '#EAB308' }} />
                        <MeterGroup.Text>Yellow</MeterGroup.Text>
                    </MeterGroup.Label>
                </MeterGroup.Labels>
            </MeterGroup>
        </div>
    );
}
