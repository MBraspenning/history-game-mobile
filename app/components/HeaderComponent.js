import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = ({ score, total }) => {
    return (
        <View style={ styles.container }>
            <Text style={{ color: 'white' }}>History Game</Text>
            <Text style={{ color: 'white' }}>Score: { score }/{ total }</Text>
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


export default HeaderComponent;