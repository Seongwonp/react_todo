import { useState } from "react";

function TodoEditor({ onAdd }) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleAdd = () => {
        if (text.trim() === "") return;
        onAdd(text.trim());
        setText(""); // 입력 후 초기화
    };

    return (
        <>
            <h3 className="todo-editor-title">새로운 todo 추가하기 ✏️</h3>
            <div className="todo-editor">
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={text}
                    onChange={handleChange}
                />
                <button onClick={handleAdd}>추가</button>
            </div>
        </>

    );
}

export default TodoEditor;
