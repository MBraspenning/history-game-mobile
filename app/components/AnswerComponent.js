import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnswerComponent = () => {
    return (
        <View style={ styles.container }>
            <Text>Multiple Choice options go here!</Text>
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

export default AnswerComponent;