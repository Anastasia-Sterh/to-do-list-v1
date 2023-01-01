import { useState } from "react";
import List from "./List"
import Icon from "./utils/Icon"
import CountTasks from "./CountTasks";
import { useEffect } from "react";
import { saveTasks } from "../data/api";
import { getTasks } from "../data/api";

export default function Form({ day }) {

    const [tasks, setTasks] = useState([]);
    const TODO_KEY_IN_LS = 'TODO_KEY_IN_LS'

    // Выполняется один раз когда <Form> создаётся
    useEffect(() => {
        getTasks(day)
            .then(x => {
                if (x.length) {
                    setTasks(x);
                }
            })


    }, [])

    // Выполняется каждый раз, когда изменяется tasks
    useEffect(() => {
        saveTasks(tasks, day)
    }, [tasks])


    const [value, setValue] = useState('');



    return (
        <div className="form">
            <h1>{day}</h1>

            <div className="container_form_input">
                <input className="form_input" value={value} type='text' placeholder="Что вы хотите сделать?"
                    onChange={(event) => { setValue(event.target.value) }}
                    onKeyDown={(event) => {
                        if (event.key == 'Enter') {
                            if (value.trim() == '') {
                                alert('Напишите чего-нибудь для приличия!')
                                return
                            }
                            setTasks(tasks.concat({ id: tasks.length + 1, text: value })); setValue('')
                        }
                    }} />
                <button className="form_button" onClick={() => {
                    if (value.trim() == '') {
                        alert('Напишите чего-нибудь для приличия!')
                        return
                    }
                    setTasks(tasks.concat({ id: tasks.length + 1, text: value })); setValue('')
                }}>
                    <Icon icon="rocket" />
                </button>

            </div>

            <List tasks={tasks} setTasks={setTasks} />
            <CountTasks tasks={tasks} setTasks={setTasks} />
        </div>

    )
}

