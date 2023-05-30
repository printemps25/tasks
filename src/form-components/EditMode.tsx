import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="in-edit-switch"
                label="Edit Mode Enabled?"
                checked={edit}
                onChange={updateEdit}
            />
            {edit && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Is A Student?"
                    checked={student}
                    onChange={updateStudent}
                />
            )}
            <div>
                {edit && (
                    <Form.Group controlId="formName">
                        <Form.Label>Your Name Is:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                )}
            </div>
            <span>
                {!edit && (
                    <div>
                        {student
                            ? name + " is a student"
                            : name + " is not a student"}
                    </div>
                )}
            </span>
        </div>
    );
}
