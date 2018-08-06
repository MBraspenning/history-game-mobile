import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const InfoComponent = ({ question, total, score }) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.infoText }>Question { question.index }/{ total }</Text>
            <Text style={ styles.infoText }>Score: { score }/{ total }</Text>               
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    infoText: { 
        color: 'white',
        fontSize: 18,
    }
});

export default InfoComponent;