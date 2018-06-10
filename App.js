import React from 'react';
import {
    StyleSheet, Text, View, Dimensions, Alert, ImageBackground, Image, StatusBar
} from 'react-native';
import {Button} from 'native-base';
import {Router, Scene} from "react-native-router-flux";
import Welcome from "./src/components/welcome";
import Login from "./src/components/login";
import Register from "./src/components/register";
import Splash from "./src/components/splash";

var width = Dimensions.get('window').width;

export default class App extends React.Component {
    render() {
        return (
            <Router >
                <Scene key="root"  hideNavBar={true}>
                    <Scene key="splash"
                           component={Splash}
                           initial
                    />
                    <Scene key="welcome"
                           panHandlers={null}
                           component={Welcome}
                    />
                    <Scene key="login"
                           component={Login}
                    />
                    <Scene key="register"
                           component={Register}
                    />

                </Scene>
            </Router>        );
    }
}

