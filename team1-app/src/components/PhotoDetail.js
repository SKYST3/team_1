import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: #F8F9FA;
  padding: 16px;
  padding-bottom: 80px;
`;

const ImageWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 16px;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 20px;
  aspect-ratio: 3/4;
  object-fit: cover;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: -20px;' : 'right: -20px;'}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ContentWrapper = styled.div`
  background: white;
  border-radius: 20px;
  padding: 16px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
`;

const Date = styled.span`
  font-size: 14px;
  color: #666;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
`;

const MoreButton = styled.button`
  border: none;
  background: none;
  color: #666;
  font-size: 14px;
  padding: 0;
  margin-top: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &::after {
    content: '›';
    margin-left: 4px;
  }
`;

const CommentsTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 24px 0 16px 0;
`;

const Comment = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
`;

const CommentAuthor = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const CommentContent = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

const CommentTime = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
`;

const CommentInput = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 16px;
  background: white;
  display: flex;
  gap: 8px;
  border-top: 1px solid #eee;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #eee;
  border-radius: 24px;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  background: #C966EC;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 0 24px;
  font-size: 14px;
  cursor: pointer;
`;

export function PhotoDetail() {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');

  const mockComments = [
    {
      author: '김민정',
      content: '와 너무 귀엽다~!!!',
      timestamp: '25/05/10 20:46'
    },
    {
      author: '김민정',
      content: '와 너무 귀엽다~!!!',
      timestamp: '25/05/10 20:46'
    }
  ];

  return (
    <Container>
      <ImageWrapper>
        <MainImage src="placeholder.jpg" alt="내가 태어난 날" />
        <NavigationButton direction="left">‹</NavigationButton>
        <NavigationButton direction="right">›</NavigationButton>
      </ImageWrapper>

      <ContentWrapper>
        <TitleRow>
          <Title>내가 태어난 날</Title>
          <Date>2004.02.01</Date>
        </TitleRow>
        <Description>
          내가 태어나던 순간 사진이다.<br />
          나는 새벽 4시에 태어났고<br />
          내 태명은 OO이었다고 한다.
        </Description>
        <MoreButton>...더보기</MoreButton>
      </ContentWrapper>

      <CommentsTitle>추억을 나눠봐요</CommentsTitle>
      {mockComments.map((comment, index) => (
        <Comment key={index}>
          <CommentAuthor>{comment.author}</CommentAuthor>
          <CommentContent>{comment.content}</CommentContent>
          <CommentTime>{comment.timestamp}</CommentTime>
        </Comment>
      ))}

      <CommentInput>
        <Input
          type="text"
          placeholder="사진과 관련된 추억을 댓글로 남겨보세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <SubmitButton>등록</SubmitButton>
      </CommentInput>
    </Container>
  );
} 