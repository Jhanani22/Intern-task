import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editingText, setEditingText] = useState("");


  const handleAdd = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

 
  const handleEdit = (index) => {
    setIsEditing(index);
    setEditingText(tasks[index]);
  };

  
  const handleSave = (index) => {
    if (editingText.trim() === "") return;
    const updated = tasks.map((task, i) => (i === index ? editingText : task));
    setTasks(updated);
    setIsEditing(null);
    setEditingText("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>To-Do List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task"
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addButton}>Add new task</button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={styles.input}
                />
                <button onClick={() => handleSave(index)} style={styles.saveButton}>Save</button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <button onClick={() => handleEdit(index)} style={styles.editButton}>Edit</button>
                <button onClick={() => handleDelete(index)} style={styles.deleteButton}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial",
  },
  heading: {
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  addButton: {
    padding: "8px 16px",
  },
  saveButton: {
    marginLeft: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    padding: "5px 10px",
  },
  editButton: {
    marginLeft: "10px",
    backgroundColor: "#2196f3",
    color: "white",
    padding: "5px 10px",
  },
  deleteButton: {
    marginLeft: "10px",
    backgroundColor: "#f44336",
    color: "white",
    padding: "5px 10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
};

export default TodoApp;
