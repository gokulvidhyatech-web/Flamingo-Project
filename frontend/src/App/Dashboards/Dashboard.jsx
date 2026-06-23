import "./Dashboard.css";

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">FH</div>
          <div>
            <h2>Flamingo</h2>
            <span>Healthcare CRM</span>
          </div>
        </div>

        <ul className="menu">
          <li className="active">🏠 Overview</li>
          <li>📨 Message History</li>

          <p>ENGAGEMENT</p>

          <li>📞 Dialer</li>
          <li>📋 Follow Ups</li>
          <li>🎯 Leads</li>

          <p>BROADCAST</p>

          <li>📢 Campaigns</li>
          <li>💬 Personalised</li>

          <p>ADMIN</p>

          <li>👨‍⚕️ Staff</li>
        </ul>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="content">

        {/* Header */}
        <div className="header">
          <div>
            <h1>Dashboard Overview</h1>
            <p>Welcome to Flamingo Healthcare CRM</p>
          </div>

          <div className="status">
            <span className="live-dot"></span>
            System Live
          </div>
        </div>

        {/* Cards */}
        <div className="cards">

          <div className="card">
            <h4>Messages Sent</h4>
            <h2>22</h2>
          </div>

          <div className="card">
            <h4>Patients Reached</h4>
            <h2>9</h2>
          </div>

          <div className="card">
            <h4>Missed Calls</h4>
            <h2 className="danger">2</h2>
          </div>

          <div className="card">
            <h4>Pending Callbacks</h4>
            <h2 className="warning">5</h2>
          </div>

          <div className="card">
            <h4>Consented Patients</h4>
            <h2>1</h2>
          </div>

        </div>

        {/* Tables */}
        <div className="tables">

          <div className="table-box">
            <h3>Engagement Summary</h3>

            <table>
              <thead>
                <tr>
                  <th>Trigger</th>
                  <th>Count</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Missed Call</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Call Completed</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Broadcast</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-box">
            <h3>Recent Calls</h3>

            <table>
              <thead>
                <tr>
                  <th>Phone</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>+91 99999 99999</td>
                  <td>
                    <span className="badge">
                      Answered
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>+91 88888 88888</td>
                  <td>
                    <span className="badge">
                      Answered
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;