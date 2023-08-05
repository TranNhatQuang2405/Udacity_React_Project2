import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, LeaderBoardPage, NewPage } from 'Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leader-board" element={<LeaderBoardPage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
