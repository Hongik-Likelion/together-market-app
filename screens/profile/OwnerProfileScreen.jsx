import React, { useEffect, useState } from 'react';
import OwnerInfoTopTab from '@components/profile/mainProfile/owner/OwnerInfoTopTab';
import MyMarkCommentList from '@components/profile/mainProfile/owner/MyMarkCommentsList';
import OwnerPostingList from '@components/profile/mainProfile/owner/OwnerPostingList';

import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';

function OwnerProfileScreen() {
  //개인정보 조회 API
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUserInfo()
      .then((res) => {
        setUserData(res.userData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  //나의 게시물 API
  const [myPostData, setMyPostData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchMyPost()
      .then((res) => {
        setMyPostData(res.myPostData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  //가게 후기 API
  const [myMarkCommentData, setMyMarkCommentData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchMyMarkComment()
      .then((res) => {
        setMyMarkCommentData(res.myMarkCommentData);
        setIsLoading(false);
      })
      .catch((err) => {
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

  const [isMyPost, selectMyPost] = useState(true);
  const [isMarkComment, selecMarkComment] = useState(false);

  const onPressMyPostBtn = () => {
    selectMyPost(true);
    selecMarkComment(false);
  };
  const onPressMarkCommentBtn = () => {
    selectMyPost(false);
    selecMarkComment(true);
  };

  return (
    <Container>
      <OwnerInfoTopTab
        nickname={userData.nickname}
        profile={userData.profile}
        introduction={userData.introduction}
        is_owner={userData.is_owner}
        myPostingsCount={myPostData.length}
        myFavMarketsCount={myMarkCommentData.length}
        opening_time={userData.market.opening_time}
        closing_time={userData.market.closing_time}
      />
      <SelectMenu>
        <MyPost isMyPost={isMyPost} onPress={onPressMyPostBtn}>
          <MyPostTxt isMyPost={isMyPost}>나의 게시물</MyPostTxt>
        </MyPost>
        <FavMark isMarkComment={isMarkComment} onPress={onPressMarkCommentBtn}>
          <FavMarkTxt isMarkComment={isMarkComment}> 가게 후기</FavMarkTxt>
        </FavMark>
      </SelectMenu>
      <ShowMainInfo>
        {isMarkComment ? (
          <MyMarkCommentList myMarkComments={myMarkCommentData} />
        ) : (
          <OwnerPostingList myPostings={myPostData} />
        )}
      </ShowMainInfo>
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const SelectMenu = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${hp(5)}px;
  justify-content: center;
  align-items: center;
`;

const MyPost = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({ isMyPost }) => (isMyPost ? 'black' : COLORS.gray01)};
`;

const MyPostTxt = styled.Text`
  font-size: ${RFValue(15)}px;
  ${({ isMyPost }) =>
    isMyPost
      ? `
      font-weight: bold;
      `
      : `
      font-weight: normal;
      `}
`;

const FavMark = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({ isMarkComment }) => (isMarkComment ? 'black' : COLORS.gray01)};
`;

const FavMarkTxt = styled.Text`
  font-size: ${RFValue(15)}px;
  ${({ isMarkComment }) =>
    isMarkComment
      ? `
      font-weight: bold;
      `
      : `
      font-weight: normal;
      `}
`;

const ShowMainInfo = styled.View``;

export default OwnerProfileScreen;
