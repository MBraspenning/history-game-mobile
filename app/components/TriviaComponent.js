import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const TriviaComponent = () => {
    return (
        <View style={ styles.container }>
            <Text>Trivia section goes here!</Text>
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