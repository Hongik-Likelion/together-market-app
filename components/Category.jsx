import React from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';

function Category() {

    return (
        <Container>
            <Tag><TagLabel>전체</TagLabel></Tag>
            <Tag><TagLabel>먹거리</TagLabel></Tag>
            <Tag><TagLabel>해산물</TagLabel></Tag>
            <Tag><TagLabel>채소/과일</TagLabel></Tag>
            <Tag><TagLabel>기타</TagLabel></Tag>
        </Container>
    );
}

const Container = styled.View`
    height: 6%;
    background-color: ${COLORS.gray02};

    border-top-color: ${COLORS.gray01};
    border-top-width: 1.3px;
    border-bottom-color: ${COLORS.gray01};
    border-bottom-width: 1.3px;
    
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
`;

const Tag = styled.View`
    border: 1.3px solid ${COLORS.main};
    background-color: ${COLORS.white};
    border-radius: 100px;
    padding: 5px 10px;
    margin-right: 10px;

`;

const TagLabel = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: ${COLORS.main};
`;
export default Category;