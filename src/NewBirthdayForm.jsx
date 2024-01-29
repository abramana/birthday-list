import {useState} from "react";

export function NewBirthdayForm({onSubmit}) {
    const [newPerson, setNewPerson] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newPerson === "") return

        onSubmit(newPerson)

        setNewPerson("")
    }

    function handleInputChange(e) {
        const { id, value } = e.target
        setNewPerson((prevPerson) => ({
            ...prevPerson,
            [id]: value,
        }))
    }

    return (
        <form onSubmit={handleSubmit} className="new-birthday-form">
            <div className="person-form-row">
                <label htmlFor="name">Person</label>
                <input value={newPerson.name} onChange={handleInputChange} type="text" id="name"/>
            </div>
            <div className="person-form-row">
                <label htmlFor="date">Birthday</label>
                <input value={newPerson.date} onChange={handleInputChange} type="date" id="date"/>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}