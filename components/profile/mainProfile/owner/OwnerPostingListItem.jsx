import { COLORS } from 'colors';
import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { fetchUserInfo } from 'api/auth';
import { getOneBoard } from 'api/board';
import { View, Text } from 'react-native';
import format from 'pretty-format';

function OwnerPostingListItem({ myPosting }) {
  const { shop_info, board_info } = myPosting;
  const [isOwner, setIsOwner] = useState(false);

  const navigation = useNavigation();

  // 개인정보조회해서 isOwner 확인(사장님/손님)
  useEffect(() => {
    fetchUserInfo()
      .then((res) => {
        // console.log(res.data.is_owner);
        setIsOwner(res.data.is_owner);
      })
      .catch((err) => console.log(err));
  });

  // 게시글 단일 조회 API
  const [oneBoardData, setOneBoardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getOneBoard(board_info.board_id)
      .then((res) => {
        console.log(format(res.data));
        setOneBoardData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error getOneBoard');
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

  //게시글 수정 페이지로 이동
  const onPressPostingItem = () => {
    // console.log("ㅇ으엉;")
    navigation.navigate(isOwner ? 'owner-posting' : 'user-posting', {
      isOwner: isOwner,
      oneBoardData: oneBoardData,
      board_id: board_info.board_id,
      showDeleteBtn: true
    });
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
          <ShopName>{shop_info.shop_name}</ShopName>
        </Firstline>

        <CreatedAt>{board_info.updated_at}</CreatedAt>
        <Content>{board_info.content}</Content>
        {board_info.content.length > 40 && (
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

const ShopName = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

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

export default OwnerPostingListItem;
