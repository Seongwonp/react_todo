import './App.css';
import Header from "./component/Header.jsx";
import TodoEditor from "./component/TodoEditor.jsx";
import TodoList from "./component/TodoList.jsx";
import { useState, useEffect } from "react";

function App() {
    // localStorage에서 초기값 바로 가져오기
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        console.log(storedTodos);
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const [searchTerm, setSearchTerm] = useState('');

    // todos가 바뀔 때마다 localStorage에 저장
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAdd = (text) => {
        const newTodo = {
            id: Date.now(),            text,
            done: false,
            createdAt: Date.now(),
        };
        setTodos([newTodo, ...todos]);
    };

    const handleToggle = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const filtered = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="App">
            <Header />
            <TodoEditor onAdd={handleAdd} />
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
                <div className="todo-count">
                    총 {todos.length}개 중 {filtered.length}개 표시됨
                </div>
                <TodoList
                    todos={todos.filter((todo) =>
                        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
                    )}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                />
            </div>
        </main>
    );
}

export default App;
