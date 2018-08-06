import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font } from 'expo';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }
    
    async componentDidMount() {        
        await Font.loadAsync({
            'Archeologicaps': require('../../assets/fonts/Archeologicaps.ttf')    
        });
        
        this.setState({ fontLoaded: true });
    }
    
    render() {
        const { score, total } = this.props;
        
        return (
            <View style={ styles.container }>
                {
                    this.state.fontLoaded 
                    ? (
                        <Text style={ styles.headerText }>History Game</Text>
                    )
                    : null
                } 
            </View>
        );    
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    headerText: { 
        color: 'white',
        fontFamily: 'Archeologicaps',
        fontSize: 28
    }
});


export default HeaderComponent;