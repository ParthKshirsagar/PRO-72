import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, ToastAndroid, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class EnterDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            contact: '',
            profile: ''
        }
    }

    submitDetails = ()=>{
        db.collection('profiles').add({
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
            profile: this.state.profile
        })

        this.setState({
            name: '',
            email: '',
            contact: '',
            profile: ''
        })

        ToastAndroid.show('Your profile has been submitted', ToastAndroid.SHORT);
    }

    render(){
        return(
            <SafeAreaProvider>
                <KeyboardAvoidingView style={styles.container}
                behavior='padding' enabled>
                    <Header 
                        backgroundColor={'lightblue'}
                        centerComponent={{
                            text : 'Job Portal',
                            style : { color: '#fff', fontSize: 25, fontWeight: 'bold', paddingTop: 3.5, paddingBottom: 3.5 }
                        }}
                    />
                    <TextInput
                        placeholder='Name'
                        onChangeText={(text)=>{
                            this.setState({
                                name: text
                            })
                        }}
                        keyboardAppearance={'dark'}
                        placeholderTextColor='black'
                        value={this.state.name}
                        style={styles.applicantName}
                    />
                    <TextInput
                        placeholder='Email'
                        onChangeText={(text)=>{
                            this.setState({
                                email: text
                            })
                        }}
                        keyboardAppearance={'dark'}
                        placeholderTextColor='black'
                        value={this.state.email}
                        style={styles.email}
                    />
                    <TextInput
                        placeholder='Contact No.'
                        onChangeText={(text)=>{
                            this.setState({
                                contact: text
                            })
                        }}
                        keyboardAppearance={'dark'}
                        keyboardType={'numeric'}
                        placeholderTextColor='black'
                        value={this.state.contact}
                        style={styles.email}
                    />
                    <TextInput
                        placeholder='Enter your details'
                        onChangeText={(text)=>{
                            this.setState({
                                profile: text
                            })
                        }}
                        keyboardAppearance={'dark'}
                        placeholderTextColor='black'
                        value={this.state.profile}
                        style={styles.profile}
                        multiline={true}
                    />
                    <TouchableOpacity style={styles.submit} onPress={()=>{
                        this.submitDetails()
                    }}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    applicantName: {
        borderWidth: 2,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        color: 'black',
        padding: 7,
        marginTop: 40,
        margin: 20
    },
    email: {
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        padding: 7,
        borderWidth: 2,
        marginTop: 10,
        margin: 20
    },
    profile: {
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        height: 200,
        color: 'black',
        padding: 7,
        borderWidth: 2,
        marginTop: 10,
        margin: 20
    },
    submit: {
        backgroundColor: 'turquoise',
        width: 150,
        height: 50,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 10
    },
    buttonText: {
        fontSize: 21,
        color: 'white',
        fontWeight: 'bold'
    }
})