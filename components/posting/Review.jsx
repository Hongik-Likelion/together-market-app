import React, {useContext, useState} from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Text } from 'react-native';
import { CommonPostingContext } from 'context/CommonPostingContext';

function Review() {
    // const [reviewText, setReviewText] = useState("");
    const {
        reviewText,
        setReviewText,
    } = useContext(CommonPostingContext);

    return (
        <Container>
            <Title>
                <TitleLabel>
                방문 후기<Text style={{color: COLORS.red, fontSize: RFValue(13), fontWeight: 500}}> (필수)</Text>
                </TitleLabel>
            </Title>
            <Input
                placeholder = "방문 후기를 작성해주세요."
                placeholderTextColor={COLORS.gray01}
                value={reviewText}
                onChangeText={setReviewText}
            />
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

const Input = styled.TextInput`

  font-size: ${RFValue(13)}px;
  font-weight: 700;
  padding-left: ${wp(5)}px;
  padding-top: ${hp(1)}px;
  padding-bottom: ${hp(8)}px;
`;
export default Review;