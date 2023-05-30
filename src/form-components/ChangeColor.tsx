import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    //Pink, Red, Orange, Yellow, Green, Blue, Indigo, Violet
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={color}
                        label={color}
                        value={color}
                        checked={false}
                        style={{
                            backgroundColor: color
                        }}
                    />
                ))}
            </div>
            <div>
                You have chosen:{" "}
                <mark
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </mark>
            </div>
        </div>
    );
}
