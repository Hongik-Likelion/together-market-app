import React, { useState } from 'react';
import UserInfoTopTab from '@components/profile/mainProfile/user/UserInfoTopTab';
import MyPostingList from '@components/profile/mainProfile/user/MyPostingList';
import FavMarkList from '@components/profile/mainProfile/user/FavMarkList';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { fetchUserInfo, fetchMyPost, fetchMyfavShop } from 'api/auth';
import { View, Text } from 'react-native';
import format from 'pretty-format';
import { useFocusEffect } from '@react-navigation/native';

function UserProfileScreen() {
  //개인정보 조회 API
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //나의 게시물 API
  const [myPostData, setmyPostData] = useState(null);
  const [isPostLoading, setPostIsLoading] = useState(false);
  const [isPostError, setPostIsError] = useState(false);

  //나의 관심 가게 API
  const [myfavShopData, setmyfavShopData] = useState(null);
  const [isfavShopLoading, setFavShopIsLoading] = useState(false);
  const [isfavShopError, setFavShopIsError] = useState(false);

  const [isMyPost, selectMyPost] = useState(true);
  const [isFavMark, selectFavMark] = useState(false);

  const onPressMyPostBtn = () => {
    selectMyPost(true);
    selectFavMark(false);
  };
  const onPressFavMarkBtn = () => {
    selectMyPost(false);
    selectFavMark(true);
  };

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      fetchUserInfo()
        .then((res) => {
          console.log(format(res.data));
          setUserData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
          setIsLoading(false);
        });
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      setPostIsLoading(true);
      fetchMyPost()
        .then((res) => {
          console.log(format(res.data));
          setmyPostData(res.data);
          setPostIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPostIsError(true);
          setPostIsLoading(false);
        });
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      setFavShopIsLoading(true);
      fetchMyfavShop()
        .then((res) => {
          console.log(format(res.data));
          setmyfavShopData(res.data);
          setFavShopIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setFavShopIsError(true);
          setFavShopIsLoading(false);
        });
    }, []),
  );

  if (isLoading || isPostLoading || isfavShopLoading) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }

  if (isError || isPostError || isfavShopError) {
    return (
      <View>
        <Text>에러 발생</Text>
      </View>
    );
  }

  return (
    <Container>
      {userData && (
        <UserInfoTopTab
          nickname={userData.nickname}
          profile={userData.profile}
          introduction={userData.introduction}
          is_owner={userData.is_owner}
          myPostingsCount={myPostData ? myPostData.length : 0}
          myFavMarketsCount={myfavShopData ? myfavShopData.length : 0}
          favMarket={userData.favourite_markets.length > 0 ? userData.favourite_markets[0].market_name : ' '}
        />
      )}
      <SelectMenu>
        <MyPost isMyPost={isMyPost} onPress={onPressMyPostBtn}>
          <MyPostTxt isMyPost={isMyPost}>나의 게시물</MyPostTxt>
        </MyPost>
        <FavMark isFavMark={isFavMark} onPress={onPressFavMarkBtn}>
          <FavMarkTxt isFavMark={isFavMark}> 관심 가게</FavMarkTxt>
        </FavMark>
      </SelectMenu>
      <ShowMainInfo>
        {isFavMark
          ? myfavShopData && <FavMarkList myFavMarkets={myfavShopData} />
          : myPostData && <MyPostingList myPostings={myPostData} />}
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
  border-bottom-color: ${({ isFavMark }) => (isFavMark ? 'black' : COLORS.gray01)};
`;

const FavMarkTxt = styled.Text`
  font-size: ${RFValue(15)}px;
  ${({ isFavMark }) =>
    isFavMark
      ? `
      font-weight: bold;
      `
      : `
      font-weight: normal;
      `}
`;

const ShowMainInfo = styled.View``;

export default UserProfileScreen;
