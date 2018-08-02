import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import QuestionComponent from '../components/QuestionComponent';
import AnswerComponent from '../components/AnswerComponent';
import TriviaComponent from '../components/TriviaComponent';

export default class App extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../../assets/historyApp-bg2.jpg')}
                style={{flex: 1}}
            >
                <HeaderComponent />
                <QuestionComponent />
                <AnswerComponent />
                <TriviaComponent />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
