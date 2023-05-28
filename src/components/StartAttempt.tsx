import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [isQuizInProgress, setQuizInProgress] = useState<boolean>(false);
    const [attemptCount, setAttemptCount] = useState<number>(4);

    function startQuiz(): void {
        setQuizInProgress(true);
        setAttemptCount((prevCount) => prevCount - 1);
    }

    function stopQuiz(): void {
        setQuizInProgress(false);
    }

    function increaseAttempts(): void {
        setAttemptCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <div>
                Attempts Left: {attemptCount}
                <Button
                    onClick={startQuiz}
                    disabled={isQuizInProgress || attemptCount === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={stopQuiz} disabled={!isQuizInProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={increaseAttempts} disabled={isQuizInProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
