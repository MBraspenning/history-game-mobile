import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AnswerComponent = ({ question }) => {
    if (question.options) {
        return (
            <View style={ styles.container }>
                {
                    question.options.map((option, index) => {
                        return (
                            <View key={ index } style={ styles.optionsWrapper }>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity 
                                        style={ styles.options }
                                        key={ index } 
                                        onPress={() => {console.log(index)}}                              
                                    >
                                        <Text style={{ color: 'white' }}>{ option }</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
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
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    optionsWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    options: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(113, 10, 10, 0.6)'
    }
});

export default AnswerComponent;