import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadDetails extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Read Details</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    }
});