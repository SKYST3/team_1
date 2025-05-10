import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavBar from '../src/components/BottomNavBar';
import './App.css';

// 임시 페이지 컴포넌트들
const Home = () => <div>홈</div>;
const Photos = () => <div>사진</div>;
const Music = () => <div>음악</div>;
const Books = () => <div>책</div>;
const Movies = () => <div>영화</div>;
const Chat = () => <div>AI채팅</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/music" element={<Music />} />
          <Route path="/books" element={<Books />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App; 