import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function toggleVisibility(): void {
        setVisible((prevVisible) => !prevVisible);
    }

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
