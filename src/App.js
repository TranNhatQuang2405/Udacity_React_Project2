import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, LeaderBoardPage, LoginPage, NewPage } from 'Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/add" element={<NewPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
