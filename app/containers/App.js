import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import QuestionComponent from '../components/QuestionComponent';
import AnswerComponent from '../components/AnswerComponent';
import TriviaComponent from '../components/TriviaComponent';

import { getQuestion, checkAnswer } from '../Actions';

const mapStateToProps = state => {
    return {
        currentQuestion: state.questionReducer.question,
        totalQuestions: state.questionReducer.total,
        score: state.questionReducer.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onGetQuestion: () => dispatch(getQuestion()),
        onCheckAnswer: (answer) => dispatch(checkAnswer(answer))
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.onGetQuestion();
    }
    
    render() {
        const { currentQuestion, totalQuestions, score, onCheckAnswer } = this.props;
        
        return (
            <ImageBackground
                source={require('../../assets/historyApp-bg2.jpg')}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1 }}>
                    <HeaderComponent score={ score } total={ totalQuestions } />
                </View>
                <View style={{ flex: 2 }}>
                    <QuestionComponent question={ currentQuestion } total={ totalQuestions } />
                </View>
                <View style={{ flex: 3 }}>
                    <AnswerComponent question={ currentQuestion } checkAnswer={ onCheckAnswer } />
                </View>
                <View style={{ flex: 2 }}>
                    <TriviaComponent question={ currentQuestion } />
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
