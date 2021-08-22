import React, { Component } from "react";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn', done: false, targetDate: new Date() },
                    { id: 2, description: 'Learn', done: false, targetDate: new Date() },
                    { id: 3, description: 'Learn', done: false, targetDate: new Date() },
                    { id: 4, description: 'Learn', done: false, targetDate: new Date() }
                ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <th>{todo.id}</th>
                                        <th>{todo.description}</th>
                                        <th>{todo.done.toString()}</th>
                                        <th>{todo.targetDate.toString()}</th>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent
