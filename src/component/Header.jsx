function Header() {
    const style = {
        padding: "24px 0",
        textAlign: "center",
        borderBottom: "1px solid #eee",
        marginBottom: "16px",
    };

    const date = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });

    return (
        <header style={style}>
            <h1 style={{ fontSize: "32px", marginBottom: "8px", color:"black"}}>📋 Todo</h1>
            <p style={{ fontSize: "16px", color: "#4c9ee6" }}>{date}</p>
        </header>
    );
}

export default Header;
