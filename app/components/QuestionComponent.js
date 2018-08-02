import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionComponent = ({ question, total }) => {
    return (
        <View style={ styles.container }>
            <Text>Question { question.index }/{ total } :</Text>
            <Text>{ question.question }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default QuestionComponent;