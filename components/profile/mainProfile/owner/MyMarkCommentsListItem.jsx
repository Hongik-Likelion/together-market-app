import { COLORS } from 'colors';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import Stars from '@assets/profile/MyPostingPage';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import { useNavigation } from '@react-navigation/native';

function MyMarkCommentListItem({ myMarkComment }) {
  const { user_info, board_info } = myMarkComment;
  const numOfStars = board_info.rating;

  // const navigation = useNavigation();

  //게시글 수정 페이지로 이동해야함. ( 나중에 소연 게시물 수정부분 API 진행한거보고 이 부분도 수정해야함)
  const onPressPostingItem = () => {
    //navigation.navigate('home-detail');
  };

  return (
    <Container onPress={onPressPostingItem}>
      <Photo
        source={{
          uri: board_info.photo,
        }}
      />
      <Info>
        <Firstline>
          <UserName>{user_info.nickname}</UserName>
          <Rating>
            <Stars
              one={numOfStars >= 1 ? COLORS.red : COLORS.gray01}
              two={numOfStars >= 2 ? COLORS.red : COLORS.gray02}
              three={numOfStars >= 3 ? COLORS.red : COLORS.gray02}
              four={numOfStars >= 4 ? COLORS.red : COLORS.gray02}
              five={numOfStars >= 5 ? COLORS.red : COLORS.gray02}
            />
          </Rating>
        </Firstline>

        <CreatedAt>{board_info.updated_at}</CreatedAt>
        <Content>{board_info.content}</Content>
        {board_info.content.length > 47 && (
          <ReadMore>
            <ReadMoreText>...더보기</ReadMoreText>
          </ReadMore>
        )}
      </Info>
      <SimpleLineIcons name={'arrow-right'} size={RFValue(20)} color={COLORS.black} />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  height: ${hp(17)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(8)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.lightgray};
`;

const Info = styled.View`
  flex: 1;
`;

const Firstline = styled.View`
  flex-direction: row;

  margin-bottom: ${hp(1)}px;
  align-items: center;
`;

const UserName = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

const Rating = styled.View``;

const Photo = styled.Image`
  margin-right: ${wp(2)}px;
  width: ${RFValue(90)}px;
  height: ${RFValue(90)}px;
`;
const CreatedAt = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-bottom: ${hp(1)}px;
  font-weight: bold;
`;

const Content = styled.Text`
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(18)}px;
  max-height: ${RFValue(18) * 2}px;
  width: ${RFValue(210)}px;
  overflow: hidden;
`;

const ReadMore = styled.View`
  position: absolute;
  right: 0;
  background-color: ${COLORS.white};
  margin-right: ${wp(-7.2)}px;
  z-index: 2;
  margin-top: ${hp(8.3)}px;
  width: 100px;
`;

const ReadMoreText = styled.Text`
  color: ${COLORS.gray01};
  font-size: ${RFValue(13)}px;
  font-weight: bold;
`;

export default MyMarkCommentListItem;
