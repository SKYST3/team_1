import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

// 기본 아이콘 import
import homeIcon from '../assets/icon/home.svg';
import photoIcon from '../assets/icon/photo.svg';
import musicIcon from '../assets/icon/music.svg';
import bookIcon from '../assets/icon/book.svg';
import movieIcon from '../assets/icon/movie.svg';
import chatIcon from '../assets/icon/chat.svg';

// filled 아이콘 import
import homeFilledIcon from '../assets/filled_icon/home.svg';
import photoFilledIcon from '../assets/filled_icon/photo.svg';
import musicFilledIcon from '../assets/filled_icon/music.svg';
import bookFilledIcon from '../assets/filled_icon/book.svg';
import movieFilledIcon from '../assets/filled_icon/movie.svg';
import chatFilledIcon from '../assets/filled_icon/chat.svg';

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

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
    filter: ${(props) => 
      props.$isActive
        ? 'invert(57%) sepia(89%) saturate(1771%) hue-rotate(247deg) brightness(97%) contrast(98%)'
        : 'none'};
  }

  span {
    font-size: 12px;
    color: ${(props) => (props.$isActive ? '#C966EC' : '#666')};
  }
`;

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      icon: homeIcon, 
      filledIcon: homeFilledIcon,
      label: '홈', 
      path: '/' 
    },
    { 
      icon: photoIcon, 
      filledIcon: photoFilledIcon,
      label: '사진', 
      path: '/photos' 
    },
    { 
      icon: musicIcon, 
      filledIcon: musicFilledIcon,
      label: '음악', 
      path: '/music' 
    },
    { 
      icon: bookIcon, 
      filledIcon: bookFilledIcon,
      label: '도서', 
      path: '/books' 
    },
    { 
      icon: movieIcon, 
      filledIcon: movieFilledIcon,
      label: '영화', 
      path: '/movies' 
    },
    { 
      icon: chatIcon, 
      filledIcon: chatFilledIcon,
      label: 'AI채팅', 
      path: '/chat' 
    },
  ];

  return (
    <NavContainer>
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        return (
          <NavItem 
            key={index}
            $isActive={isActive} // 수정된 부분
            onClick={() => navigate(item.path)}
          >
            <img 
              src={isActive ? item.filledIcon : item.icon} 
              alt={item.label} 
            />
            <span>{item.label}</span>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default BottomNavBar;
