import RatingStar from '@components/home/RatingStar';
import { COLORS } from 'colors';
import { useSharedState } from 'context/FavAndLikeContext';
import format from 'pretty-format';
import React from 'react';
import { Modal, Pressable, TouchableWithoutFeedback } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styled } from 'styled-components/native';

function MarketModalItem({modal, shop, toggleModal}) {

    console.log(format(shop));
    const {shop_name, shop_address, selling_products, rating, opening_time, opening_frequency, closing_time} = shop;
    const { favorite, setFavorite, userLike, setUserLike, likeCount, setLikeCount } = useSharedState();

    
    
    
    // '가게 정보' 버튼 클릭시 가게 정보 모달창 띄우기
    // const [modal, setModal] = useState(false);
    // const toggleModal = () => {
    //     setModal(!modal);
    // }
    
    // 하트 아이콘(관심 기능)
    const addFav = () => {
        setFavorite(!favorite);
        // DB에 저장된 정보(유저 정보, 하트 누른 게시물 등...) 수정하는 코드 작성?
    }

    
    return(
        
                <Modal
                    animationType='none'
                    transparent={true}
                    visible={modal}
                    onRequestClose={toggleModal}
                >
                    <TouchableWithoutFeedback onPress={toggleModal}>
                        {/*일단 모달창 한번더 클릭했을 때 닫히도록 구현 */}
                        {/*onBackdropPress 옵션 찾아보기 */}
                    <MarketInfoModal favorite={favorite}>
                        <Group>
                            <NameAndOpen>
                                <NameModal>{shop_name}</NameModal>
                                <OpenModal>운영중</OpenModal>
                            </NameAndOpen>

                            {favorite ? (
                                <Pressable onPress={() => addFav()}>
                                    <AntDesign name={'heart'} size={RFValue(18)} color={COLORS.red}/>
                                </Pressable>
                            ) : (
                                <Pressable onPress={() => addFav()}>
                                    <AntDesign name={'hearto'} size={RFValue(18)}/>
                                </Pressable>
                            )}

                        </Group>

                        <RatingModal>
                            <RatingStar rating={rating}/>
                            <RatingModalLabel>{rating}<Label>/5</Label></RatingModalLabel>
                        </RatingModal>

                        <SubGroup>
                            <FirstLine>
                                <Title>주소</Title><Detail>{shop_address}</Detail>
                            </FirstLine>
                            <SecondLine>
                                <Title>영업시간</Title><Detail>{opening_frequency} {opening_time}~{closing_time}</Detail>
                            </SecondLine>
                            <ThirdLine>
                                <Title>판매 상품</Title><Detail>{selling_products}</Detail>
                            </ThirdLine>
                        </SubGroup>
                    </MarketInfoModal>
                    </TouchableWithoutFeedback>
                </Modal>

    );
}

const MarketInfoModal = styled.View`
    background-color: #FFFFFF;
    border: solid 2px ${COLORS.main};
    border-radius: 10px;
    margin-left: ${wp(5)}px;
    margin-right: ${wp(5)}px;
    
    margin-top: ${hp(55)}px;
    padding: 15px;
    

`;

const Group = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const NameAndOpen = styled.View`
    flex-direction: row;
    align-items: center;
`;

const NameModal = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: 700;
    margin-right: ${wp(2)}px;
`;

const OpenModal = styled.Text`
    font-size: ${RFValue(11)}px;
    font-weight: 700;
    color: ${COLORS.main};
`;

const RatingModal = styled.View`
    flex-direction: row;

    margin-bottom: 10px;
    align-items: center;

`;

const RatingModalLabel = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 500;
    margin-left: ${wp(1)}px;
`;


const Label = styled.Text`
    color: ${COLORS.gray01};
`;

const SubGroup = styled.View`
    width: 100%;
`;

const FirstLine = styled.View`
    flex-direction: row;
`;

const SecondLine = styled.View`
    flex-direction: row;
`;

const ThirdLine = styled.View`
    flex-direction: row;
`;

const Title = styled.Text`
    font-size: ${RFValue(13)}px;
    font-weight: 700;
    width: 24%;
    line-height: 25px;

`;

const Detail = styled.Text`
    font-size: ${RFValue(13)}px;
    width: 76%;
    line-height: 25px;

`;

export default MarketModalItem;