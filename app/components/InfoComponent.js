import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Finished } from '../data/Finished';

const InfoComponent = ({ question, total, score, isFinished, scoreRange }) => {
    return (
        isFinished 
        ? (
            <View style={[ styles.container, { justifyContent: 'center' } ]}>
                <Text style={ styles.infoText }>
                    { Finished.header[scoreRange] }
                </Text>
            </View>
        )                          
        : (
            <View style={[ styles.container, { justifyContent: 'space-between' } ]}>
                <Text style={ styles.infoText }>Question { question.index }/{ total }</Text>
                <Text style={ styles.infoText }>Score: { score }/{ total }</Text> 
            </View>              
        )
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    infoText: { 
        color: 'white',
        fontSize: 18,
    }
});

export default InfoComponent;