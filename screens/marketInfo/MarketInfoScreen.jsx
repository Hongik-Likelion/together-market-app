import React, {useState} from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import AppGuideYoutube from '@components/marketInfo/AppGuideYoutube';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CardNews from '@components/marketInfo/CardNews';
import CardNewsImg1 from '@assets/marketInfo/CardNewsImg1';
import CardNewsImg2 from '@assets/marketInfo/CardNewsImg2';
import CardNewsImg3 from '@assets/marketInfo/CardNewsImg3';
import AppGuideYoutubeCard from './../../components/marketInfo/AppGuideYoutubeCard';
import { useNavigation } from '@react-navigation/native';
import Img1 from '@assets/marketInfo/CardNews1/Img1';
import Img2 from '@assets/marketInfo/CardNews1/Img2';
import Img3 from '@assets/marketInfo/CardNews1/Img3';
import Img4 from '@assets/marketInfo/CardNews1/Img4';

function MarketInfoScreen() {

    const [selectedTag, setSelectedTag] = useState(0);
    const handleTagSelect = (index) => {
        setSelectedTag(index);
    };

    const isTagSelected = (index) => {
        return index === selectedTag;
    };

    const navigation = useNavigation();

    const onPressCardNewsDetail = (cardData) => {
        navigation.navigate('marketInfo-detail', {cardData});
    }

    const data = [
        {
            id: 1,
            cardImg: <CardNewsImg1/>,
            cardCategory: '[정부간행물] ',
            cardContent1: '지하층이나 1층에서 영업하는 소상공인은 무료로 풍수해보험에 가입할 수 있게 됩니다.',
            cardContent2: '가입 대상: 지하층, 1층에서 영업하는 소상공인',
            cardContent3: '가입 경로: 카카오톡, 카카오 페이',
            cardContent4: '가입 기간: 2023.08.10 ~ 소진시까지',
            text: '🙆‍♀️ 자세한 정보는 아래 카드뉴스에서 확인하세요! 🙆‍♀️',
            cardNewsImg1: <Img1/>,
            cardNewsImg2: <Img2/>,
            cardNewsImg3: <Img3/>,
            cardNewsImg4: <Img4/>
        },
        {
            id: 2,
            cardImg: <CardNewsImg2/>,
            cardCategory: '[정부간행물] ',
            cardContent1: '소상공인 및 전통시장을 지원 「국민 서포터즈'
        },
        {
            id: 3,
            cardImg: <CardNewsImg3/>,
            cardCategory: '[시장뉴스] ',
            cardContent1: '요즘 시장 트렌드는? 함께사장과 알아보는'
        },
        {
            id: 4,
            cardImg: <AppGuideYoutubeCard/>,
            cardCategory: '[서비스가이드] ',
            cardContent1: '손님을 위한 손쉬운 함께사장 안내서 아래 영상으로 확인해보세요!',
            cardNewsImg1: <AppGuideYoutube/>
        },
    ];

  return (
    <Container>
      <Input 
          placeholder = "궁금한 정보를 검색해보세요."
          placeholderTextColor={COLORS.gray01}
        />
        <IconContainer>
            <Feather name={'search'} size={RFValue(18)} color={COLORS.main} />
        </IconContainer>
        <KeyboardAwareScrollView>

        <AppGuideYoutube></AppGuideYoutube>

        <Title>시장 정보 알아보기</Title>

        <TagContainer>
                <Tag onPress={() => handleTagSelect(0)} selected={isTagSelected(0)}>
                    <TagLabel selected={isTagSelected(0)}>전체</TagLabel>
                </Tag>
                <Tag onPress={() => handleTagSelect(1)} selected={isTagSelected(1)}>
                    <TagLabel selected={isTagSelected(1)}>정부간행물</TagLabel>
                </Tag>
                <Tag onPress={() => handleTagSelect(2)} selected={isTagSelected(2)}>
                    <TagLabel selected={isTagSelected(2)}>시장뉴스</TagLabel>
                </Tag>
                <Tag onPress={() => handleTagSelect(3)} selected={isTagSelected(3)}>
                    <TagLabel selected={isTagSelected(3)}>서비스가이드</TagLabel>
                </Tag>
         </TagContainer>

        <Content>
            {data.map(item => (
                <CardNews
                    
                    key={item.id}
                    cardData={item} // 전체 카드 데이터 전달
                    onPressCardNewsDetail={() => onPressCardNewsDetail(item)}
                />
            ))}
        </Content>
        
         </KeyboardAwareScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
`;

const IconContainer = styled.View`
  position: absolute;
  top: ${hp(2) + RFValue(10)}px;
  right: ${wp(5) + RFValue(10)}px;
`;

const Input = styled.TextInput`
  position: relative;
  background-color: ${COLORS.gray02};

  margin-left: ${wp(5)}px;
  margin-right: ${wp(5)}px;
  margin-top: ${hp(2)}px;
  margin-bottom: ${hp(2)}px;

  height: ${hp(6)}px;
  border-radius: 8px;

  font-size: ${RFValue(15)}px;
  font-weight: 700;
  padding-left: ${RFValue(10)}px;
`;

const TagContainer = styled.View`
    background-color: ${COLORS.gray02};
  flex-direction: row;
  align-items: center;
  padding-top: ${hp(1)}px;
  padding-bottom: ${hp(1)}px;
  padding-left: ${wp(5)}px;
  border-top-color: ${COLORS.gray01};
  border-top-width: 1.3px;
  border-bottom-color: ${COLORS.gray01};
  border-bottom-width: 1.3px;
`;

const Tag = styled.TouchableOpacity`
  border: 1.3px solid ${COLORS.main};
  background-color: ${props => (props.selected ? COLORS.main : COLORS.white)};
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
  color: ${props => (props.selected ? COLORS.white : COLORS.main)};
`;

const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: 700;
    margin-left: ${wp(5)}px;
    margin-bottom: ${hp(1.5)}px;
`;

const Content = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

`;

export default MarketInfoScreen;