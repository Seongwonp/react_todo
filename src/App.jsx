import './App.css'
import Header from "./component/Header.jsx";
import TodoEditor from "./component/TodoEditor.jsx";
import TodoList from "./component/TodoList.jsx";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const handleAdd = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            done: false,
            createdAt: Date.now(),
        };
        setTodos([newTodo, ...todos]);
    };

    const handleToggle = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };



    return (
        <>
            <main className="App">
                <div>
                    <Header/>
                </div>
                <div>
                    <TodoEditor onAdd={handleAdd} />
                </div>
                <h3 className="todo-editor-title">Todo List ✅</h3>
                <div className="todo-editor">
                    <input
                        type="text"
                        placeholder="할 일을 검색해보세요"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        style={{
                            padding: "10px 16px",
                            marginLeft: "8px",
                            backgroundColor: "#aaa",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "14px"
                        }}
                        onClick={() => setSearchTerm('')}
                    >
                        Clear
                    </button>
                </div>


                <div className="todo-list-wrapper">
                    <TodoList
                        todos={todos.filter(todo =>
                            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
                        )}
                        onDelete={handleDelete}
                        onToggle={handleToggle}
                    />

                </div>
            </main>
        </>
    );
}

export default App
