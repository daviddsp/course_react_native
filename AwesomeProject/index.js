import React, { Component } from 'react';
import { 
    AppRegistry, 
    StyleSheet,
    View,
    Platform, } from 'react-native';


    
//import App from './App';

import {Scene, Router} from 'react-native-router-flux'
import HomeView from './App'
import ArtistDetail from './src/Artist/ArtistDetailView'
import LoginView from './src/LoginView';



class PlaziMusic extends React.Component { 
    render() {
        const isAndroid = Platform.OS === 'android'
        return <Router>
            
            <Scene key="root">
                <Scene key="login" component={LoginView} hideNavBar />
                <Scene key="home" component={HomeView} hideNavBar />
                <Scene key="artistDetail" component={ ArtistDetail } hideNavBar={isAndroid} />
            </Scene>
        </Router>
    }
}

AppRegistry.registerComponent('AwesomeProject', () => PlaziMusic);
