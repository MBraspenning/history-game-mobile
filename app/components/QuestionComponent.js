import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { commonStyles } from '../common/Styles';

const QuestionComponent = ({ question, total }) => {
    return (
        <View style={ styles.container }>
            <Text style={{ color: 'white', fontSize: 20 }}>Question { question.index }/{ total } :</Text>
            <Text style={[ commonStyles.basicText, { marginTop: 15 } ]}>{ question.question }</Text>
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