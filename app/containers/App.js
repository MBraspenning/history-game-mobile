import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import QuestionComponent from '../components/QuestionComponent';
import AnswerComponent from '../components/AnswerComponent';
import TriviaComponent from '../components/TriviaComponent';

import { getQuestion } from '../Actions';

const mapStateToProps = state => {
    return {
        currentQuestion: state.question,
        totalQuestions: state.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onGetQuestion: () => dispatch(getQuestion())
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.onGetQuestion();
    }
    
    render() {
        const { currentQuestion, totalQuestions } = this.props;
        
        return (
            <ImageBackground
                source={require('../../assets/historyApp-bg2.jpg')}
                style={{flex: 1}}
            >
                <HeaderComponent />
                <QuestionComponent question={ currentQuestion } total={ totalQuestions } />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
