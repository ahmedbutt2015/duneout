import React from 'react';
import {
    StyleSheet, Text, View, Dimensions, Alert, ImageBackground, Image, StatusBar, ScrollView, TouchableOpacity
} from 'react-native';
import {Button, Content, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Global from '../helpers/Global';
import { Actions } from 'react-native-router-flux'; // New code

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Login extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <Image
                    source={require('../assets/login-image-header.png')}
                    style={styles.image}
                    resizeMode={'contain'}>
                </Image>
                <View style={styles.content}>
                    <Text style={{color:'#000',fontWeight:'bold',fontSize:18,marginBottom:30}}>Back Office</Text>

                    <Item style={styles.input} rounded>
                        <Input style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='Email Address'/>
                        <Icon active name="envelope-o" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Input  style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6" placeholder='Password'/>
                        <Icon name="eye" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}  />
                    </Item>
                    <Text style={{color:Global.COLOR.APP_GREY,fontSize:12,marginTop:10}}>Forgot Your Password?</Text>

                    <Button style={styles.loginBtn}  block ><Text style={{color:'#fff'}}>Sign In</Text></Button>
                    <TouchableOpacity onPress={() => Actions.register()}>
                        <Text  style={{color:Global.COLOR.APP_GREY,fontSize:12,marginTop:2}}>Don't have an account? Create now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    loginBtn: {
        marginTop:110,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
        height: 60,
        backgroundColor: '#1e0fb6'
    },
    container: {
        backgroundColor : '#fff',
        height:'100%'
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20
    },
    image:{
        flex: 1,
        alignSelf: 'stretch',
        width: width,
        height: 280,
    },
    input:{
        marginLeft: 50,
        marginRight: 50,
        marginTop:10,
    }
});
