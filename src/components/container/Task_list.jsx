import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/Task'

const TaskListComponent = props => {

    const defaultTask = new Task(
        'Example',
        'Example Description',
        false,
        LEVELS.NORMAL,
        )
        const changeState = (id) => {
            console.log('TODO: cambiar estado de tarea')
        }

    return (
    <>
        <div >
            <h1>Your Task</h1>
        </div>

        <TaskComponent task={defaultTask} />

    </>
    )
}

export default TaskListComponent