import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, LeaderBoardPage, LoginPage, NewPage } from 'Layout';
import { AuthProvider } from 'Provider';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
          <Route path="/add" element={<NewPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
