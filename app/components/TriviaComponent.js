import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const TriviaComponent = ({ question }) => {
    return (
        <View style={ styles.container }>
            <Text>{ question.trivia }</Text>
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

export default TriviaComponent;