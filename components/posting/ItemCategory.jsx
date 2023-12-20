import React, { useContext, useState } from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from 'react-native';
import { CommonPostingContext } from 'context/CommonPostingContext';

function ItemCategory({ isOwner, purchased_products, setPurchase_Product }) {
  const { selectedTag, setSelectedTag } = useContext(CommonPostingContext);

  const handleTagSelect = (index) => {
    setSelectedTag(index);

    let newSelection = [];
    // 먹거리를 클릭하면 1을 넣음
    if (index === 0) {
      newSelection = [1];
    }
    // 해산물을 클릭하면 2를 넣음
    else if (index === 1) {
      newSelection = [2];
    }
    // 채소/과일을 클릭하면 3을 넣음
    else if (index === 2) {
      newSelection = [3];
    }
    // 기타를 클릭하면 4를 넣음
    else if (index === 3) {
      newSelection = [4];
    }

    setPurchase_Product(newSelection);
  };

  const isTagSelected = (index) => {
    return index === selectedTag;
  };

  const titleText = isOwner ? '판매중 상품 종류' : '구매한 상품 종류';

  return (
    <Container>
      <Title>
        <TitleLabel>
          {titleText}
          <Text style={{ color: COLORS.red, fontSize: RFValue(13), fontWeight: 500 }}> (택1/필수)</Text>
        </TitleLabel>
      </Title>
      <TagContainer>
        <Tag onPress={() => handleTagSelect(0)} selected={isTagSelected(0)}>
          <TagLabel selected={isTagSelected(0)}>먹거리</TagLabel>
        </Tag>
        <Tag onPress={() => handleTagSelect(1)} selected={isTagSelected(1)}>
          <TagLabel selected={isTagSelected(1)}>해산물</TagLabel>
        </Tag>
        <Tag onPress={() => handleTagSelect(2)} selected={isTagSelected(2)}>
          <TagLabel selected={isTagSelected(2)}>채소/과일</TagLabel>
        </Tag>
        <Tag onPress={() => handleTagSelect(3)} selected={isTagSelected(3)}>
          <TagLabel selected={isTagSelected(3)}>기타</TagLabel>
        </Tag>
      </TagContainer>
    </Container>
  );
}

const Container = styled.View`
  border-bottom-width: 8px;
  border-bottom-color: ${COLORS.gray02};
`;

const Title = styled.View`
  border-bottom-color: ${COLORS.gray02};
  border-bottom-width: 2px;
`;

const TitleLabel = styled.Text`
  font-size: ${RFValue(17)};
  font-weight: 700;
  padding-top: ${hp(1.5)}px;
  padding-bottom: ${hp(1.5)}px;
  padding-left: ${wp(5)}px;
`;

const TagContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${hp(1.5)}px;
  padding-bottom: ${hp(1.5)}px;
  padding-left: ${wp(5)}px;
`;

const Tag = styled.TouchableOpacity`
  border: 1.3px solid ${COLORS.main};
  background-color: ${(props) => (props.selected ? COLORS.main : COLORS.white)};
  border-radius: 100px;

  padding-top: ${hp(0.5)}px;
  padding-bottom: ${hp(0.5)}px;
  padding-left: ${wp(3)}px;
  padding-right: ${wp(3)}px;

  margin-right: ${wp(1.5)}px;
`;

const TagLabel = styled.Text`
  font-size: ${RFValue(13)}px;
  font-weight: 700;
  color: ${(props) => (props.selected ? COLORS.white : COLORS.main)};
`;

export default ItemCategory;
