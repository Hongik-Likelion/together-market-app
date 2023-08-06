import Category from '@components/Category';
import Header from '@components/Header';
import Post from '@components/Post';
import Tab from '@components/Tab';
import React from 'react';
import { styled } from 'styled-components/native';


function HomeScreen() {
    return (
        <Container>
            <Header></Header>
            <Category></Category>
            <Post></Post>
            <Tab></Tab>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`

export default HomeScreen;