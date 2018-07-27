import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('./assets/historyApp-bg2.jpg')}
                style={{flex: 1}}
            >
                <View style={styles.container}>
                    <Text>History Game</Text>    
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
