import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavBar from './components/BottomNavBar';
import Home from './components/Home';
import { Photos } from './components/Photos';
import { PhotoDetail } from './components/PhotoDetail';
import FuneralPage from './pages/FuneralPage';
import VoiceRecordingPage from './pages/VoiceRecordingPage';
import AudioPlayer from './components/AudioPlayer';
import AudioRecorder from './components/AudioRecorder';
import './App.css';

// 임시 페이지 컴포넌트들
const Music = () => <div>음악</div>;
const Books = () => <div>도서</div>;
const Movies = () => <div>영화</div>;
const Chat = () => <div>AI 채팅</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/photos/:id" element={<PhotoDetail />} />
          <Route path="/music" element={<Music />} />
          <Route path="/books" element={<Books />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/funeral" element={<FuneralPage />} />
          <Route path="/voice-recording" element={<VoiceRecordingPage />} />
          <Route path="/audio-player" element={<AudioPlayer />} />
          <Route path="/audio-recorder" element={<AudioRecorder />} />
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
