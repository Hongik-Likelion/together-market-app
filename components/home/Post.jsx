import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import PostItem from './PostItem';
import { FlatList } from 'react-native';
import axios from 'axios';
import { useFetchData } from '@hooks/fetch';
import { fetchBoardList } from 'api/board';
import format from 'pretty-format';

function Post() {

  const [isLoading, isError, posts] = useFetchData(fetchBoardList);

  
  if (isLoading) return null;

  if (isError) return null;

  if (posts!==null) {
    console.log('통신 성공:', posts)
    return (
      <Container>
        <FlatList
          data={posts}
          renderItem={({item}) => <PostItem post={item}/>}
        
        />
      </Container>
    );
  } else {
    console.log('통신실패')
  }
}

const Container = styled.View`
  height: 94%;
`;
export default Post;