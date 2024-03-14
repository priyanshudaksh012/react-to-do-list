import React, { useState } from 'react'
import TodoList from './TodoList';

export default function Todo() {
    const [task, setTask] = useState();
    const [taskList, setTaskList] = useState([]);

    function addTask() {
        let newArr = [...taskList];
        newArr.push(task)
        setTaskList(newArr);
    }

    return (
        <>
            <div className='container mt-2'>

                <div className='card bg-white'>
                    <div className='card-body'>
                        <h2>Todo List</h2>
                        <form>
                            <div className="row">
                                <div className="col-xl-8">
                                    <label>Enter Task Name</label>
                                    <input type="text" className="form-control" onChange={(e) => { setTask(e.target.value) }} placeholder="Enter task name" />
                                </div>

                                <div className='col-xl-4'>
                                    <button type="button" className="btn btn-primary btn-sm mt-4" onClick={addTask}>Add Task</button>
                                </div>

                            </div>
                        </form>

                        <TodoList tasks={taskList}></TodoList>

                    </div>
                    {/* card body end here  */}

                </div>
            </div>
        </>
    )
}
