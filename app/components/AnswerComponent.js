import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { commonStyles } from '../common/Styles';

const AnswerComponent = ({ question, total, checkAnswer, getQuestion, finish, reset }) => {
    if (question.options) {
        return (
            <View style={ styles.container }>
                {
                    question.options.map((option, index) => {
                        return (
                            <View key={ index } style={ styles.optionsWrapper }>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity 
                                        style={[ 
                                            styles.options, 
                                            question.result && question.answer === index + 1  
                                            ? styles.correctAnswer 
                                            : null, 
                                            question.result !== question.answer && question.result === index + 1
                                            ? styles.wrongAnswer
                                            : null
                                        ]}
                                        key={ index } 
                                        onPress={ () => checkAnswer(index) }                              
                                    >
                                        <Text style={ commonStyles.basicText }>{ option }</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })    
                }
                <View style={ styles.buttonWrapper }>
                {
                    question.result
                    ? (
                        <TouchableOpacity 
                            style={ styles.button }
                            onPress={ () => question.index === total ? finish() : getQuestion() }
                        >
                            <Text style={ commonStyles.basicText }>
                                {
                                    question.index === total
                                    ? 'Finish'
                                    : 'Next Question'
                                }
                            </Text>
                        </TouchableOpacity>
                    )
                    : null
                }
                </View>                
            </View>
        );    
    }
    
    return (
        <View style={ styles.container }>
            <Text>Loading</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5,
    },
    optionsWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    options: {
        borderWidth: 1,
        borderColor: '#710A0A',
        borderRadius: 5,        
        padding: 10,
        backgroundColor: 'rgba(113, 10, 10, 0.6)'
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginHorizontal: 10, 
    },
    button: {
        backgroundColor: '#BB6D6D',
        borderWidth: 1,
        borderColor: '#710A0A',
        borderRadius: 5,
        padding: 10, 
        marginBottom: 7,
    },
    correctAnswer: {
        backgroundColor: 'rgb(0, 162, 139)'
    },
    wrongAnswer: {
        backgroundColor: 'rgb(220, 20, 60)'
    },
});

export default AnswerComponent;