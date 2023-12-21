import React, { useContext, useState } from 'react';
import { styled } from 'styled-components/native';
import { View, Text } from 'react-native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { CommonPostingContext } from 'context/CommonPostingContext';
import { useNavigation } from '@react-navigation/native';
import { makeNewBoard, modifyBoard } from 'api/board';
import format from 'pretty-format';

function PostingButton({ data, resetData, conditionBoard, board_id }) {
  const navigation = useNavigation();
  const { marketExists, shopExists, selectedTag, reviewText } = useContext(CommonPostingContext);

  const isAllFilled = marketExists && shopExists && selectedTag !== -1 && reviewText !== '';

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSecondLoading, setIsSecondLoading] = useState(false);
  const [isSecondError, setSecondIsError] = useState(false);

  const handlePosting = () => {
    if (conditionBoard == '생성') {
      //게시물 생성 API
      setIsLoading(true);

      makeNewBoard(board_id, data)
        .then((res) => {
          console.log(format(res.data));
          setIsLoading(false);
          resetData();
          navigation.navigate('home-list');
        })
        .catch((err) => {
          console.log('error makeNewBoard');
          console.log(err);
          setIsError(true);
          setIsLoading(false);
        });
    } else if (conditionBoard == '수정') {
      //게시물 수정 API
      setIsSecondLoading(true);

      modifyBoard(board_id, data)
        .then((res) => {
          console.log(format(res.data));
          setIsSecondLoading(false);
          resetData();
          navigation.navigate('profile');
        })
        .catch((err) => {
          console.log('error modifyBoard');
          console.log(err);
          setSecondIsError(true);
          setIsSecondLoading(false);
        });
    }
  };

  if (isLoading || isSecondLoading) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }

  if (isError || isSecondError) {
    return (
      <View>
        <Text>에러 발생</Text>
      </View>
    );
  }

  return (
    <Container>
      <PostingBtn
        isAllFilled={isAllFilled}
        disabled={!isAllFilled}
        onPress={handlePosting} // 버튼 클릭 시 handlePosting 함수 호출
      >
        <ButtonLabel isAllFilled={isAllFilled}>게시물 올리기</ButtonLabel>
      </PostingBtn>
    </Container>
  );
}

const Container = styled.View``;

const PostingBtn = styled.TouchableOpacity`
  margin-top: ${wp(4)}px;
  margin-bottom: ${wp(4)}px;
  margin-left: ${wp(5)}px;
  margin-right: ${wp(5)}px;
  height: ${hp(4.5)}px;
  border: solid 1px ${COLORS.main};
  background-color: ${(props) => (props.isAllFilled ? COLORS.main : COLORS.white)};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${(props) => (props.isAllFilled ? COLORS.white : COLORS.main)};
  font-weight: 700;
`;

export default PostingButton;
