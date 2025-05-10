import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

// 아이콘 import
import homeIcon from '../assets/icon/home.svg';
import photoIcon from '../assets/icon/photo.svg';
import musicIcon from '../assets/icon/music.svg';
import bookIcon from '../assets/icon/book.svg';
import movieIcon from '../assets/icon/movie.svg';
import chatIcon from '../assets/icon/chat.svg';

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  opacity: ${props => props.isActive ? 1 : 0.5};

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    color: ${props => props.isActive ? '#8a2be2' : '#666'};
  }
`;

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: homeIcon, label: '홈', path: '/' },
    { icon: photoIcon, label: '사진', path: '/photos' },
    { icon: musicIcon, label: '음악', path: '/music' },
    { icon: bookIcon, label: '책', path: '/books' },
    { icon: movieIcon, label: '영화', path: '/movies' },
    { icon: chatIcon, label: 'AI채팅', path: '/chat' },
  ];

  return (
    <NavContainer>
      {navItems.map((item, index) => (
        <NavItem 
          key={index}
          isActive={location.pathname === item.path}
          onClick={() => navigate(item.path)}
        >
          <img src={item.icon} alt={item.label} />
          <span>{item.label}</span>
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default BottomNavBar; 