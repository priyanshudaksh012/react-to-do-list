import React from 'react'

export default function TodoList({ tasks, removeItem }) {

    return (
        <table className="table table-stripped table-bordered mt-2">
            <thead>
                <tr>
                    <th>SNo.</th>
                    <th>Task Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((element, index) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.task}</td>
                            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => { removeItem(element.id) }} >Remove Item</button></td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}
