import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = () => {
    return (
        <View style={ styles.container }>
            <Text>History Game</Text>
            <Text>Score: ??/??</Text>
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