import React from 'react';
import { styled } from 'styled-components/native';
import Category from '@components/home/Category';
import Post from '@components/home/Post';
import Header from '@components/home/Header';
import PostButton from '@components/home/PostButton';

function HomeScreen() {
  return (
    <Container>
      {/* <Header></Header> */}
      <Category></Category>
      <Post></Post>
      <PostButton></PostButton>
      {/* <Tab></Tab> */}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export default HomeScreen;
