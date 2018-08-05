import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionComponent = ({ question, total }) => {
    return (
        <View style={ styles.container }>
            <Text style={{ color: 'white', fontSize: 25 }}>Question { question.index }/{ total } :</Text>
            <Text style={{ color: 'white', fontSize: 15, marginTop: 15 }}>{ question.question }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 20
    },
});

export default QuestionComponent;