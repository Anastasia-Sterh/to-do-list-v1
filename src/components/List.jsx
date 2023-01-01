import { useState } from "react";
import Icon from "./utils/Icon";



export default function List({ tasks, setTasks }) {

    let liArray = tasks.map(function (task, i) {
        return <li key={task.id}>
            <div className="div_li" >
                <span key={task.id} className={task.status ? 'text_decoration' : ''}> {task.text} </span>
                <div className="div_li_buttons">
                    <button className="li_button" onClick={() => { setTasks(tasks.filter(del => task.id != del.id)) }}  >
                        <Icon icon='trash-can' />
                    </button>
                    <button className="check_button li_button " onClick={() => setTasks(tasks.map(t => t.id == task.id ? { ...t, status: !t.status } : t))} >
                        <Icon icon='check' />
                    </button>
                </div>
            </div>
        </li >



    });


    return (
        <ul>
            {liArray}


        </ul>

    )
}