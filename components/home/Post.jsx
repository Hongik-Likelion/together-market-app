import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import PostItem from './PostItem';
import { FlatList } from 'react-native';
import { fetchBoardList } from 'api/board';
import format from 'pretty-format';
import { View, Text } from 'react-native';

function Post() {
  //const [isLoading, isError, posts] = useFetchData(fetchBoardList);

  // 게시글 리스트 조회 API
  const [postsData, setPostsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // !!!!!!!!!! 이거 추후 API에서 return 받은걸로 변경 필요.
  const market_id = 1;

  useEffect(() => {
    setIsLoading(true);
    fetchBoardList(market_id)
      .then((res) => {
        console.log(format(res.data));
        setPostsData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error fetchBoardList');
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>에러 발생</Text>
      </View>
    );
  }

  return (
    <Container>
      <FlatList data={postsData} renderItem={({ item }) => <PostItem post={item} />} />
    </Container>
  );
}

const Container = styled.View`
  height: 94%;
`;
export default Post;
