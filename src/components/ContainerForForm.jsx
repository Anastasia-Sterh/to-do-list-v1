import List from "./List";
import Form from "./Form";
import CountTasks from "./CountTasks";

export function ContainerForForm() {

    return (
        <div className="container_for_form">
            <Form day={'Понедельник'} />
            <Form day={'Вторник'} />
            <Form day={'Среда'} />
            <Form day={'Четверг'} />
            <Form day={'Пятница'} />
            <Form day={'Суббота'} />
            <Form day={'Воскресенье'} />
        </div>
    )
}