import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

import { commonStyles } from '../common/Styles';

const TriviaComponent = ({ question }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.imageWrapper }>
                <Image source={require('../../assets/Roman_Soldier.png')} style={ styles.image } />
            </View>
            <View style={ styles.triviaWrapper }>
                <Text style={{ color: 'white', fontSize: 10 }}>{ question.trivia }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    imageWrapper: {
        flex: 1,
    },
    triviaWrapper: {
        flex: 2,
    }
});

export default TriviaComponent;