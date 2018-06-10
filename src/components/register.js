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

export default class Register extends React.Component {
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
                    <Text style={{color:'#000',fontWeight:'bold',fontSize:18,marginBottom:15}}>Start your free Dineout account</Text>
                    <View style={{
                        borderTopWidth: 2,
                        borderColor: '#1e0fb6',marginBottom:15,
                        width:70}} >
                    </View>
                    <Text style={{marginBottom:25,fontWeight:'bold',color:'#515151'}}> Enter your Details</Text>
                    <Item style={styles.input} rounded>
                        <Input style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='First name'/>
                        <Icon active name="user" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Input style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='Last name'/>
                        <Icon active name="user" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Input style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6"  placeholder='Email Address'/>
                        <Icon active name="envelope-o" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}   />
                    </Item>
                    <Item style={styles.input} rounded>
                        <Input  style={{color:Global.COLOR.APP_GREY,fontSize:13}} placeholderTextColor="#c6c6c6" placeholder='Password'/>
                        <Icon name="eye" size={15} style={{marginRight:10,color:Global.COLOR.APP_GREY}}  />
                    </Item>

                    <Button style={styles.buttonUp} onPress={this.onRegisterBtn} rounded block> <Text style={{color: '#fff'}}>Next</Text></Button>
                    <TouchableOpacity onPress={() => Actions.login()}>
                        <Text style={{color:Global.COLOR.APP_GREY,fontSize:12,marginTop:5}}>Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    buttonUp: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        height: 55,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor:'#2112c4'
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
        height:45,
        marginLeft: 50,
        marginRight: 50,
        marginTop:10,
    }
});
