//  import React, { useState } from "react";
// import todoCss from "./todo.module.css";
// import bookImage from "./media/book_5_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

// function Todo() {
//   const [task, setTask] = useState("");

//   const initialTasks = ["buy car", "buy bike", "kuch bhi"];
//   const [todo, setTodo] = useState(initialTasks);

//   function handleForm(e) {
//     e.preventDefault();
//     if (task.trim()) {
//       setTodo([...todo, task]);
//       setTask("");
//     }
//   }

//   function handleTaskChange(e) {
//     setTask(e.target.value);
//   }

//   return (
//     <div className={todoCss.todo}>
//       <div className={todoCss.main}>
//         <img className={todoCss.imgbook} src={bookImage} alt="Book icon" />
//         <h1>Todo list</h1>
//         <form onSubmit={handleForm}>
//           <input className="inputvlu" type="text" value={task} onChange={handleTaskChange} />
//           <button type="submit" className="addtask">Add task</button>
//         </form>
//         <div>
//           {todo.map((value, index) => (
//             <ul style={{ listStyle: 'none' }}>
//   <li key={index}>
//     <input type="checkbox" />
//     <span>{value}</span>
//     <i className="bi bi-pencil-square" style={{ marginLeft: '80px',marginRight: '15px' }}></i>
//    <i id="trash" className="bi bi-trash3" style={{ color: 'white'}}></i>
//   </li>
// </ul>

//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Todo;


import React, { useState } from "react";
import todoCss from "./todo.module.css";

function Todo() {
  const [task, setTask] = useState("");
  const initialTasks = ["buy car", "buy bike", "kuch bhi"];
  const [todo, setTodo] = useState(initialTasks);
  const [isEditing, setIsEditing] = useState(null);
  const [currentTask, setCurrentTask] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (task.trim()) {
      setTodo([...todo, task]);
      setTask("");
    }
  }

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleDelete(index) {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  }

  function handleEdit(index) {
    setIsEditing(index);
    setCurrentTask(todo[index]);
  }

  function handleEditChange(e) {
    setCurrentTask(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const newTodo = todo.map((item, index) => (index === isEditing ? currentTask : item));
    setTodo(newTodo);
    setIsEditing(null);
    setCurrentTask("");
  }

  return (
    <div className={todoCss.todo}>
      <div className={todoCss.main}>
        <i class="bi bi-book-half" style={{width: '50px', height: '50px', color: 'red' }}></i>
        <h1>Todo List</h1>
        <form onSubmit={handleForm}>
          <input className={todoCss.inputvlu} type="text" value={task} onChange={handleTaskChange} placeholder="Add new task" style={{borderColor: 'red', borderRadius: '20px',borderWidth: '3px'}} />
          <button type="submit" className={todoCss.addtask}>Add Task</button>
        </form>
        <div>
          {todo.map((value, index) => (
            <ul key={index} style={{ listStyle: 'none' }}>
              <li>
                {isEditing === index ? (
                  <form onSubmit={handleEditSubmit} >
                    <input type="text" value={currentTask} onChange={handleEditChange} />
                    <button type="submit">Save</button>
                  </form>
                ) : (
                  <>
                    <input type="checkbox" />
                    <span>{value}</span>
                    <i
                      className="bi bi-pencil-square"
                      style={{ marginLeft: '80px', marginRight: '15px', cursor: 'pointer' , color: "blue" }}
                      onClick={() => handleEdit(index)}
                    ></i>
                    <i
                      id="trash"
                      className="bi bi-trash3"
                      style={{ color: 'red', cursor: 'pointer' }}
                      onClick={() => handleDelete(index)}
                    ></i>
                  </>
                )}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
