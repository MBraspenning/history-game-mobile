import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AnswerComponent = ({ question }) => {
    if (question.options) {
        return (
            <View style={ styles.container }>
                {
                    question.options.map((option, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <Text>{ option }</Text>
                            </TouchableOpacity>
                        )
                    })    
                }
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
        justifyContent: 'center',
    },
});

export default AnswerComponent;