import React from 'react'

export default function TodoList({ tasks }) {
    console.log(tasks)
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
                    tasks.map((element) => (
                        <tr>
                            <td></td>
                            <td>{element}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}
