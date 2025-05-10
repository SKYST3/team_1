import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BottomNavBar from './components/BottomNavBar';
import Home from './components/Home';
import { Photos } from './components/Photos';
import { PhotoDetail } from './components/PhotoDetail';
import FuneralPage from './pages/FuneralPage';
import { Music } from './components/Music';
import { PlaylistDetail } from './components/PlaylistDetail';
import { MusicRegister } from './components/MusicRegister';
import { Book } from './components/Book';
import { BookDetail } from './components/BookDetail';
import { Movies } from './components/Movies';
import { MovieDetail } from './components/MovieDetail';
import VoiceRecordingPage from './pages/VoiceRecordingPage';
import AudioPlayer from './components/AudioPlayer';
import AudioRecorder from './components/AudioRecorder';
import './App.css';

// 임시 페이지 컴포넌트들
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
          <Route path="/music/playlist/:id" element={<PlaylistDetail />} />
          <Route path="/music/register" element={<MusicRegister />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/funeral" element={<FuneralPage />} />
          <Route path="/voice-recording" element={<VoiceRecordingPage />} />
          <Route path="/audio-player" element={<AudioPlayer />} />
          <Route path="/audio-recorder" element={<AudioRecorder />} />
          <Route path="/ai" element={<div>AI 채팅 페이지</div>} />
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
