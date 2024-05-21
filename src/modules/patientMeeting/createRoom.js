import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        console.log(id);
        props.history.push(`/patients-meeting/${id}`);
    }

    return (
        <button onClick={create}>Create Room</button>
    );
}

export default CreateRoom;