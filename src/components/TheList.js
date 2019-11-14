import React, {useState} from "react";

const TheList = props => {
    console.log("props", props);
    const [list, setList] = useState ({ 
        name: "", 
        email: "", 
        role: "" 
    })


    const handleChanges = e => {
        console.log(list);
        setList({ ...list, [e.target.name]: e.target.value})
    }

    const submitList = e => {
        e.preventDefault();
        props.addNewList(list);
        setList({ email: "", role: "" });
    }

    return (
        <form onSubmit={submitList}>
        <label htmlFor="name">Name</label>
        <input
            id="name"
            type="text"
            name="name"
            onChange={handleChanges}
            value={list.name}
        />
        <label htmlFor="email">Email</label>
        <textarea
            id="email"
            type="text"
            name="email"
            onChange={handleChanges}
            value={list.email}
        />
        <label htmlFor="role">Role</label>
        <textarea
            id="role"
            type="text"
            name="role"
            onChange={handleChanges}
            value={list.role}
        />
        <button type="submit">Submit</button>
        </form>
    );
};

export default TheList;
