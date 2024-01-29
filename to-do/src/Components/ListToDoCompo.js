import React from 'react'

export default function ListToDoCompo() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(),today.getDay())
    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
        {id: 2, description: 'Learn Full Stack', done: false, targetDate:targetDate},
        {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
    ]
  return (
    <div className="container">
      <h1 className='my-3'>Things You Want To Do!</h1>
      <table className="table">
        <thead>
            <tr>
                <td>Id</td>
                <td>Description</td>
                <td>Is Done?</td>
                <td>Target Date</td>
            </tr>
        </thead>
        <tbody>
            {
                todos.map(
                    todo =>(
                        <tr key={todo.i}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toDateString()}</td>
                        </tr>
                    )
                )
            }
        </tbody>
      </table>
    </div>
  )
}
