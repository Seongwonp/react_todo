function TodoItem({ todo, onToggle, onDelete }) {
    const { id, text, done, createdAt } = todo;

    const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    const cardStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#efefef",
        padding: "12px 16px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.04)",
        marginBottom: "10px",
    };

    const textStyle = {
        textDecoration: done ? "line-through" : "none",
        color: done ? "#aaa" : "#333",
        fontSize: "16px",
        flex: 1,
        marginLeft: "12px",
    };

    return (
        <div style={cardStyle}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={() => onToggle(id)}
                        style={{ width: "18px", height: "18px", marginRight: "8px" }}
                    />
                    <span style={textStyle}>{text}</span>
                </div>
                <span style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
          작성일: {formattedDate}
        </span>
            </div>
            {done && (
                <button
                    onClick={() => onDelete(id)}
                    style={{
                        padding: "6px 12px",
                        fontSize: "13px",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#ff4e4e",
                        color: "#fff",
                    }}
                >
                    삭제
                </button>
            )}
        </div>
    );
}


export default TodoItem;
