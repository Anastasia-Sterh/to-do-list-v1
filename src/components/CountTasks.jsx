import { useState } from "react";
import Icon from "./utils/Icon";

export default function CountTasks({ tasks, setTasks }) {

    if (tasks.length > 0) {
        return (<p> You have {tasks.length} pending tasks <button className="form_button" onClick={() => {
            if (!confirm('Вы точно хотите удалить все задачи?')) {
                return;
            } setTasks([])
        }}>
            <Icon icon='trash-can' /></button></p>)
    }

}

