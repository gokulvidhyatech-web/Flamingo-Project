function Dashboard({ onLogout }) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>

      <p>Welcome Admin</p>

      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;