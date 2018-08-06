import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import QuestionComponent from '../components/QuestionComponent';
import AnswerComponent from '../components/AnswerComponent';
import TriviaComponent from '../components/TriviaComponent';
import InfoComponent from '../components/InfoComponent';

import { getQuestion, checkAnswer, finish, reset } from '../Actions';

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
        onCheckAnswer: (answer) => dispatch(checkAnswer(answer)),
        onReset: () => dispatch(reset()),
        onFinish: () => dispatch(finish())
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.onGetQuestion();
    }
    
    render() {
        const { currentQuestion, totalQuestions, score, onCheckAnswer, onGetQuestion, onFinish, onReset } = this.props;
        
        return (
            <ImageBackground
                source={require('../../assets/historyApp-bg2.jpg')}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 2 }}>
                    <HeaderComponent/>
                </View>
                <View style={{ flex: 1 }}>
                    <InfoComponent question={ currentQuestion } total={ totalQuestions } score={ score }></InfoComponent>
                </View>
                <View style={{ flex: 3 }}>
                    <QuestionComponent question={ currentQuestion }/>
                </View>
                <View style={{ flex: 5 }}>
                    <AnswerComponent 
                        question={ currentQuestion }
                        total={ totalQuestions } 
                        checkAnswer={ onCheckAnswer }
                        getQuestion={ onGetQuestion }
                        finish={ onFinish }
                        reset={ onReset }
                    />
                </View>
                <View style={{ flex: 3 }}>
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
