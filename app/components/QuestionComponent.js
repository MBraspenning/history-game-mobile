import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { commonStyles } from '../common/Styles';

const QuestionComponent = ({ question, total }) => {
    return (
        <View style={ styles.container }>
            <Text style={[ commonStyles.basicText, { marginTop: 10 } ]}>{ question.question }</Text>
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