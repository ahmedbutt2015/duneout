import React from 'react';
import {
    StyleSheet, Text, View, Dimensions, Alert, ImageBackground, Image, StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as Progress from 'react-native-progress';

var width = Dimensions.get('window').width;

export default class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
            this.setState({ indeterminate: false });
            setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({ progress });
            }, 300);
        }, 500);
        setTimeout(() => {
            Actions.welcome()
        }, 4000);
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/back.png')}
                style={{width: '100%', height: '100%'}}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Image
                            resizeMode={'contain'}
                            style={{width:'80%'}}
                            source={require('../assets/logo.png')}
                        />
                        <Progress.Bar
                            progress={this.state.progress}
                            width={200} />

                    </View>
                </View>
            </ImageBackground>
        );
    }

    onLoginBtn() {
        Actions.login()
    }
    onRegisterBtn() {
        Actions.register()
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIn: {
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
        height: 60,
        backgroundColor: '#fff'
    },
    buttonUp: {
        marginLeft: 50,
        marginRight: 50,
        height: 60,
        borderColor: '#fff',
        borderWidth: 1
    },
    belowHeader: {
        height: 200,
        width: width,
        backgroundColor: '#1f49a1',
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        alignItems: 'center',
        marginTop: 10

    }
});
