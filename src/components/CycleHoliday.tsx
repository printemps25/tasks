import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🍀" | "🎄" | "🎃" | "💘" | "🐰";

const ALPHABETICAL_ORDER: Record<Holiday, Holiday> = {
    "🍀": "🎄",
    "🎄": "🎃",
    "🎃": "💘",
    "💘": "🐰",
    "🐰": "🍀"
};

const CHRONOLOGICAL_ORDER: Record<Holiday, Holiday> = {
    "🍀": "🎄",
    "🎄": "🎃",
    "🎃": "💘",
    "💘": "🐰",
    "🐰": "🍀"
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎄");

    function handleAlphabeticalOrder(): void {
        const newHoliday = ALPHABETICAL_ORDER[currentHoliday];
        setCurrentHoliday(newHoliday);
    }
    function handleYearlyOrder(): void {
        const newHoliday = CHRONOLOGICAL_ORDER[currentHoliday];
        setCurrentHoliday(newHoliday);
    }
    return (
        <div>
            <div>
                <Button onClick={handleAlphabeticalOrder}>
                    Alphabet Order
                </Button>
                <Button onClick={handleYearlyOrder}>Year Order</Button>
            </div>
            <div>Holiday: {currentHoliday}</div>
        </div>
    );
}
