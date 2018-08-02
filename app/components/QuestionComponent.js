import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuestionComponent = () => {
    return (
        <View style={ styles.container }>
            <Text>Question ??/?? :</Text>
            <Text>Some placeholder question?</Text>
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