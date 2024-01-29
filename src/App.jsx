import "./styles.css"
import {NewBirthdayForm} from "./NewBirthdayForm";
import {useEffect, useState} from "react";

export default function App() {
    const [birthdays, setBirthdays] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(birthdays))
    }, [birthdays])

    function addTodo(title) {
        setBirthdays(currentBirthdays => {
            return [
                ...currentBirthdays,
                {id: crypto.randomUUID(), title, completed: false},
            ]
        })
    }

    return (
        <>
            <NewBirthdayForm onSubmit={addTodo} />
            <h1 className="header">Birthday List</h1>
        </>
    )

}